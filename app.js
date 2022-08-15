// const bdu = []

// class usuarios {
//     constructor (nombre, apellido, email, contraseña){
//         this.nombre = nombre
//         this.apellido = apellido
//         this. email = email 
//         this.contraseña = contraseña
//     }
// }

// const miusuario = new usuarios ("Ignacio", "Silva", "ignaciosilva@gmail.com", "Contraseña123")
// bdu.push(miusuario)
// console.log(bdu)


// function nuevoUsuario (){
//     const nuevoNombre = prompt("Ingrese su nombre")
//     const nuevoApellido = prompt("Ingrese su apellido")
//     const nuevoEmail = prompt("Ingrese su email")
//     const nuevaContraseña = prompt ("Cree una contraseña")
//     const repetirContraseña = prompt("Repita la contraseña creada")
//     // if(repetirContraseña === nuevaContraseña){
//     //     alert("Bienvenido " + nuevoNombre )
//     // }
//     // else{
//     //     alert("Contraseña incorrecta")
//     // }   

//     const nuevoUsuario = new usuarios(nuevoNombre, nuevoApellido, nuevoEmail, nuevaContraseña)
//     bdu.push(nuevoUsuario)
// }

// nuevoUsuario()


const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")
const campos={
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false,
}

const expresiones={
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    password:/^.{4,12}$/,
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/,
    telefono:/^\d{7,14}$/
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case "usuario":
          validarCampo(expresiones.usuario, e.target, "usuario");
        break
        
        case "nombre":
          validarCampo(expresiones.nombre, e.target, "nombre");
          
        break
        
        case "password":
          validarCampo(expresiones.password, e.target, "password");
          validarPassword2();
        break
        
        case "password2":
          validarPassword2();
        break
        
        case "correo":
          validarCampo(expresiones.correo, e.target, "correo");
        break
        
        case "telefono":
          validarCampo(expresiones.telefono, e.target, "telefono");
        break

    }  }

 const validarCampo = (expresion,input,campo) => {
  if (expresion.test(input.value)){
    document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-incorrecto");
    document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-correcto")
    document.querySelector(`#grupo_${campo} i`).classList.remove("fa-circle-xmark")
    document.querySelector(`#grupo_${campo} i`).classList.add("fa-circle-check")
    document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove("formulario_input-error-activo")
    campos[campo]= true;
   
  }
  else{
    document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-incorrecto")
    document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-correcto")
    document.querySelector(`#grupo_${campo} i`).classList.add("fa-circle-xmark")
    document.querySelector(`#grupo_${campo} i`).classList.remove("fa-circle-check")
    document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add("formulario_input-error-activo")
    campos[campo]= false;
  }
 }

 const validarPassword2 = () =>{
  const inputPassword1 = document.getElementById("password");
  const inputPassword2 = document.getElementById("password2");
 
  if(inputPassword1.value !== inputPassword2.value){
    document.getElementById(`grupo_password2`).classList.add("formulario_grupo-incorrecto")
    document.getElementById(`grupo_password2`).classList.remove("formulario_grupo-correcto")
    document.querySelector(`#grupo_password2 i`).classList.add("fa-circle-xmark")
    document.querySelector(`#grupo_password2 i`).classList.remove("fa-circle-check")
    document.querySelector(`#grupo_password2 .formulario_input-error`).classList.add("formulario_input-error-activo")
    campos["password"]= false;
  }
  else{
    document.getElementById(`grupo_password2`).classList.remove("formulario_grupo-incorrecto");
    document.getElementById(`grupo_password2`).classList.add("formulario_grupo-correcto")
    document.querySelector(`#grupo_password2 i`).classList.remove("fa-circle-xmark")
    document.querySelector(`#grupo_password2 i`).classList.add("fa-circle-check")
    document.querySelector(`#grupo_password2 .formulario_input-error`).classList.remove("formulario_input-error-activo")
    campos["password"]= true;
  }
 }
 

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario)
    input.addEventListener("blur", validarFormulario)
})

const terminos = document.getElementById("terminos");

formulario.addEventListener("submit", (e) => {
           e.preventDefault();
           if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){
            formulario.reset();
            document.getElementById("formulario_mensaje-exito").classList.add("formulario_mensaje-exito-activo")}
            else{
              document.getElementById("formulario_mensaje"). classList.add("formulario_mensaje-activo")
            }
})  
