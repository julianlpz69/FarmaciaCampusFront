

var nombreCookie = "userName";

// Función para obtener el valor de una cookie por su nombre
import { getCookieValue , PaginaRol, RefrescarToken} from "./Config/Cookies.js";

const nombreUser = document.getElementById("nombreUser");

nombreUser.textContent = getCookieValue(nombreCookie);

const btnRegresar = document.getElementById("RegresarCliente");



btnRegresar.addEventListener("click", e =>{

    PaginaRol()
})

RefrescarToken()