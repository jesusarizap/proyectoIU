function copiarCorreo() {
    var copyText = document.getElementById("correo");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}