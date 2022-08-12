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

const validarFormulario = (e) =>{
    switch (e.target.name){
        case "usuario":
       console.log("funciona")
        break
        
        case "nombre":
       console.log("funciona")
        break
        
        case "pasword":
       console.log("funciona")
        break
        
        case "pasword2":
       console.log("funciona")
        break
        
        case "Correo":
       console.log("funciona")
        break
        
        case "Telefono":
       console.log("funciona")
        break

    }
} 
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario)
    input.addEventListener("blur", validarFormulario)
})


formulario.addEventListener("submit", () => {

})