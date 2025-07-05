/*24) Implementar la funcionalidad login.
Realizar todo lo necesario para poder:
a. Obtener los datos que el usuario ingresa en los inputs correspondientes mediante DOM.
b. Verificar si el DNI ingresado existe en el vector de clientes, si la contraseña es correcta y, en
caso contrario, alertar al usuario del problema. Tal como hicimos en el TP 1.
c. La alerta al usuario puede ser con un alert o implementar un modal como en el TP1.
d. Mientras el usuario se encuentra en la pantalla de login / registro, NO debe estar visible ni el
menú “hamburguesa” que está en el header de la página ni todas las
funcionalidades del home banking. Una vez que el usuario realiza un login o registro
correcto, se deben ocultar las opciones de login / registro y mostrar el menú “hamburguesa”
y las opciones del home banking.*/

class UserInterface {
    constructor() {

    }

    //esta parte es para el login

    /**
       * Obtiene el texto ingresado en el input "Contraseña", sección "Login".
       * @returns String que contiene la contraseña ingresada por el usuario.
       */
    getPassword() {
        return document.getElementById("password").value;
    }

    /**
     * Obtiene el texto ingresado en el input "DNI", sección "Login".
     * @returns String que contiene el DNI ingresado por el usuario.
     */
    getDNI() {
        return document.getElementById("DNI").value;
    }

    //esta parte es para el registro

    /**
     * Obtiene el texto ingresado en el input "Correo electrónico", sección "Registro".
     * @returns String que contiene el correo electrónico ingresado por el usuario.
     */
    getEmail() {
        return document.getElementById("email").value;
    }

    /**
     * Obtiene el texto ingresado en el input "Nombre", sección "Registro".
     * @returns String que contiene el nombre de usuario.
     */
    getClient() {
        return document.getElementById("registerName").value;
    }

    /**
     * Obtiene el texto ingresado en el input "Apellido", sección "Login".
     * @returns String que contiene la contraseña ingresada por el usuario.
     */
    getLastName() {
        return document.getElementById("registerLastName").value;
    }


    /**
       * Obtiene el texto ingresado en el input "DNI", sección "Regsitro".
       * @returns String que contiene el DNI ingresado por el usuario.
       */
    getDNIRegistro() {
        return document.getElementById("registerDni").value;
    }

    /**
       * Obtiene el texto ingresado en el input "Contraseña", sección "Registro".
       * @returns String que contiene la contraseña ingresada por el usuario.
       */
    getPasswordRegistro() {
        return document.getElementById("registerPassword").value;
    }

    /**
     * Vacía el contenido de los inputs del login / registro.
     */
    clearLoginInputs() {
        document.getElementById("loginDni").value = "";
        document.getElementById("loginPassword").value = "";
    }

   /**
     * Si se está mostrando la pantalla de login la oculta y muestra la de notas. Y viceversa.
     */
   changeScreen() {
    const CA = document.getElementById("accounts");
    const DC = document.getElementById("debitCards");
    const T = document.getElementById("transfers");
    const D = document.getElementById("dollar");
    const CC = document.getElementById("creditCards");
    const P = document.getElementById("payments");
    const I = document.getElementById("investments");
    const BMH = document.getElementsByClassName("navbar-toggler")
    const MH = document.getElementsByClassName("offcanvas offcanvas-end text-bg-dark")
    const registerForm = document.getElementById("registerFormContainer");
    const loginForm = document.getElementById("loginFormContainer");
    if (CA.style.display !== "none" && DC.style.display !== "none" && T.style.display !== "none" && D.style.display !== "none" && CC.style.display !== "none" && P.style.display !== "none" && I.style.display !== "none" && BMH.style.display !== "none" && MH.style.display !== "none") {
        CA.style.display = "none";
        DC.style.display = "none";
        T.style.display = "none";
        D.style.display = "none";
        CC.style.display = "none";
        P.style.display = "none";
        I.style.display = "none";
        BMH.style.display = "none";
        MH.style.display = "none";
        loginForm.style.display = "";
        registerForm.style.display = "";
    }
    else {
        CA.style.display = "";
        DC.style.display = "";
        T.style.display = "";
        D.style.display = "";
        CC.style.display = "";
        P.style.display = "";
        I.style.display = "";
        BMH.style.display = "";
        MH.style.display = "";
        loginForm.style.display = "none";
        registerForm.style.display = "none";
    }
}


    /**
     * Muestra el modal y le inserta los textos que se reciben como parámetros.
     * @param {String} title Título que se quiere mostrar en el modal.
     * @param {String} body Texto del cuerpo del modal.
     */
    showModal(title, body) {
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalBody").textContent = body;

        const modal = new bootstrap.Modal('#modal', {
            keyboard: true,
            focus: true
        });

        modal.show();
    }
}
