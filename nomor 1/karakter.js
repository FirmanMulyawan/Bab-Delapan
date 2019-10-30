var a, hasil,
  input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = input.value;
  hasil = "";
  var nx = 0;
  for (i = 0; i < a; i++) {
    hasil = prompt("Ketikkan Huruf:");
    document.write("Karakter " + nx + " : " + hasil + "<br><br>");
    nx++;
    a++;
  }
});