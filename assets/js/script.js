const btnShowMenu = document.getElementById('btn-menu');
const listMenu = document.getElementById('list-menu');

btnShowMenu.onclick = function toggleListMenu() {
  listMenu.classList.toggle('show');
}