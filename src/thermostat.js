'use strict'

var Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.upTemperature = function(){
  this.temperature +=1;
}
