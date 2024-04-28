document.addEventListener('DOMContentLoaded', function() {
    var avviaButton = document.getElementById('avviaButton');
    avviaButton.addEventListener('click', avvia);

    function avvia() {
        var n = document.getElementById("input").value;
        console.log(n);
        var spanOutput = document.getElementById("output");
        avviaButton.disabled = true;

        var timer = setInterval(function() {
            spanOutput.innerHTML = n;

            if (n > 0) {
                n--;
            } else {
                spanOutput.innerHTML = "Fatto!";
                clearInterval(timer);
                avviaButton.disabled = false;
            }
        }, 1000);
    }
});


