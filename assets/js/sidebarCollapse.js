const expandBtn = document.querySelector('.expand-btn');
const sidebar = document.querySelector('.sidebar');

expandBtn.addEventListener('click', function() {
  sidebar.classList.toggle('expanded');
  const isExpanded = sidebar.classList.contains('expanded');
  expandBtn.setAttribute('aria-expanded', isExpanded);
});
