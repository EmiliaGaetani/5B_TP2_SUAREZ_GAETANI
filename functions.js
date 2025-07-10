/*9.Implementar una función para encontrar un cliente en el vector “clients” a partir de su ID. La función
recibe como parámetro el ID y devuelve la posición del vector donde se encuentra el cliente.*/

//traer de la clase client.js el id cliente (recordatorio clase que viene)

function buscarClientID(idClient) {
    for (i = 0; i < clients.length; i++) {
        if (idClient == clients[i].id) {
            return i;
        }
    }
    return -1;
}

/*10.Implementar una función para encontrar todas las cajas de ahorro de un determinado cliente a
partir del ID del cliente. La función recibe como parámetro el ID del cliente y devuelve un nuevo
vector con las cajas de ahorro que están a nombre de ese cliente.
NOTA: Puede generar dos funciones o puede la función recibir un parámetro extra y de esa manera
saber si tiene que devolver solo cajas en pesos, solo cajas en dólares, o ambas.*/

function buscarCajasA(idClient, currency) {
    let cajas = []
    for (let i = 0; i < clients.length; i++) {
        if (idClient == clients[i].id) {
            if (currency != undefined) {
                for (let j = 0; clients[i].savingsBanks.length > j; j++) {
                    if (clients[i].savingsBanks[j].currency == currency) {
                        cajas.push(clients[i].savingsBanks[j]);
                    }
                }
            }
            else {
                return clients[i].savingsBanks
            }
        }
    }
    return cajas
}

/*11.Implementar una función para encontrar todas las tarjetas de débito de un determinado cliente a
partir del ID del cliente. La función recibe como parámetro el ID del cliente y devuelve un nuevo
vector con las tarjetas de débito que están a nombre de ese cliente.*/

function buscarTarjetasD(idClient) {
    let tarjetasD = []
    let i = buscarClientID(idClient);
    for (let j = 0; j < clients[i].savingsBanks.length; j++) {
        for (let k = 0; clients[i].savingsBanks[j].debitCards.length > k; k++) {
            tarjetasD.push(clients[i].savingsBanks[j].debitCards[k]);
        }
    }
    return tarjetasD
}

/*12) Implementar una función para encontrar una tarjeta de débito específica de un cliente a partir del ID
de la tarjeta. La función recibe como parámetro el ID y devuelve el objeto “debitCard”
correspondiente.
NOTA: No se conoce el ID del cliente. Hay que buscar cliente por cliente a ver a quién está asociada
esa tarjeta de débito.*/

function encontrarTarjetaD(idDebit) {
    for (let i = 0; i < clients.length; i++) {
        let idCliente = clients[i].id
        let posCliente = buscarClientID(idCliente)
        if (posCliente != -1) {
            let tarjetasDebito = buscarTarjetasD(idCliente)
            for (let j = 0; j < tarjetasDebito.length; j++) {
                if (tarjetasDebito[j].id == idDebit) {
                    return tarjetasDebito[j];
                }
            }
        }
    }
    return [];
}

/*13) Implementar una función para encontrar todas las tarjetas de crédito de un determinado cliente a
partir del ID del cliente. La función recibe como parámetro el ID del cliente y devuelve un nuevo
vector con las tarjetas de crédito que están a nombre de ese cliente.*/

function buscarTarjetasC(idClient) {
    let tarjetasC = []
    let i = buscarClientID(idClient);
    for (let k = 0; clients[i].creditCards.length > k; k++) {
        tarjetasC.push(clients[i].creditCards[k]);
    }
    return tarjetasC
}

/*14) Implementar una función para encontrar una tarjeta de crédito específica de un cliente a partir del
ID de la tarjeta. La función recibe como parámetro el ID y devuelve el objeto “creditCard”
correspondiente.
NOTA: No se conoce el ID del cliente. Hay que buscar cliente por cliente a ver a quién está asociada
esa tarjeta de crédito.*/

function encontrarTarjetaC(idCredit) {
    for (let i = 0; i < clients.length; i++) {
        let idCliente = clients[i].id
        let posCliente = buscarClientID(idCliente)
        if (posCliente != -1) {
            let tarjetasCredito = buscarTarjetasC(idCliente)
            for (let j = 0; j < tarjetasCredito.length; j++) {
                if (tarjetasCredito[j].id == idCredit) {
                    return tarjetasCredito[j];
                }
            }
        }
    }
    return [];
}

/*15) Implementar una función para encontrar los movimientos de una determinada caja de ahorro a
partir del ID de la caja de ahorro. La función recibe como parámetro el ID de la caja de ahorro y
devuelve un nuevo vector con los movimientos que se realizaron en esa caja.
NOTA: No se conoce el ID del cliente. Hay que buscar cliente por cliente a ver a quién le pertenece
esa caja de ahorro para obtener sus movimientos.*/

function encontrarMovimiento(savingsBanksId) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingsBanks.length; j++) {
            if (clients[i].savingsBanks[j].id == savingsBanksId) {
                return clients[i].savingsBanks[j].movements;
            }
        }
    }
    return [];
}

/*16) Implementar una función para encontrar los movimientos de una determinada tarjeta de débito a
partir del ID de la tarjeta. La función recibe como parámetro el ID de la tarjeta de débito y devuelve
un nuevo vector con los movimientos que se realizaron con esa tarjeta.
NOTA: No se conoce el ID del cliente. Hay que buscar cliente por cliente a ver a quién está asociada
esa tarjeta de débito.*/

function encontrarMovimientoTD(idDebitCard) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingsBanks.length; j++) {
            for (let k = 0; clients[i].savingsBanks[j].debitCards.length > k; k++) {
                if (clients[i].savingsBanks[j].debitCards[k].id == idDebitCard) {
                    return clients[i].savingsBanks[j].debitCards[k].consumptions;
                }
            }
        }
        return [];
    }
}

/*17) Implementar una función para encontrar los movimientos de una determinada tarjeta de crédito a
partir del ID de la tarjeta. La función recibe como parámetro el ID de la tarjeta de crédito y devuelve
un nuevo vector con los movimientos que se realizaron con esa tarjeta.
NOTA: No se conoce el ID del cliente. Hay que buscar cliente por cliente a ver a quién está asociada
esa tarjeta de crédito.*/

function encontrarMovimientoTC(creditsCardsId) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].creditCards.length; j++) {
            if (clients[i].creditCards[j].id == creditsCardsId) {
                return clients[i].creditCards[j].consumptions;
            }
        }
    }
    return [];
}

/*23) Implementar una función para realizar una transferencia de dinero de un cliente a otro.
    a. La forma de llevar a cabo esto es utilizando el método de extracción en la caja de ahorros
    correspondiente en el cliente origen y el método de ingreso en la caja de ahorros
    correspondiente del cliente destino, verificando qué respuesta dio cada método.
    b. La función recibe tres parámetros:
    i. El ID de la caja de ahorro que tiene el dinero a transferir.
    ii. El Alias, CBU o ID de la caja de ahorro de destino.
    iii. El monto por transferir.
    c. Se debe verificar que el cliente que va a transferir el dinero cuente con el mismo en la caja
    de ahorro correspondiente.
    d. La función devuelve true si se realiza la transferencia y false en caso contrario.*/

function transferenciaDinero(idCajaOrigen, cbuDestino, monto) {
    let cajaOrigen = undefined;
    let cajaDestino = undefined;
    let encontrado = false;

    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingsBanks.length; j++) {
            if (clients[i].savingsBanks[j].id == idCajaOrigen && encontrado == false) {
                cajaOrigen = clients[i].savingsBanks[j];
                encontrado = true;
            }
        }
    }
    if (cajaOrigen == undefined) {
        return false;
    }
    let encontrado2 = false;
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].savingsBanks.length; j++) {
            let caja = clients[i].savingsBanks[j];
            if (caja.cbu == cbuDestino && encontrado2 == false) {
                cajaDestino = caja;
                encontrado2 = true;
            }
        }
    }
    if (cajaDestino == undefined) {
        return false;
    }
    let extrajo = cajaOrigen.extraccionCA(monto);
    if (extrajo != true) {
        return false;
    }
    let ingreso = cajaDestino.ingresoCA(monto);
    if (ingreso == -1) {
        return false;
    }

    return true;
}

let idLogged = -1;

//chequea si el usuaario ya existe o se tiene que registrar

function existsClient(DNI, password) {
    let i = 0
    while (i < clients.length) {
        let client = clients[i];
        if (client.dni == DNI) {
            if (client.password == password) {
                return client.id;
            } else {
                return 0;
            }
        } i++
    }
    return -1
}

//lo loggea

function login() {
    let DNI = ui.getDNI();
    let password = ui.getPassword();
    console.log(DNI, password)
    let resultado = existsClient(DNI, password);
    console.log(resultado);
    if (resultado > 0) {
        idLogged = resultado;
        ui.changeScreen();
    } else if (resultado == 0) {
        ui.showModal("Password incorrecta", "escriba nuevamente");
    } else {
        ui.showModal("Usuario no existente")
    }
}

//recibe los datos

function newClient(dni, password, nombre, apellido) {
    let resultado = existsClient(dni, password);
    if (resultado == -1) {
        clients.push(new Client(dni, password, nombre, apellido));
        return idClient - 1;
    } else {
        return -1;
    }
}

//lo registra

function registrar() {
    let nombre = ui.getClient();
    let apellido = ui.getLastName();
    let dni = ui.getDNIRegistro()
    let password = ui.getPasswordRegistro();
    let resultado = newClient(dni, password, nombre, apellido);
    let usuario;
    if (resultado >= 0) {
        if (nombre.length <= 0 || apellido.length <= 0 || password.length <= 0) { //seguir probando
            ui.showModal("Ningún campo debe quedar vacío")
            return;
        }
        if (dni.length < 7) {
            ui.showModal("Su DNI debe tener al menos 7 dígitos")
        }
        
        usuario = existsClient(dni, password)
        if (usuario > 0) {
        idLogged = usuario;
        ui.changeScreen();
        } else if (usuario == 0) {
            ui.showModal("Password incorrecta", "escriba nuevamente");
        } else {
            ui.showModal("Usuario no existente")
        }

    } else {
        ui.showModal("Usuario existente, inicie sesión o ingrese otro correo electrónico")
    }
}

//cierra la sesión

function cerrarSesion() {
    idLogged = 0;
    if (confirm("¿Estás seguro que quieres salir?")) {
        ui.changeScreen();
        ui.clearLoginInputs();
        ui.clearRegisterInputs();
        ui.showModal("Se cerró la sesión")
    } else {
        ui.showModal("La sesión sigue abierta")
    }
}

//reemplaza todos los datos de la tarjeta por la del cliente loggeado

function datosCard(idClient){
                    
}