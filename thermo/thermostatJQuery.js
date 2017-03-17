
$( document ).ready(function() {
  thermo = new Thermostat();
  backgroundChange();

  $ ("#change-psm-on").css("background-color", "green");


  function backgroundChange() {
    var usage = thermo.currentEnergyUsage()
    if(usage === 'low-usage') {
      $('body').css("background-color", "rgba(250, 235, 166, 1.0)")
    } else if (usage === 'high-usage') {
      $('body').css("background-color", "rgba(255, 180, 180, 1.0)")
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
    thermo.powerSavingModeOn();
    $ ("#change-psm-on").css("background-color", "green");
    $ ("#change-psm-off").css("background-color", "white");
    $ ("#current-temp").text(thermo.getCurrentTemperature());
    $ ("#current-energy-usage").text(thermo.currentEnergyUsage());
    backgroundChange();
  });

  $ ("#current-psm").text(function() {
      return thermo.isPowerSavingModeOn() == true ? "ON" : "OFF"
    });

  $ ("#change-psm-on").click(function(){
    thermo.powerSavingModeOn();
    if (thermo.temperature > 25) {
      thermo.temperature = 25;
      $ ("#current-temp").text(thermo.getCurrentTemperature());
    };
    $ ("#current-psm").text("ON");
    $ ("#change-psm-on").css("background-color", "green");
    $ ("#change-psm-off").css("background-color", "white");
  });

  $ ("#change-psm-off").click(function(){
    thermo.powerSavingModeOff();
    $ ("#current-psm").text("OFF");
    $ ("#change-psm-off").css("background-color", "green");
    $ ("#change-psm-on").css("background-color", "white");
  });

});
