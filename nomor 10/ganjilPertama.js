var a, i, j,
  input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = input.value;
  var prima = false;
  for (i = 2; i <= a; i++) {
    if (i >= 2) {
      prima = true;
      for (j = 2; j < i; j++) {
        if (i % j == 0) {
          prima = false;
        }
      }
    }
    if (prima == true) {
      result.innerHTML = i;
    }
  }

});