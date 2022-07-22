
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
  const workouts = [
      {
        name: 'warm up',
        workout: ['Jumping jack', 'Lunges', 'Push ups'],
        sets: ['1x5', '2x5', '3x5'],
        duration: ['5', '10', '10']
      },
      {
        name: 'core/resistance',
        workout: ['Floor bridge', 'Floor prone cobra', 'Single leg balance', 'Squat jump'],
        sets: ['2x5', '4x5', '6x5', '6x5'],
        duration: ['5', '10', '10', '5']
      },
      {
        name: 'workout',
        workout: ['Bench press', 'Lat pulldown', 'Shoulder press machine', 'Leg press'],
        sets: ['3x5', '6x5', '9x5', '9x5'],
        duration: ['5', '10', '10', '5']
      },
      {
        name: 'cool down',
        workout: ['Treadmill', 'Calves', 'Hip Flexors'],
        sets: ['4x5', '8x5', '12x5'],
        duration: ['5', '10', '10']
      },
  ]

  function clearRows() {
    addNum = 0;
    $('#table-add').empty();
    $('#table-add').append('<thead><tr><th style="width: 40%;" scope="col">Workout</th><th scope="col">Set x Reps</th><th scope="col">Duration</th><th style="width:10%" scope="col">Add</th></tr></thead><tbody id="add-rows"></tbody>')
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
      str += '<td>' + count[i] + '</td>'
      str += '<td>' + duration[i] + '</td>'
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

  $(document.body).on('click', 'a[id*="dd"]', function() {
    $('#dropdownMenu').prop('innerHTML', $(this).prop('innerHTML'))
    var val = Number($(this).prop('id').slice(-1)) - 1;
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
