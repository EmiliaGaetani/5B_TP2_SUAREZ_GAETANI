/**4) Idear una clase con la estructura que va a tener cada objeto “CreditCard”.
Hay que considerar que el constructor reciba como parámetros todos los datos necesarios para
generar una nueva tarjeta de crédito.
NOTA: En una aplicación real esto estaría mal implementado, y se utilizaría un concepto llamado Herencia con tres clases que serían Card y de ahí heredarían DebitCard y CreditCard. Esto está fuera
del alcance de la materia, pero escuchamos dudas de quienes vayan a seguir con esta profesión.
Se debe contemplar que cada tarjeta de crédito tiene, mínimamente:
a. ID de la tarjeta de crédito.
b. Número de tarjeta de crédito.
c. Proveedor de la tarjeta (VISA, MasterCard, American Express, Cabal, etc.).
d. Fecha de vencimiento de la tarjeta de crédito (solo importan mes y año, el parámetro debe
ser de la clase Date).
e. Código de seguridad de la tarjeta.
f. Nombre escrito en la tarjeta (es el nombre y apellido del cliente, pero normalmente
recortado).
g. Saldo.
Este parámetro almacena la plata que el cliente le debe al banco. Puede ser que aún no le
corresponda pagar la tarjeta, o que haya realizado un pago que no sea completo.
Este monto puede ser positivo (si el cliente le debe plata al banco), cero (si se pagó todo al
día) o negativo (si el cliente, cuando efectuó el pago de la tarjeta, pagó más de lo que debía.
Sí, puede pasar en la realidad).
h. Interés por pago fuera de término o pago mínimo. Debe ser un valor mayor a 1 (por ejemplo,
1.05 para representar el 5% de interés).
Vamos a usar este parámetro más adelante para simplificar el concepto de adeudarle plata
al banco, que es mucho más complejo de lo que quiere alcanzar este TP.
i. Fecha de cierre de la tarjeta.
j. Fecha de vencimiento del crédito.
k. Historial de consumos de la tarjeta de crédito. */



let creditsCardsId = 1;
let cardsNumbers = 100000;

class CreditCard{
    constructor(provider, emitionDate, securityCode, displayName, closeDate, balanceExpirationDate) {
        this.id = creditsCardsId;
        creditsCardsId++;

        this.cardNumber = cardsNumbers;
        cardsNumbers++;

        //VISA, American Express, MasterCard, CABAL...
        this.provider = provider;

        //Para poder tener distintas fechas de vencimiento de tarjeta.
        this.expirationDate = emitionDate;
        this.expirationDate.setFullYear(this.expirationDate.getFullYear() + 5);

        //Solo para saber que existe
        this.securityCode = securityCode;

        //Ej: NICOLAS AGUST FACON o NICOLAS A FACON
        this.displayName = displayName;

        this.consumptions = [];

        this.balance = 0;
        //Si el cliente hace un pago que NO sea el total, modificamos el interes
        //Por ej, 1.1
        this.interest = 1;

        //Fecha hasta la cual se computan los gastos
        this.closeDate = closeDate;
        //Fecha en la que tengo que pagar la tarjeta.
        this.balanceExpirationDate = balanceExpirationDate;
    }
}

clients[0].creditCards.push(new CreditCard("VISA", new Date("08/16/2022"), 123, "JULIETA GAETANI", 27, 8))
clients[1].creditCards.push(new CreditCard("CABAL", new Date("03/19/2023"), 234, "PILAR ARRUFAT", 26, 7))
clients[2].creditCards.push(new CreditCard("American Express", new Date("08/12/2024"), 123, "JUAN PUTRINO", 29, 9))
clients[3].creditCards.push(new CreditCard("MasterCard", new Date("06/21/2022"), 123, "NICOLAS MARCHESI", 27, 7))