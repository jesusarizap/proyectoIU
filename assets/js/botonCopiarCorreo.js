function copiarCorreo() {
    
    navigator.clipboard.writeText("contact@tournamaster.com");
}

const copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', copiarCorreo);