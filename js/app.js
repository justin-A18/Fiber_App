//mostrar contraseña

document.getElementById("mostrar").addEventListener("click",mostrar);

let password = document.getElementById("password");

function mostrar() { 
    
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }

}

//nombre usuario

let nombre = document.getElementById("name").addEventListener("input",validadorNombre);

let validar = document.getElementById("validar-caracteres");

function validadorNombre(){
    const regex = /[^a-zA-Z0-9]/g;

    if(regex.test(this.value)){
        validar.innerHTML = "No se permiten caracteres especiales.";
    }else{
        validar.innerHTML = "";
    }
};

//email


let email = document.getElementById("correo").addEventListener("input",validadorEmail);

let emailCorrect = document.getElementById("email-valido");

function validadorEmail() { 
        const regex = /@/;

        if(regex.test(this.value)){
            emailCorrect.innerHTML = "";
        }else{
            emailCorrect.innerHTML = "Correo invalido";
        }
}

// password

password.addEventListener("input",validarPassword);

let Contraseha = document.getElementById("validar-contraseha");

function validarPassword() { 

    const regex = /[^a-zA-Z0-9]/g;
    if(regex.test(this.value)){
        Contraseha.innerHTML = "No se permiten caracteres especiales.";
    }
    else if(password.value.length >= 9){
        Contraseha.innerHTML = "contraseña solo de 1 a 8 caracteres ";
    }
    else{
        Contraseha.innerHTML = "";
    }
}
