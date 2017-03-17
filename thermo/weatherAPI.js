( function() {
  var httpRequest;
  makeRequest('http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=6539dcf40823b50178b058dab2bd75e3');

function makeRequest(url) {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert("Giving up:( Cannot create an XMLHTTP instance");
    return false;
  }
  httpRequest.onreadystatechange = showContents;
  httpRequest.open('GET', url);
  httpRequest.send();
}

  function showContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        // alert(httpRequest.responseText);
        var data = JSON.parse(httpRequest.responseText);
        var weather = {};
        weather.temp = parseInt(data.list[0].main.temp - 273.15);
        weather.windSpeed = data.list[0].wind.speed;
        weather.cloudCoverage = data.list[0].clouds.all;
        weather.city = data.city.name;
        console.log(weather);
        $ ("#api-city").text(weather.city);
        $ ("#api-temp").text(weather.temp);
        $ ("#api-wind").text(weather.windSpeed);
        $ ("#api-cloud").text(weather.cloudCoverage);

        } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
