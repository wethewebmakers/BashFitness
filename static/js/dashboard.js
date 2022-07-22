
//search member
function memberSearch(memId){
  const ids = Object.values(memId)
  const idMap = {};
  for(var i in ids){
    idMap[ids[i][0]] = ids[i][1];
  }
  console.log(idMap)
  let id = document.getElementById('search-member').value;

  if(id in idMap) {
    window.location.href = '../joinedmembers/'+idMap[id];
  } else {
    document.getElementById('search-member').value = '';
    document.getElementById('search-invalid').innerHTML = 'Invalid Member ID';
    setTimeout(() => {
      document.getElementById('search-invalid').innerHTML = '';
    }, 3000);
  }
}

//workout list
$(document).ready(function(){
  var addNum = 0;
  var removeNum = 0;

  function clearRows() {
    addNum = 0;
    $('#table-add').empty();
    $('#table-add').append('<thead><tr><th scope="col">Workout</th><th style="width:15%" scope="col">Set x Reps</th><th style="width:15%" scope="col">Duration/Rest</th><th style="width:10%" scope="col">Add</th></tr></thead><tbody id="add-rows"></tbody>')
  }

  function generateRows(work, count, duration, action) {
    let str = '';
    for(i in work) {
      if(action === 'plus') {
        var val = 'plus-icon' + (++addNum);
      } else {
        var val = 'remove-icon' + (++removeNum);
      }
      str += '<tr>'
      str += '<td>' + work[i] + '</td>'
      if(count[i]) {
        str += '<td>' + count[i] + '</td>'
      } else {
        str += '<td></td>' 
      }
      if(duration[i]) {
        str += '<td>' + duration[i] + '</td>'
      } else {
        str += '<td></td>'
      }
      str += '<td style="width:10%">' + '<i id=' + val + ' class="fa fa-' + action + '"></i>' + '</td>'
      str += '</tr>'
    }
    if(action === 'plus') {
      $('#add-rows').append(str);
    } else {
      $('#remove-rows').append(str);
    }
  }

  $(document.body).on('click', 'i[id*="plus-icon"]', function() {
    var row = $(this).parent().parent().children();
    generateRows([row[0].innerHTML], [row[1].innerHTML], [row[2].innerHTML], 'remove');
  })

  $(document.body).on('click', 'i[id*="remove-icon"]', function() {
    $(this).parent().parent().remove();
  })

  $(document.body).on('click', 'a[id*="goal"]', function() {
    $('#goalMenu').prop('innerHTML', $(this).prop('innerHTML'))
  })

  $(document.body).on('click', 'li[id*="dd"]', function() {
    $('#dropdownMenu').prop('innerHTML', $(this).parent().prev().prop('innerHTML'))
    var val = Number($(this).prop('id').slice(-2)) - 1;
    clearRows();
    generateRows(workouts[val].workout, workouts[val].sets, workouts[val].duration, 'plus');
  })

  $(document.body).on('click', 'a[id*="gap"]', function() {
    let str = ''
    var val = 'remove-icon' + (++removeNum);
    str += '<tr><td colspan="3"><b>' + $(this).prop('innerHTML') + '</b></td>'
    str += '<td style="width:10%">' + '<i id=' + val + ' class="fa fa-remove"></i>' + '</td></tr>'
    $('#remove-rows').append(str)
  })

  $('#add').click(function() {
    let val1 = $('#workout-input').val();
    let val2 = $('#set-input').val();
    let val3 = $('#duration-input').val();
    if(val1 && val2 && val3) {
      generateRows([val1], [val2], [val3], 'remove');
      $('#workout-input').val('');
      $('#set-input').val('');
      $('#duration-input').val('');
    }
  })

  function printData(arr) {
    var divToPrint = document.getElementById("table-remove");
    newWin = window.open("");
    newWin.document.write('<u>BASH FITNESS - Workout List</u><br>');
    newWin.document.write('Name: ', arr[0], '<br>');
    newWin.document.write('Goal: ', arr[1], '<br><br>');
    newWin.document.write(divToPrint.outerHTML);
    newWin.document.close();
    newWin.focus();
    newWin.print();
    //newWin.close();
  }

  function fetchUserDetails() {
    var goal = $('#goalMenu').prop('innerText');
    var name = $('#name-input').val();
    if(goal === 'Select goal ') {
      goal = ''
    }
    if(name.length === 0) {
      name = ''
    }
    return [name, goal];
  }

  $('#print').click(function() {
    if($('#remove-rows').children().length) {
      var userInfo = fetchUserDetails();
      let row = $('#table-remove').prop('rows');
      for(i=0; i<row.length; i++) {
        if($(row[i]).children().length === 4) {
          var col = $(row[i]).children()[3];
        } else {
          var col = $(row[i]).children()[1];
        }
        $(col).remove();
      }
      printData(userInfo);
      $('#name-input').val('');
      $('#table-remove').empty();
      $('#table-remove').append('<thead><tr><th style="width: 40%;" scope="col">Workout</th><th scope="col">Set x Reps</th><th scope="col">Duration</th><th style="width:10%" scope="col">Remove</th></tr></thead><tbody id="remove-rows"></tbody>')
    }
  })
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
      formData.append("birthday", $('#ageInput').val());
      formData.append("gender", $('#genderInput').val());
      formData.append("address", $('#addressInput').val());
      formData.append("city", $('#cityInput').val());
      formData.append("state", $('#stateInput').val());
      formData.append("pincode", $('#pincodeInput').val());
      formData.append("occupation", $('#occupationInput').val());
      formData.append("working_hours", $('#workingHoursInput').val());
      formData.append("blood_group", $('#bloodGroupInput').val());
      formData.append("sleeping_time", $('#sleepingTimeInput').val());
      formData.append("emergency", $('#emergencyInput').val());
      formData.append("mode", $('#modeInput').val());
      formData.append("profile", $('#photoInput')[0].files[0]);
      formData.append("height", $('#heightInput').val() + 'cms');
      formData.append("weight", $('#weightInput').val() + 'kgs');
      formData.append("BMI", calculateBMI($('#weightInput').val(), $('#heightInput').val()));
      formData.append("attended_gym", $('#alreadyGymInput').val());
      formData.append("BP_check", fetchValues(['#disease1', '#disease2', '#disease3']));
      formData.append("question1", fetchValues(['#backPain1', '#backPain2']));
      formData.append("question2", fetchValues(['#touch1', '#touch2']));

      var question3 = fetchValues(['#smoke1', '#smoke2']);
      formData.append("question3", question3);
      if(question3 === 'Yes') {
          formData.append("smoking_habit", $('#oftenInput').val());
      }else{
          formData.append("smoking_habit", 'None');
      }

      formData.append("question4", fetchValues(['#injury1', '#injury2']));
      formData.append("question5", fetchValues(['#sleep1', '#sleep2']));

      var physical_activity = $('#exerciseLevelInput').val();
      formData.append("physical_activity", physical_activity)
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
          contentType: false,
          processData: false,
          success: function(response) {  
              if(response['status'] === 'success') {
                  $('#success-msg').prop('innerHTML', 'Member added successfully');
              } else {
                  $('#success-msg').prop('innerHTML', 'An error occured! Please try again.')
              }     
          }  
      });

      $('#add-form').css('display', 'none');
      $('#success-form').css('display', 'block');
  })

  $('#back-to-form').click(function() {
      window.location.href = "../addmember";
  })

});

