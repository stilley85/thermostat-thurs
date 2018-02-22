'use strict'

var Thermostat = function(){
  this.temperature = 20;
};

  const MIN_TEMP = 10;

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.upTemperature = function(){
  this.temperature +=1;
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
