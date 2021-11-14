setInterval(() => {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();

  const weekday = new Array(7);
  weekday[0] = "Pazar";
  weekday[1] = "Pazartesi";
  weekday[2] = "Salı";
  weekday[3] = "Çarşamba";
  weekday[4] = "Perşembe";
  weekday[5] = "Cuma";
  weekday[6] = "Cumartesi";

  var day = weekday[d.getDay()];

  justInTime.innerHTML =
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2) +
    " " +
    day;
}, 1000);

let nameFromUser = prompt("What is your name?");

let nameDOM = document.querySelector("#name");
nameDOM.innerHTML = nameFromUser !== "" ? nameFromUser : "anonymous";

let timeDOM = document.getElementById("time");
let justInTime = document.createElement("span");
timeDOM.appendChild(justInTime);
