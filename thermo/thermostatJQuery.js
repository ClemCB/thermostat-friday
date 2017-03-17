
$( document ).ready(function() {
  thermo = new Thermostat();
  backgroundChange();


  function backgroundChange() {
    var usage = thermo.currentEnergyUsage()
    if(usage === 'low-usage') {
      $('body').css("background-color", "rgba(250, 235, 166, 1.0)")
    } else if (usage === 'high-usage') {
      $('body').css("background-color", "rgba(240, 165, 202, 1.0)")
    } else {
      $('body').css("background-color", "rgba(114, 208, 166, 1.0)")
    }
  }

  $ ("#current-temp").text(thermo.getCurrentTemperature());

  $ ("#change-temp-up").click(function() {
    thermo.increaseTemperature();
    $ ("#current-temp").text(thermo.getCurrentTemperature());
    $ ("#current-energy-usage").text(thermo.currentEnergyUsage());
    backgroundChange();
  });

  $ ("#change-temp-down").click(function() {
    thermo.decreaseTemperature();
    $ ("#current-temp").text(thermo.getCurrentTemperature());
    $ ("#current-energy-usage").text(thermo.currentEnergyUsage());
    backgroundChange();
  });

  $ ("#change-temp-reset").click(function() {
    thermo.resetTemperature();
    $ ("#current-temp").text(thermo.getCurrentTemperature());
    $ ("#current-energy-usage").text(thermo.currentEnergyUsage());
    backgroundChange();
  });

  $ ("#current-psm").text(function() {
      return thermo.isPowerSavingModeOn() == true ? "ON" : "OFF"
    });

  $ ("#change-psm-on").click(function(){
    thermo.powerSavingModeOn();
    $ ("#current-psm").text("ON");
  });

  $ ("#change-psm-off").click(function(){
    thermo.powerSavingModeOff();
    $ ("#current-psm").text("OFF");
  });
  
});
