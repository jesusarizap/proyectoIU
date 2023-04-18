const popupExito = document.querySelector('.popupExito');

popupExito.classList.add('show');

setTimeout(() => {
  popupExito.classList.remove('show');
}, 2000);
