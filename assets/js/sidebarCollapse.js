const expandBtn = document.querySelector('.expand-btn');
const sidebar = document.querySelector('.sidebar');
const barraB = document.getElementById("barraBusqueda");

expandBtn.addEventListener('click', function() {
  sidebar.classList.toggle('expanded');
  const isExpanded = sidebar.classList.contains('expanded');
  expandBtn.setAttribute('aria-expanded', isExpanded);
});



barraB.addEventListener('click', function(){
  if(sidebar.classList.contains('expanded')){
  sidebar.classList.toggle('expanded');
  const isExpanded = sidebar.classList.contains('expanded');
  expandBtn.setAttribute('aria-expanded', isExpanded);
}
})