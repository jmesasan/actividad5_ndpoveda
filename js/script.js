function validacion() {

    valorName = document.getElementById("icon_prefix").value;
    if (valorName == null || valorName.length == 0) {
        name = false;
        alert("El campo Nombre no esta registrado con un valor correcto");
    } else {
        name = true;
    }

    valor = document.getElementById("icon_email").value;
    if (valor.indexOf("@") < 0 || valor.indexOf(".com") < 0) {
        email = false;
        alert("El campo Email no esta registrado con un valor correcto");
    } else {
        email = true;
    }

    if (email && name) {
        alert("Usted ingreso sus datos correctamente. Proximamente recibira nuestro Newsletter ");
    }

}