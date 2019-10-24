var x, y, z,
    btn = document.getElementById("btn"),
    result = document.getElementById("result");

btn.addEventListener("click", function () {
    var hasil = "";
    for (x = 0; x <= 25; x++) {
        for (y = 0; y <= 25; y++) {
            for (z = 0; z <= 25; z++) {
                if (x + y + z === 25) {
                    hasil = hasil + (x + " + " + y + " + " + z + " = 25 <br><br>");
                }
            }
        }

    }
    result.innerHTML = hasil;
});