function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    if (usuario === "" || contraseña === "") {
      alert("Por favor, ingrese su usuario y contraseña.");
      return;
    }
    if (usuario === "brian" && contraseña === "123456") {
        alert("Inicio de sesión exitoso");
        window.location.href = "../index.html";
      } else {
        alert("Usuario y/o contraseña incorrecta. Por favor, inténtelo de nuevo.");
      }
  }
