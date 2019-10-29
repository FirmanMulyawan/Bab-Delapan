var a, b, c, hasil,
    input = document.getElementById("input"),
    btn = document.getElementById("btn"),
    result = document.getElementById("result");

btn.addEventListener("click", function () {
    a = Number(input.value);
    hasil = "";
    for (i = 0; i < a; i++) {
        if (i % 2 !== 0) {
            hasil = hasil + i + "</br>";
        }
    }

    result.innerHTML = hasil;
});