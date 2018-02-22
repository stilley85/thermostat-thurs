$( document ).ready(function() {

  var thermostat = new Thermostat();

  $( "#temperature" ).text(thermostat.getCurrentTemperature());

  $( "#increase" ).on('click', function() {
    thermostat.up();
    $( '#temperature').text(thermostat.getCurrentTemperature());
  });

  $( "#decrease" ).on('click', function() {
    thermostat.down();
    $( '#temperature').text(thermostat.getCurrentTemperature());
  });

});
