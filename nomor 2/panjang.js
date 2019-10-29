var a, b, c, hasil, nx,
    input = document.getElementById("input"),
    btn = document.getElementById("btn"),
    result = document.getElementById("result");

btn.addEventListener("click", function () {
    a = Number(input.value);
    hasil = "";
    nx = 0;
    for (i = 0; nx < a; i++) {
        if (i % 2 !== 0) {
            hasil = hasil + i + "</br>";
            nx = nx + 1;
        }
    }

    result.innerHTML = hasil + " Jumlahnya Length adalah " + nx;
});