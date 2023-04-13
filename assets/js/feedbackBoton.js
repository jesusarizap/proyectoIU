var colorInit = document.getElementById("avanzar").style.color;
var backgroundColorInit = document.getElementById("avanzar").style.backgroundColor;

function seleccionarBoton(){
    document.getElementById("avanzar").style.color = "white";
    document.getElementById("avanzar").style.backgroundColor = "green";
}
function deseleccionarBoton(){
    document.getElementById("avanzar").style.color = colorInit;
    document.getElementById("avanzar").style.backgroundColor = backgroundColorInit;
}