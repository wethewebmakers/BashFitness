(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    //BMI
    $(document).ready(function () {
        function calculateBMI(w, h) {
            let temp = Math.pow(Number(h)/100,2).toFixed(1);
            return (Number(w)/temp).toFixed(1);
        }
        function calculateRange(a) {
            if(a < 18.6) {
                return 'Underweight';
            } else if(a > 18.5 && a < 25) {
                return 'Normal';
            } else if (a > 24.9 && a < 30) {
                return 'Overweight';
            } else {
                return 'Obese';
            }
        }
        $('#bmi-button').click(function() {
            let weight = $('#bmi-weight').val();
            let height = $('#bmi-height').val();
            if(weight && height) {
                let result = calculateBMI(weight, height);
                if(result>0 && result<50) {
                    let range = calculateRange(result);
                    $('#bmi-result').text('BMI value: ' + result + ' - ' + range);
                } else {
                    $('#bmi-result').text('BMI value: Try again!');
                }
                setTimeout(() => {
                    $('#bmi-result').text('BMI value: ');
                }, 5000);
                $('#bmi-weight').val('');
                $('#bmi-height').val('');
                $('#bmi-age').val('')
            }
        });
    });

    //formdata
    $(document).ready(function () {
        function calculateBMI(w, h) {
            if(w && h) {
                let temp = Math.pow(Number(h)/100,2).toFixed(1);
                return (Number(w)/temp).toFixed(1);
            }    
        }

        function validateNumber() {
            let number = $('#mobileInput').val();
            let name = $('#nameInput').val();
            if(!/^\d+$/.test(number)) {
                alert('Please enter a valid number');
                return false;
            }
            else if(!/^[A-Za-z\s]*$/.test(name)) {
                alert('Please enter a valid name');
                return false;
            } else {
                return true;
            }
        }

        $('#photoInput').on('change', function(e) {
            var files = e.currentTarget.files;
            if(files[0].size > 500000) {
                $(this).val(null)
                $('#photo-warning').prop('innerHTML', 'Maximum size allowed is 500KB');
                setTimeout(() => {
                    $('#photo-warning').prop('innerHTML', '');
                }, 2000);
            }
        })

        $('#remove-photo').click(function(e) {
            e.preventDefault();
            $('#photoInput').val(null);
        })

        $("#form1").submit(function(e) {
            e.preventDefault();
            if(validateNumber()) {
                $('#details-form').css("display", "none");
                $('#fitness-form').css("display", "block");
            }
        })

        $('#form-previous').click(function() {
            $('#details-form').css("display", "block");
            $('#fitness-form').css("display", "none");
        })

        function fetchValues(idArr) {
            let result = '';
            for(let id in idArr) {
                if($(idArr[id]).prop("checked")) {
                    result = result + $(idArr[id]).prop("value") + ', ';
                }
            }
            const len = result.length;
            if(len && result.slice(-2) === ', ') {
                return result.slice(0, len-2);
            } else {
                return '-';
            }
        }

        $('#smoke1').click(function() {
            $('#oftenInput').prop('disabled', false);
        })

        $('#smoke2').click(function() {
            $('#oftenInput').prop('disabled', true);
        })

        $('#exerciseLevelInput').click(function() {
            if($('#exerciseLevelInput').val() !== 'None') {
                $('#frequencyInput').prop('disabled', false);
                $('#durationInput').prop('disabled', false);
            } else {
                $('#frequencyInput').prop('disabled', true);
                $('#durationInput').prop('disabled', true);
            }
        })

        $("#form2").submit(function(e) {
            e.preventDefault();
            var formData = new FormData();
            formData.append("user_name", $('#nameInput').val());
            formData.append("user_email", $('#emailInput').val());
            formData.append("contact", $('#mobileInput').val());
            formData.append("address", $('#addressInput').val());
            formData.append("age", $('#ageInput').val());
            formData.append("gender", $('#genderInput').val());
            formData.append("city", $('#cityInput').val());
            formData.append("state", $('#stateInput').val());
            formData.append("pincode", $('#pincodeInput').val());
            formData.append("occupation", $('#occupationInput').val());
            formData.append("working_hours", $('#workingHoursInput').val());
            formData.append("blood_group", $('#bloodGroupInput').val());
            formData.append("sleeping_time", $('#sleepingTimeInput').val());
            formData.append("emergency", $('#emergencyInput').val());
            formData.append("mode", $('#modeInput').val());
            formData.append("image", $('#photoInput')[0].files[0]);
            formData.append("height", $('#heightInput').val() + 'cms');
            formData.append("weight", $('#weightInput').val() + 'kgs');
            formData.append("BMI", calculateBMI($('#weightInput').val(), $('#heightInput').val()));
            formData.append("attended_gym", $('#alreadyGymInput').val());
            formData.append("BP_check", fetchValues(['#disease1', '#disease2', '#disease3', '#disease4']));
            formData.append("question1", fetchValues(['#backPain1', '#backPain2']));
            formData.append("question2", fetchValues(['#touch1', '#touch2']));
            var question3 = fetchValues(['#smoke1', '#smoke2']);
            if(question3 === 'Yes') {
                formData.append("smoking_habit", $('#oftenInput').val());
            }else{
                formData.append("smoking_habit", 'None');
            }
            formData.append("question3", question3);
            formData.append("question4", fetchValues(['#injury1', '#injury2']));
            formData.append("question5", fetchValues(['#sleep1', '#sleep2']));
            var physical_activity = $('#exerciseLevelInput').val();
            formData.append("physical_activity", physical_activity);
            if(physical_activity !== 'None') {
                formData.append("exercise_frequency", $('#frequencyInput').val());
                formData.append("exercise_duration", $('#durationInput').val());
            }else{
                formData.append("exercise_frequency", 'None');
                formData.append("exercise_duration", 'None');
            }
            formData.append("question6", fetchValues(['#medication1', '#medication2']));
            formData.append("fitness_goal", fetchValues(['#goal1', '#goal2', '#goal3', '#goal4', '#goal5', '#goal6', '#goal7', '#goal8']));

            $.ajax({
                url: '../submitform',  
                type: 'POST', 
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {  
                    if(response['status'] === 'success') {
                        $('#success-msg').prop('innerHTML', 'Thanks for filling out the form. We will contact you soon. See you at gym!');
                    } else {
                        $('#success-msg').prop('innerHTML', 'An error occured! Please try again.')
                    }     
                }  
            });

            $('#fitness-form').css('display', 'none');
            $('#success-form').css('display', 'block');
        })

        $('#back-to-form').click(function() {
            window.location.href = "joinus";
        })

    })

    //whatsapp
    $(document).ready(function () {
        $('#wa-widget').click(function() {
            $('.wa-chat-box').css('display', 'block');
        })
        $('.wa-close').click(function() {
            $('.wa-chat-box').css('display', 'none');
        })
    })
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);


