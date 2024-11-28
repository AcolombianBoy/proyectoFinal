document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        document.getElementById('message').textContent = "Las contraseñas no coinciden.";
        return;
    }

    // Aquí puedes agregar la lógica para guardar el nuevo usuario
    document.getElementById('message').textContent = "Cuenta creada exitosamente!";
    document.getElementById('message').style.color = "green";
});