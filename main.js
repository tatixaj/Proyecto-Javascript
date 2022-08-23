let user = "Nairobi"
let pass = "12345"

for (i=0; i<3; i++) {
    
    let userIngresado = prompt("Ingrese su nombre de usuario:");
    let passIngresado = prompt("Ingrese su contraseña");

    if (userIngresado == user && pass == passIngresado) {
        console.log("Ingreso exitoso")
        alert("Ingreso exitoso");
        validacion = true;
        break;
    }
    else {
        validacion = false
        console.log(validacion)
        if (userIngresado !== user && passIngresado == pass) {
            console.log("Usuario invalido");
            alert("Usuario inválido");
            validacion = false;
        }
        else {
            if (userIngresado == user && passIngresado !== pass) {
                console.log("contraseña inválida");
                alert("contraseña inválido")
                validacion = false;
            }
            else {
                console.log("Usuario y contraseña inválidas")
                alert("Usuario y contraseña inválidas")
                validacion = false;
            }
        }
    } 
}
if (validacion == false) {
    console.log("Superó el límite de intentos")
    alert("Superó el limite de intentos")
}