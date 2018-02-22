describe('Thermostat', function(){

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starts at 20 degrees', function(){
    it('thermostat will have a temperature of 20 degrees', function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases the temperature', function(){
      thermostat.up()
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

  describe('power saving mode', function(){
    it('initializes with power saving mode turned on', function(){
      expect(thermostat.powerSavingMode).toEqual(true);
    });

    it('isPowerSavingModeOn returns true if power saving mode is on', function(){
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });

    it("powerSavingModeOff turns off power saving mode", function(){
      thermostat.powerSavingModeOff()
      expect(thermostat.isPowerSavingModeOn()).toEqual(false);
    });

    it("powerSavingModeOn turns on power saving mode", function(){
      thermostat.powerSavingModeOff()
      thermostat.powerSavingModeOn()
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });

    it("has a maximum temperature of 25 if power saving mode is on", function(){
      for (var i = 1; i < 6; i++ ){
        thermostat.up();
      }
      expect(function(){thermostat.up();}).toThrow(new Error("Already at max temperature, turn off power saving mode to go higher."))
    });

    it("has a maximum temperature of 32 if power saving mode is off", function(){
      thermostat.powerSavingModeOff();
      for (var i = 1; i < 13; i++ ){
        thermostat.up();
      }
      expect(function(){thermostat.up();}).toThrow(new Error("Already at max temperature"))
    });

  });

});
