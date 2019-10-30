var a,
  input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  var nx = 0;
  a = input.value;
  var penampung = "";
  var akhir = ".";
  do {
    penampung = penampung + a;
    nx++;
    document.write("Karakter " + nx + " : " + penampung + "<br><br>");
  }
  while (a !== akhir) {
    a = confirm("lagi");
  }

});