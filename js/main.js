window.onload = pageReady;

function pageReady() {


  let out_Toronto = document.getElementById("Toronto");
  let out_Yourtown = document.getElementById("Yourtown");
  let out_temp = document.getElementById("temperature");
  let out_conditions = document.getElementById("conditions");
  let out_location = document.getElementById("location");
  let output = document.getElementById("output");
  let time = document.getElementById("time");
  let icon = document.getElementById("icon");


  const myApiKey = "0b3d6f0710e00dfb637fccc67668047f";


  // FOR TORONTO CITY
  out_Toronto.onclick = show;

  function show() {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=" + myApiKey + "&units=metric";

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = xhr.response;

          var iconCode = data.weather[0].icon;
          var iconUrl = " http://openweathermap.org/img/wn/" + iconCode + ".png";
          icon.innerHTML = ("<img src='" + iconUrl + "'>");
          output.style.display = "block";
          out_location.innerHTML = data.name;
          out_temp.innerHTML = data.main.temp + "&deg;C";

          out_conditions.innerHTML = data.weather[0].description;

          let fullTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
          let shortTime = fullTime.slice(0, -6);
          time.innerHTML = shortTime;


        } else {
          out_location.innerHTML = "API call was unsuccessful";

        }

      }

    }

    xhr.open('GET', url);

    xhr.responseType = "json";

    xhr.send(null);

  }

  // FOR OTTAWA CITY
  out_Yourtown.onclick = display;

  function display() {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=" + myApiKey + "&units=metric";

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = xhr.response;

          var iconCode = data.weather[0].icon;
          var iconUrl = " http://openweathermap.org/img/wn/" + iconCode + ".png";
          icon.innerHTML = "<img src='" + iconUrl + "'>";
          output.style.display = "block";
          out_location.innerHTML = data.name;
          out_temp.innerHTML = data.main.temp + "&deg;C";

          out_conditions.innerHTML = data.weather[0].description;

          let fullTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
          let shortTime = fullTime.slice(0, -6);
          time.innerHTML = shortTime;
          //time.innerHTML = new Date(data.sys.sunset*1000).toLocaleTimeString();


        } else {
          out_location.innerHTML = "API call was unsuccessful";

        }

      }

    }

    xhr.open('GET', url);

    xhr.responseType = "json";

    xhr.send(null);

  }


}; //ONLOAD FUNCTION END