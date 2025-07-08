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
        return document.getElementById("loginPassword").value;
    }

    /**
     * Obtiene el texto ingresado en el input "DNI", sección "Login".
     * @returns String que contiene el DNI ingresado por el usuario.
     */
    getDNI() {
        return parseInt(document.getElementById("loginDni").value);
    }

    /*25) Idem ejercicio anterior, pero para la funcionalidad registro.
    a. Al registrar un nuevo cliente se deben solicitar todos los datos para generarle una cuenta
    bancaria (nombre, apellido, DNI, correo electrónico y contraseña).
    b. Previo a realizar un registro, se debe validar que todos los datos ingresados por el nuevo
    cliente tengan coherencia (no estén los campos vacíos, el DNI tenga al menos 7 números,
    etc.).
    c. Verificar que el DNI ingresado no exista dentro de la base de datos de clientes. En tal caso,
    informar al usuario del error./*

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
        return parseInt(document.getElementById("registerDni").value);
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
        if (document.getElementById("iniciar-sesion").style.display == "none") {
            document.getElementById("iniciar-sesion").style.display = "";
            document.getElementById("aplicacion").style.display = "none";
        } else {
            document.getElementById("iniciar-sesion").style.display = "none";
            document.getElementById("aplicacion").style.display = "";
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

const ui = new UserInterface()