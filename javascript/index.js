function updateTime() {
  //Sofia 🇧🇬
  let sofiaEleemnt = document.querySelector("#sofia");
  if (sofiaEleemnt) {
    let sofiaDateElement = sofiaEleemnt.querySelector(".date");
    let sofiaTimeElement = sofiaEleemnt.querySelector(".time");
    let sofiaTime = moment().tz("Europe/Sofia");

    sofiaDateElement.innerHTML = sofiaTime.format("MMMM Do YYYY");
    sofiaTimeElement.innerHTML = sofiaTime.format(
      `hh:mm:ss [<small>]A[</small>]`
    );
  }
  //London 🇬🇧
  let londonEleemnt = document.querySelector("#london");
  if (londonEleemnt) {
    let londonDateElement = londonEleemnt.querySelector(".date");
    let londonTimeElement = londonEleemnt.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      `hh:mm:ss [<small>]A[</small>]`
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
