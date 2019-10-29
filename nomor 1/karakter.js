var a, b, c,
  input = document.getElementById("input"),
  btn = document.getElementById("btn"),
  result = document.getElementById("result");

btn.addEventListener("click", function () {
  a = input.value;
  b = 1;
  while (b <= a) {
    c = document.write(" s ");
    b++;
  }

  result.innerHTML = c;
});