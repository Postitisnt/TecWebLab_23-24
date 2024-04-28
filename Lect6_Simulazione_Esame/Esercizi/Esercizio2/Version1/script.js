function avvia(){
    var n = document.getElementById("input").value;
    console.log(n);
    var spanOutput = document.getElementById("output");
    var avviaButton = document.querySelector('button');
    avviaButton.disabled = true;

    var timer = setInterval(function(){
        spanOutput.innerHTML = n;
        
        if(n > 0){
            n--;
        }else{
            spanOutput.innerHTML = "Fatto!";
            clearInterval(timer);
            avviaButton.disabled = false;
        }
    }, 1000);
}


