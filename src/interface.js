$( document ).ready(function() {

  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
  };

  function showUsage() {
    $('#usage').text(thermostat.currentEnergyUsage());
  };

  updateTemperature();
  showUsage();


  $('#psmoff').css('color', 'red');
  $('#psmon').css('color', 'green');


  $( "#increase" ).on('click', function() {
    thermostat.up();
    updateTemperature();
    showUsage();
  });

  $( "#decrease" ).on('click', function() {
    thermostat.down();
    updateTemperature();
    showUsage();
  });

  $( "#reset" ).on('click', function() {
    thermostat.resetTemp();
    updateTemperature();
    showUsage();
  });

  $( "#psmon" ).on('click', function() {
    thermostat.powerSavingModeOn();
    updateTemperature()
    showUsage();
    $(this).css('color', 'green');
    $('#psmoff').css('color', 'red');
  });

  $( "#psmoff" ).on('click', function() {
    thermostat.powerSavingModeOff();
    $(this).css('color', 'green');
    $('#psmon').css('color', 'red');
  });

});
