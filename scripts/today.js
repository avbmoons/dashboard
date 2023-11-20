function zeroFirstFormat(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
function dateTime() {
  var currentDateTime = new Date();
  var day = zeroFirstFormat(currentDateTime.getDate());
  var month = zeroFirstFormat(currentDateTime.getMonth() + 1);
  var year = currentDateTime.getFullYear();
  var hours = zeroFirstFormat(currentDateTime.getHours());
  var minutes = zeroFirstFormat(currentDateTime.getMinutes());
  var seconds = zeroFirstFormat(currentDateTime.getSeconds());

  return (
    day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds
  );
}

//console.log(dateTime());

setInterval(function () {
  document.getElementById("currentDateTime").innerHTML = dateTime();
}, 1000);
