function compute() {
  let principal = document.getElementById("principal");
  if (principal.value <= 0) {
    alert("Enter a positive number");

  interest_result.style.visibility = "hidden";
    document.getElementById(
    "result"
  ).innerHTML = null
    return principal.focus();
  }
  let rate = document.getElementById("rate");
  let years = document.getElementById("years");
  let year = new Date().getFullYear() + parseInt(years.value);
  let interest_result = document.getElementById("interest_result");
  interest_result.style.visibility = "visible";
  let interest = (principal.value * years.value * rate.value) / 100;

  document.getElementById(
    "result"
  ).innerHTML = `If you deposit <b class="highlight">${principal.value}</b> at an interest rate of <b class="highlight">${rate.value} %.</b>
  You will receive an amount of <b class="highlight">${interest}</b> in the year <b class="highlight">${year}</b> <br>`;
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = `${rateval} %`;
}
