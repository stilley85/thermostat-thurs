describe('Thermostat', function(){

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starts at 20 degrees', function(){
    it('thermostat will have a temperature of 20 degrees', function(){
      expect(thermostat.getCurrentTemperature()).toEqual(DEFAULT_TEMP);
    });

    it('increases the temperature', function(){
      thermostat.up()
      expect(thermostat.getCurrentTemperature()).toEqual(DEFAULT_TEMP + 1);
    });
    it('decreases the temperature', function(){
      thermostat.down()
      expect(thermostat.getCurrentTemperature()).toEqual(DEFAULT_TEMP - 1);
    });
  });

  describe('is minimum', function(){
    it('has a minimum temperature of 10 degrees', function(){
      thermostat.temperature = (MIN_TEMP)
      expect(function(){thermostat.down();}).toThrow(new Error("Minimum temperature of 10 degrees"));
    });

    it('is minimum returns true if temperature is 10', function(){
      expect(thermostat.isMinimum(MIN_TEMP)).toEqual(true);

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
      thermostat.temperature = (MAX_PSM_ON)
      expect(function(){thermostat.up();}).toThrow(new Error("Already at max temperature, turn off power saving mode to go higher."))
    });

    it("has a maximum temperature of 32 if power saving mode is off", function(){
      thermostat.powerSavingModeOff();
      thermostat.temperature = (MAX_PSM_OFF)
      expect(function(){thermostat.up();}).toThrow(new Error("Already at max temperature"))
    });
  });

  describe('reset', function(){
    it('resets temperature to default', function(){
      thermostat.up();
      thermostat.resetTemp();
      expect(thermostat.getCurrentTemperature()).toEqual(DEFAULT_TEMP);
    });
  });
  describe('energy usage', function(){
    it('returns low if tempertaure is below 18 degrees', function(){
      thermostat.temperature = (LOW_USAGE_LIMIT - 1);
      expect(thermostat.currentEnergyUsage()).toEqual('low-usage')
    });
    it('returns medium if temperature is less than 25', function(){
      thermostat.temperature = (MEDIUM_USAGE_LIMIT - 1);
      expect(thermostat.currentEnergyUsage()).toEqual('medium-usage')
    });
    it('returns high if temperature is 25 or above', function(){
      thermostat.temperature = (MEDIUM_USAGE_LIMIT + 1);
      expect(thermostat.currentEnergyUsage()).toEqual('high-usage')
    });
  });
});
