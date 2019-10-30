var a,
  input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = input.value;
  var hasil = "";
  for (i = 0; i < a; i++) {
    for (j = 0; j < i; j++) {
      hasil = hasil + '*';
    }
    hasil = hasil + '<br>';
  }
  for (k = a; k > 0; k--) {
    for (l = 0; l < k; l++) {
      hasil = hasil + '*';
    }
    hasil = hasil + '<br>';
  }
  result.innerHTML = hasil;
});