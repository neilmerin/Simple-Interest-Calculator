function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var year = new Date().getFullYear() + parseInt(years);
  var interest = (principal * years * rate) / 100;

  document.getElementById(
    "result"
  ).innerHTML = `If you deposit <b>${principal}</b> at an interest rate of <b>${rate} %.</b>
  You will receive an amount of <b>${interest}</b> in the year <b>${year}</b> <br>`;
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = `${rateval} %`;
}
