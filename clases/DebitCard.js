/*3) Idear una clase con la estructura que va a tener cada objeto “DebitCard”.
Hay que considerar que el constructor reciba como parámetros todos los datos necesarios para
generar una nueva tarjeta de débito.
a. ID de la tarjeta de débito.
b. Número de tarjeta de débito.
c. Proveedor de la tarjeta (VISA, MasterCard, American Express, Cabal, etc.).
d. Fecha de vencimiento de la tarjeta de débito (solo importan mes y año, el parámetro debe
ser de la clase Date).
e. Código de seguridad de la tarjeta.
f. Nombre escrito en la tarjeta (es el nombre y apellido del cliente, pero normalmente
recortado). Ej: Juan Carlos Perez capaz tiene como nombre en la tarjeta JUAN C PEREZ o
JUAN CARL PEREZ.
g. Historial de consumos de la tarjeta de débito.*/

let idDebitCard = 1;

class DebitCard {
    constructor(numero, proveedor, fechaVencimiento, codigoSeguridad, nombreTarjeta, historialConsumos) {
        this.id = idDebitCard;
        idDebitCard++;
        this.numero = numero;
        this.proveedor = proveedor;
        this.fechaVencimiento = fechaVencimiento;
        this.codigoSeguridad = codigoSeguridad;
        this.nombreTarjeta = nombreTarjeta;
        this.consumptions = [];
    }
}

/*Genere, a partir de instanciar la clase, unos cuántos objetos “debitCards” con unas cuántas tarjetas
de débito que estén asociados a cajas de ahorro de distintos clientes generadas en el ejercicio
anterior (recomendado, al menos una por caja de ahorro y alguna caja con más de una).*/

clients[0].savingsBanks[0].debitCards.push(new DebitCard("VISA",new Date("12/27/2023"),177,"JULIETA GAETANI")) //Formato MES/DIA/AÑO
clients[1].savingsBanks[1].debitCards.push(new DebitCard("CABAL",new Date("11/18/2022"),118,"PILAR ARRUFAT"))
clients[2].savingsBanks[1].debitCards.push(new DebitCard("American Express",new Date("03/17/2024"),678,"JUAN PUTRINO"))
clients[3].savingsBanks[0].debitCards.push(new DebitCard("MasterCard",new Date("09/24/2023"),345,"NICOLAS MARCHESI"))