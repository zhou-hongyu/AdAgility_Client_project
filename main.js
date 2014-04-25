$(document).ready(function(){
  $('h1').click(DemoApp.changeToRed);
  $(window).resize(DemoApp.soundAlarm);
  $('#fade-control').click(DemoApp.soundAlarm);
  $('#my-field').keydown(function(event) {
    console.log(event.keyCode);
  });
});