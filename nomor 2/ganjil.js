var a, b, c,
    input = document.getElementById("input"),
    btn = document.getElementById("btn"),
    result = document.getElementById("result");

btn.addEventListener("click", function () {
    a = Number(input.value);
    b = 0;
    c = [];
    while (b < a) {
        c = ((b * 2) - 1);
        b++;
    }

    result.innerHTML = c;
});