function compute() {
  let principal = document.getElementById("principal");
  if (principal.value <= 0) {
    alert("Enter a positive number");
    return principal.focus();
  }
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var year = new Date().getFullYear() + parseInt(years);
  var interest_result = document.getElementById("interest_result");
  interest_result.style.visibility = "visible";
  var interest = (principal.value * years * rate) / 100;

  document.getElementById(
    "result"
  ).innerHTML = `If you deposit <b>${principal.value}</b> at an interest rate of <b>${rate} %.</b>
  You will receive an amount of <b>${interest}</b> in the year <b>${year}</b> <br>`;
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = `${rateval} %`;
}
