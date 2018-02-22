describe('Thermostat', function(){

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starts at 20 degrees', function(){
    it('thermostat will have a temperature of 20 degrees', function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases the temperature', function(){
      thermostat.upTemperature()
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

  });
});
