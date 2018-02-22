'use strict'

var Thermostat = function(){
  this.temperature = DEFAULT_TEMP;
  this.powerSavingMode = true;
  this.energyUsage = this.currentEnergyUsage();
};

  const MIN_TEMP = 10;
  const MAX_PSM_ON = 25;
  const MAX_PSM_OFF = 32;
  const DEFAULT_TEMP = 20;

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if (this.isPowerSavingModeOn() === true){
    if (this.temperature === MAX_PSM_ON){
      throw new Error("Already at max temperature, turn off power saving mode to go higher.")
    } else {
      this.temperature +=1;
    }
  } else {
      if(this.temperature === MAX_PSM_OFF){
        throw new Error("Already at max temperature")
      } else {
        this.temperature +=1;
      }
  }
};

Thermostat.prototype.down = function(){
  if(this.isMinimum(this.temperature)){
    throw new Error("Minimum temperature of 10 degrees")
  } else {
    this.temperature -= 1;
  }
};

Thermostat.prototype.isMinimum = function(temperature){
  if(temperature === MIN_TEMP){
    return true;
  } else {
    return false;
  }
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode
};

Thermostat.prototype.powerSavingModeOff = function(){
  this.powerSavingMode = false;
};

Thermostat.prototype.powerSavingModeOn = function(){
  this.powerSavingMode = true;
};

Thermostat.prototype.resetTemp = function(){
  this.temperature = 20;
};

Thermostat.prototype.currentEnergyUsage = function(){
  if(this.temperature < 18){
    return 'low-usage';
  } else if(this.temperature < 25){
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
};
