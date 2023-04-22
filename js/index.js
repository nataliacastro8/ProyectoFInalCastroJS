//INICIO DE LOGIN USUARIO:Lucas CONTRASENA:45678

function login (usuario, contrasena){
    usuario = document.getElementById("usuario").value;
    contrasena = document.getElementById ("contrasena").value;

    if (usuario == "Lucas" && contrasena == "45678"){
        window.location = "ecommers.html";
    } else{
        incorrecto();
        function incorrecto (){
            Swal.fire(
                'Usuario y/o contrasena INCORRECTO/S',
                'Intentelo nuevamente',
                'error'
              )
        }
        document.getElementById("botonLogin").addEventListener("onclick",login);
    }
}



