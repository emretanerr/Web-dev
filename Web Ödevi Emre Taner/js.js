document.addEventListener("DOMContentLoaded", function() {
    var now = new Date();
    var hour = now.getHours();

    if (hour >= 6 && hour < 11) {
        document.getElementById("yazi").innerText = "Günaydın!";

    } 
    else if(hour >= 11 && hour < 19){
        document.getElementById("yazi").innerText = "Tünaydın!";

    }
    else if(hour >= 19 && hour < 23){                                           
        document.getElementById("yazi").innerText = "iyi akşamlar!";
    }
    else if(hour >= 23 && hour < 6){
        document.getElementById("yazi").innerText = "iyi geceler!";

    }
    else {
        document.getElementById("yazi").innerText = "Merhaba!";   //Emre Taner 

    }
});


function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById("zaman").innerHTML = date;
}

setInterval(tarihSaat, 1000); 