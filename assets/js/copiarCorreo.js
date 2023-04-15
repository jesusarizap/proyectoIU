function copiarCorreo() {
    var copyText = "tournamastercontact@gmail.com";
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copiado al portapapeles");
}

function outFunc(){
    var tooltip = document.getElementById("copiarCorreo");
    tooltip.innerHTML = "Copiar al portapapeles";
}