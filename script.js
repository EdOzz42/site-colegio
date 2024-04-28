var countDownDate = new Date("Jan 5, 2077 15:37:25").getTime();

var iniCountdown = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#seg").innerHTML = `${seconds}`;
  document.querySelector("#min").innerHTML = `${minutes}`;
  document.querySelector("#hrs").innerHTML = `${hours}`;
  document.querySelector("#day").innerHTML = `${days}`;

  if (distance < 0) {
    clearInterval(iniCountdown);
    document.querySelector(".unit").innerHTML = "<p>Zerado</p>";
  }

  console.log(distance);
}, 1000);
