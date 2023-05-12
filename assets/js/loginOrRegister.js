function openPopUp(){
  document.getElementById('login-popup').style.display='block'; 
  var sound = new Audio('assets/sound/success.mp3'); 
  sound.play();
}


function switchToRegister() {
  document.getElementById("login-popup").style.display = "none";
  document.getElementById("register-popup").style.display = "block";
}

function switchToLogin() {
  document.getElementById("register-popup").style.display = "none";
  document.getElementById("login-popup").style.display = "block";
}

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', cerrarPopUp);

function cerrarPopUp() {
  document.getElementById('login-popup').style.display = 'none';
}

function cerrarPopupRegister() {
  document.getElementById('register-popup').style.display = 'none';
}