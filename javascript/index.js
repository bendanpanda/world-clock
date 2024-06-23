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
  let belgradeEleemnt = document.querySelector("#belgrade");
  if (belgradeEleemnt) {
    let belgradeDateElement = belgradeEleemnt.querySelector(".date");
    let belgradeTimeElement = belgradeEleemnt.querySelector(".time");
    let belgradeTime = moment().tz("Europe/Belgrade");

    belgradeDateElement.innerHTML = belgradeTime.format("MMMM Do YYYY");
    belgradeTimeElement.innerHTML = belgradeTime.format(
      `hh:mm:ss [<small>]A[</small>]`
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
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
