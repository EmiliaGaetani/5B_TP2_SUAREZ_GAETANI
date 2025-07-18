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

    /*26) Implementar la funcionalidad logout en el botón “Cerrar sesión” que existe dentro del menú
    “hamburguesa”. Una vez que se presione este botón, se debe volver a la pantalla de login para que
    el usuario pueda loguearse con otro usuario o registrar un nuevo cliente, sin la necesidad de
    actualizar la página.*/

    clearRegisterInputs() {
        document.getElementById("registerName").value = "";
        document.getElementById("registerLastName").value = "";
        document.getElementById("registerDni").value = "";
        document.getElementById("registerPassword").value = "";
    }

    /*27) En todo el home banking existen múltiples elementos donde el usuario va a visualizar lo que tiene en
    el banco. A continuación, se detallan los lugares dónde se debe completar, mediante DOM, los datos
    que el usuario logueado tiene ni bien el mismo se loguea.
    NOTA: Los textos visibles de los selects deben indicar datos que le sirvan al usuario para tomar una
    decisión. Pero, a nivel código y en los selects, lo que importa es el “value” asignado a cada etiqueta
    “option”. Este value corresponde que sea el ID de lo que se está mostrando en el listado.
    a. Sección “Mis Cuentas”: Basándose en el ejemplo suministrado por los docentes, generar
    una card con cada caja de ahorro que posea el cliente, y completar los datos de la card
    dinámicamente con los datos del cliente.
    b. Sección “Tarjetas de Débito”: En el select titulado “Seleccionar caja de ahorro” se deben
    poder ver todas las cajas de ahorro que posea el cliente.
    c. Sección “Transferencias”: En el select titulado “Cuenta de origen” el cliente debe poder ver
    todas sus cajas de ahorro. Y, en el select titulado “O seleccione un destinatario” se deben
    listar las cajas de ahorro de los otros clientes del banco (esto si es que se busca evitar usar el
    alias o CBU para las transferencias).
    d. Sección “Compra / Venta de Dólares”: En el select titulado “Cuenta en pesos” el usuario
    debe poder ver todas sus cajas de ahorro en pesos. En el select titulado “Cuenta en dólares”
    lo mismo, pero para las cajas de ahorro en dólares.
    e. Sección “Tarjetas de Crédito”: En el select titulado “Seleccionar tarjeta” el usuario debe
    poder ver todas sus tarjetas de crédito.
    f. Seccción “Cargar gasto”: En el select titulado “Seleccionar medio de pago” el usuario debe
    poder ver todas sus tarjetas, tanto de crédito como de débito.
    g. Sección “Inversiones”: En el select titulado “Seleccionar caja de ahorro de origen” el cliente
    debe ver todas sus cajas de ahorro disponibles.*/

    crearTarjetaPesos(currency, saldo, limit, overdraft, alias, CBU, id) {
        document.getElementsByClassName("row")[1].innerHTML += `

        <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">Caja de Ahorro en Pesos</h5>
                            <p class="card-text mb-1"><strong>Moneda:</strong>${currency}</p>
                            <p class="card-text mb-1"><strong>Saldo:</strong>${saldo}</p>
                            <p class="card-text mb-1"><strong>Descubierto disponible:</strong>${limit}</p>
                            <p class="card-text mb-1"><strong>Descubierto usado:</strong>${overdraft} </p>
                            <p class="card-text mb-1"><strong>Alias:</strong>${alias}</p>
                            <p class="card-text mb-3"><strong>CBU:</strong>${CBU}</p>
                            <div class="d-grid">
                                <button onclick="verMovimientosTC(${id})" class="btn btn-outline-primary btn-sm">Ver movimientos</button>
                            </div>
                        </div>
                    </div>
                </div>

        `;
    }

    crearTarjetaDolares(currency, saldo, alias, CBU, id) {
        document.getElementsByClassName("row")[1].innerHTML += `

        <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">Caja de Ahorro en Dolares</h5>
                            <p class="card-text mb-1"><strong>Moneda:</strong> ${currency}</p>
                            <p class="card-text mb-1"><strong>Saldo:</strong> ${saldo}</p>
                            <p class="card-text mb-1"><strong>Alias:</strong> ${alias}</p>
                            <p class="card-text mb-3"><strong>CBU:</strong> ${CBU}</p>
                            <div class="d-grid">
                                <button onclick="verMovimientosTC(${id})" class="btn btn-outline-primary btn-sm">Ver movimientos</button>
                            </div>
                        </div>
                    </div>
                </div>

        `;
    }

    borrarCajas() {
        document.getElementsByClassName("row")[1].innerHTML = "";
    }

    /*b. Sección “Tarjetas de Débito”: En el select titulado “Seleccionar caja de ahorro” se deben
    poder ver todas las cajas de ahorro que posea el cliente. */

    //agregar al select
    tarjetaSelect(id, numero) {
        document.getElementById("debitCardAccountSelect").innerHTML += `
                <option value="${id}" id="optionTarjeta${id}">ID ${id} - ${numero}</option>
            `;
    }

    //obtener id del select de la tarjeta
    getTarjetaSelect() {
        return parseInt(document.getElementById("debitCardAccountSelect").value);
    }

    /*c.Sección “Transferencias”: En el select titulado “Cuenta de origen” el cliente debe poder ver
    todas sus cajas de ahorro. Y, en el select titulado “O seleccione un destinatario” se deben
    listar las cajas de ahorro de los otros clientes del banco (esto si es que se busca evitar usar el
    alias o CBU para las transferencias). */

    cajaSelect(id, currency) {
        document.getElementById("transferOrigin").innerHTML += `
                <option value="${id}" id="optionTarjeta${id}">ID ${id} - ${currency}</option>
            `;
    }

    cajaSelect2(id, currency) {
        document.getElementById("transferDestinysSelect").innerHTML += `
                <option value="${id}" id="optionTarjeta${id}">ID ${id} - ${currency}</option>
            `;
    }

    /*d. Sección “Compra / Venta de Dólares”: En el select titulado “Cuenta en pesos” el usuario
    debe poder ver todas sus cajas de ahorro en pesos. En el select titulado “Cuenta en dólares”
    lo mismo, pero para las cajas de ahorro en dólares. */
    cuentaPesos(id, currency) {
        document.getElementById("pesosAccount").innerHTML += `
        <option value="${id}" id="optionCajaPesos${id}">ID ${id} - ${currency}</option>
    `;
    }

    cuentaDolares(id, currency) {
        document.getElementById("dollarsAccount").innerHTML += `
        <option value="${id}" id="optionCajaPesos${id}">ID ${id} - ${currency}</option>
    `;
    }

    /*e.Sección “Tarjetas de Crédito”: En el select titulado “Seleccionar tarjeta” el usuario debe
    poder ver todas sus tarjetas de crédito. */
    investmentAccountSelect
    selectCredito(id, proveedorTarjeta) {
        document.getElementById("creditCardSelect").innerHTML += `
        <option value="${id}" id="optionTarjetaCredito${id}">ID ${id} - ${proveedorTarjeta}</option>
    `;
    }

    /*f. Seccción “Cargar gasto”: En el select titulado “Seleccionar medio de pago” el usuario debe
    poder ver todas sus tarjetas, tanto de crédito como de débito. */
    selectCargarGasto(id, numero) {
        document.getElementById("paymentMethodSelect").innerHTML += `
        <option value="${id}" id="optionTarjetaCredito${id}">ID ${id} - ${numero}</option>
    `;
    }

    selectCargarGasto2(id, numero) {
        document.getElementById("paymentMethodSelect").innerHTML += `
        <option value="${id}" id="optionTarjetaCredito${id}">ID ${id} - ${numero}</option>
    `;
    }

    /*g. Sección “Inversiones”: En el select titulado “Seleccionar caja de ahorro de origen” el cliente
    debe ver todas sus cajas de ahorro disponibles. */
    selectInversiones(id, currency) {
        document.getElementById("investmentAccountSelect").innerHTML += `
        <option value="${id}" id="optionsavingInversiones${id}">ID ${id} - ${currency}</option>

    `;
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

function actualizarTarjetaDebito() {
    let idTarjeta = ui.getTarjetaSelect();
    let tarjeta = encontrarTarjetaD(idTarjeta);
    //(slice sirve para agarrar una parte)
    if (tarjeta) {
        let titulo = document.getElementById("debitCardTitle");
        let ultimos4 = String(tarjeta.numero).slice(-4);
        let tipo = tarjeta.tipo ? tarjeta.tipo : "Tarjeta";
        titulo.textContent = tipo + " •••• " + ultimos4;

        document.getElementById("debitCardHolder").textContent = tarjeta.nombreTarjeta;
        document.getElementById("debitCardExpiry").textContent = tarjeta.fechaVencimiento.toLocaleDateString();

        let numeroInput = document.getElementById("debitCardNumber");
        let cvvInput = document.getElementById("debitCardCvv");
        numeroInput.value = tarjeta.numero;
        cvvInput.value = tarjeta.codigoSeguridad;
        numeroInput.type = "password";
        cvvInput.type = "password";

        // Iconos por defecto (ojo abierto)
        document.getElementById("debitCardNumberIcon").className = "bi bi-eye";
        document.getElementById("debitCvvIcon").className = "bi bi-eye";
    }
}

// Mostrar/ocultar número de tarjeta
document.getElementById("toggleDebitCardNumber").addEventListener("click", function () {
    let input = document.getElementById("debitCardNumber");
    let icon = document.getElementById("debitCardNumberIcon");

    if (input.type === "password") {
        input.type = "text";
        icon.className = "bi bi-eye-slash";
    } else {
        input.type = "password";
        icon.className = "bi bi-eye";
    }
});

// Mostrar/ocultar código de seguridad
document.getElementById("toggleDebitCvv").addEventListener("click", function () {
    let input = document.getElementById("debitCardCvv");
    let icon = document.getElementById("debitCvvIcon");

    if (input.type === "password") {
        input.type = "text";
        icon.className = "bi bi-eye-slash";
    } else {
        input.type = "password";
        icon.className = "bi bi-eye";
    }
});

// Botón "Ver movimientos"
document.getElementById("verMovimientosDebitoBtn").addEventListener("click", function () {
    let idTarjeta = ui.getTarjetaSelect();
    let movimientos = encontrarMovimientoTD(idTarjeta);


    let lista = [];
    // instanceof Object comprueba si es un objeto
    for (let i = 0; i < movimientos.length; i++) {
        if (movimientos[i] instanceof Object && "length" in movimientos[i]) {
            for (let j = 0; j < movimientos[i].length; j++) {
                lista.push(movimientos[i][j]);
            }
        } else {
            lista.push(movimientos[i]);
        }
    }


    if (lista.length > 0) {
        mostrarMovimientos(lista);
    } else {
        ui.showModal("No hay movimientos para esta tarjeta.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("debitCardAccountSelect").addEventListener("change", actualizarTarjetaDebito);
    actualizarTarjetaDebito();
});