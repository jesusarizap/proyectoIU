function ocultarEquipo(){
    document.getElementById('participacion-popup').style.display='block';
    document.getElementById("equipo-popup").style.display='none';
}

function mostrarEquipo(){
    var proximo = document.getElementById('equipo-popup').style.display='block';
    var element = document.getElementById("participacion-popup").style.display='none';
}