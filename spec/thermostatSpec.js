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
    it('decreases the temperature', function(){
      thermostat.down()
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
  });

  describe('is minimum', function(){
    it('has a minimum temperature of 10 degrees', function(){
      for (var i = 1; i < 11; i++ ){
        thermostat.down();
      }
      expect(function(){thermostat.down();}).toThrow(new Error("Minimum temperature of 10 degrees"));
    });

    it('is minimum returns true if temperature is 10', function(){
      expect(thermostat.isMinimum(10)).toEqual(true);

    });

  });

});
