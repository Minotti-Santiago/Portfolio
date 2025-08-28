const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navHeader = document.getElementById('navHeader');

openMenu.addEventListener('click', () => {
    navHeader.style.width = '100%';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
    navHeader.style.width = '0%';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
});