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
        this.provider = provider;
        this.expirationDate = emitionDate;
        this.expirationDate.setFullYear(this.expirationDate.getFullYear() + 5);
        this.securityCode = securityCode;
        this.displayName = displayName;
        this.consumptions = [];
        this.balance = 0;
        this.interest = 1;
        this.closeDate = closeDate;
        this.balanceExpirationDate = balanceExpirationDate;
    }

    /*21) Agregar a las clases SavingsBank, CreditCard y DebitCard un método para registrar un movimiento
    realizado.
    a. El método recibe tres o cuatro parámetros:
    i. El nombre del tercero involucrado en el movimiento.
    ii. El monto del movimiento realizado (puede ser positivo o negativo, depende de si fue
    un gasto o una acreditación de dinero).
    iii. La fecha del movimiento.
    iv. En caso de ser un movimiento con tarjeta de crédito, la cantidad de cuotas.
    b. Por cada movimiento que se realice en una tarjeta de crédito se debe sumar el monto al
    parámetro "saldo" de la tarjeta de crédito correspondiente.
    c. En caso de tarjetas (tanto débito como crédito) se debe verificar que la tarjeta no esté
    vencida antes de intentar registrar un movimiento.
    d. Este método devuelve true si se almacena el movimiento y false en caso contrario.*/

    registrarMovimiento(nombreTercero, monto, fecha, cuotas = 0) {
        const hoy = new Date();
        if (this.expirationDate && new Date(this.expirationDate) < hoy) {
            return false;  
        }
        this.consumptions.push(new Movement(fecha, nombreTercero, monto, cuotas));
        this.balance += monto;  
        return true;
    }
    
    /*22) Agregar a la clase CreditCard un método para registrar un pago que efectúa el cliente del saldo de la
    tarjeta de crédito.
    a. El método recibe el monto que el cliente desea abonar.
    b. El método devuelve:
    i. 1 si se realiza el pago solicitado por el cliente y no queda saldo en la tarjeta para
    pagar (o sea, si se realiza un pago por el monto total o más que el monto total).
    ii. 0 si se realiza el pago solicitado, pero aún queda saldo para pagar (por ejemplo,
    cuando el cliente quiere realizar un pago mínimo).
    iii. -1 si no se puede realizar el pago solicitado por el cliente.
    Esto sucede solamente si el cliente intenta abonar un monto menor al pago mínimo
    de la tarjeta. Para este TP, vamos a considerar que un pago mínimo es el 10% del
    saldo que se debe.*/

    registrarPago(monto){
        if (monto <= 0) {
            return -1;  
        }
        let saldoPositivo = this.balance;
        if (saldoPositivo < 0) {
            saldoPositivo = saldoPositivo * -1;
        }
        if(monto >= saldoPositivo){
            this.balance -= monto
            return 1
        } else if (monto >= saldoPositivo*0.10){
            this.balance -= monto
            return 0
        } else {
            retun -1
        }
    }

}

clients[0].creditCards.push(new CreditCard("VISA", new Date("08/16/2022"), 123, "JULIETA GAETANI", 27, 8))
clients[1].creditCards.push(new CreditCard("CABAL", new Date("03/19/2023"), 234, "PILAR ARRUFAT", 26, 7))
clients[2].creditCards.push(new CreditCard("American Express", new Date("08/12/2024"), 123, "JUAN PUTRINO", 29, 9))
clients[3].creditCards.push(new CreditCard("MasterCard", new Date("06/21/2022"), 123, "NICOLAS MARCHESI", 27, 7))