$(document).ready(function(){
  const m = moment();

  var date = m.format('dddd MMM Mo YYYY');
  $('#date').html(date);

  var currentTime1 = m.format('LT').split(':');
  var currentTime2 = currentTime1[1].split(' ');
  var currentTime = {time: currentTime1[0] + currentTime2[1], id: 0}

  var rowTimes = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];

  rowTimes.forEach(rowTime => {
    $('#output' + rowTime).html(JSON.parse(localStorage.getItem(rowTime)));

    currentTime.id = (rowTimes.indexOf(currentTime.time) + 1);

    if ($('#row' + rowTime).attr('rowNum') > currentTime.id) {
      $('#row' + rowTime).css('background-color','#5cd65c');
    } else if ($('#row' + rowTime).attr('rowNum') < currentTime.id) {
      $('#row' + rowTime).css('background-color','#bfbfbf');
    } else {
      $('#row' + rowTime).css('background-color','#ff3333');
    }
  });

  $('button').click(function(){
    if ($(this).attr('id') === 'clear') {
      localStorage.clear();
      location.reload(true);
    } else {
      var selectedTime = $(this).attr('time');
      var input = $('#input' + selectedTime).val();
      localStorage.setItem(selectedTime, JSON.stringify(input));
      $('#output' + selectedTime).html(JSON.parse(localStorage.getItem(selectedTime)));
    }
  });
});
