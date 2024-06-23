function updateTime() {
  //Sofia 🇧🇬
  let sofiaEleemnt = document.querySelector("#sofia");
  let sofiaDateElement = sofiaEleemnt.querySelector(".date");
  let sofiaTimeElement = sofiaEleemnt.querySelector(".time");
  let sofiaTime = moment().tz("Europe/Sofia");

  sofiaDateElement.innerHTML = sofiaTime.format("MMMM Do YYYY");
  sofiaTimeElement.innerHTML = sofiaTime.format(
    `hh:mm:ss [<small>]A[</small>]`
  );

  //London 🇬🇧
  let londonEleemnt = document.querySelector("#london");
  let londonDateElement = londonEleemnt.querySelector(".date");
  let londonTimeElement = londonEleemnt.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    `hh:mm:ss [<small>]A[</small>]`
  );
}
updateTime();
setInterval(updateTime, 1000);
