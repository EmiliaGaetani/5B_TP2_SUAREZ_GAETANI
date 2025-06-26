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

function encontrarTarjetaD(idCredit) {
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
                    return clients[i].savingsBanks[j].debitCards[k].historialConsumos;
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

