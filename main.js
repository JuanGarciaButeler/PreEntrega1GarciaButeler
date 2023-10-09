let usuarios = "JuanGarcia"
let contraseñas = "12345"

function validarUsuario(nombre, contraseña){
    let ciclo = 1
        while(ciclo == 1){
            if (nombre == usuarios && contraseña == contraseñas){
                ciclo = 0
            }else{
                ciclo = 1
                alert("Usuario o Contraseña incorrectos, vuelva a intentarlo")
                 nombre = prompt("Usuario")
                 contraseña = prompt("Contraseña")
            }
        }
}
let n = prompt("Ingrese su usuario")
let c = prompt("Ingrese contraseña")

validarUsuario(n,c)

