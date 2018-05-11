$(document).ready(function() {
  $('#hideButton').click(function() {
    $('#firstImg').hide();
    document.body.style.backgroundColor = "black";
    document.button.style.backgroundColor = "white";
    document.button.style.color = "black";
  });
  

  $('#showButton').click(function() {
    $('#firstImg').show();
    document.body.style.backgroundColor = "white";
  });

  $('#toggleButton').click(function() {
    $('#firstImg').toggle();

  });
});


 

