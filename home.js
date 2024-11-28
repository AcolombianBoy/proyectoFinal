document.getElementById("perfil").addEventListener('click', function() {
    var menu = document.getElementById("menu");
    // Alternar la visibilidad del menú
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});