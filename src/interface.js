$( document ).ready(function() {

  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
  };

  updateTemperature()

  $('#usage').text(thermostat.currentEnergyUsage());

  $('#psmoff').css('color', 'red');
  $('#psmon').css('color', 'green');


  $( "#increase" ).on('click', function() {
    thermostat.up();
    updateTemperature()
  });

  $( "#decrease" ).on('click', function() {
    thermostat.down();
    updateTemperature()
  });

  $( "#reset" ).on('click', function() {
    thermostat.resetTemp();
    updateTemperature()
  });

  $( "#psmon" ).on('click', function() {
    thermostat.powerSavingModeOn();
    updateTemperature()
    $(this).css('color', 'green');
    $('#psmoff').css('color', 'red');
  });

  $( "#psmoff" ).on('click', function() {
    thermostat.powerSavingModeOff();
    $(this).css('color', 'green');
    $('#psmon').css('color', 'red');
  });

});
