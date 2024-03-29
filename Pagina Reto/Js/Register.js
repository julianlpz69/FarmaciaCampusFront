import { getCookieValue } from "./Config/Cookies.js";

var nombreCookie = "userName";
const nombreUser = document.getElementById("nombreUserRegister");

nombreUser.textContent = getCookieValue(nombreCookie);

// ----------------------------------- Registrar Usuarioo ------------------------------------------------------------------

const formuRegistrar = document.getElementById("formRegistrar");

formuRegistrar.addEventListener('submit',async (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    
   
    if (data.userPassword !== data.userPassword2){
        alert("La contraseña y la confirmacion NO coinciden")
    }
    else{

      if(data.check != "off"){
        alert("No haz Aceptado los Terminos y Condiciones")
      }
      else{
       
          
          const url = 'http://localhost:5223/Farmacia/user/register';
  
  
          var usuario = {
              "UserName": data.userName,
              "UserEmail": data.userMail,
              "userPassword": data.userPassword
          };
  
          var l = JSON.stringify(usuario)
  
          const opciones = {
              method: 'POST',
              headers: new Headers( {
                'Content-Type': 'application/json'
              }),
              body: l
            };
  
  
            fetch(url, opciones)
            .then(response => {
              if (!response.ok) {
                throw new Error(`La solicitud no fue exitosa. Código de estado: ${response.status}`);
              }
              return response.text(); // Suponiendo que la respuesta es JSON
            })
            .then(result => {
              // Acceder al string result en la respuesta JSON
              if (result === "Usuario ya tiene Registro"){
                  alert("Ya hay un usuario con ese User Name")
              }
  
              if (result === "Usuario Registrado Correctamente"){
                  alert("Tu registro se ha realizado correctamente")
                  window.location.replace("../Html/Pagina_Inicio_Admin.html");
              }
              console.log("Resultado:", result);
            })
            .catch(error => {
              console.error("Error:", error);
            });
      }
  
    }

    

});