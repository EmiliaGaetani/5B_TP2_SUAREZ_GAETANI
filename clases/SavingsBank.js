/*2) Idear una clase con la estructura que va a tener cada objeto “SavingsBank”.
a. Moneda de la caja de ahorros. Existen cajas de ahorros en pesos y en dólares.
b. Saldo de su caja de ahorro.
c. Límite de descubierto de la caja de ahorro en pesos. Es un valor numérico, entero y positivo.
Si la caja de ahorros es en dólares, no tiene este parámetro.
d. Monto utilizado del descubierto (solo cajas de ahorros en pesos).
e. Tarjeta de débito asociada. Puede ser que distintas cajas de ahorro del mismo cliente tengan
la misma tarjeta de débito.
f. Historial de movimientos de la caja de ahorros.
g. Alias.
h. CBU (Clave Bancaria Uniforme).*/


let savingsBanksId = 1;
let cbuCounter = 1000;
class SavingsBank {

    constructor(currency, alias, limit) {
        this.id = savingsBanksId;
        savingsBanksId++;
        this.currency = currency;
        this.saldo = 0;
        if (currency == "ARS") {
            this.limit = limit;
            this.overdraft = 0;
        }
        this.debitCards = [];
        this.movements = [];
        this.alias = alias;
        this.cbu = cbuCounter;
        cbuCounter++;
    }

    /*18) Agregar a la clase SavingsBank un método para extraer dinero de una caja de ahorros de la cuenta
    bancaria.
    a. El método recibe como parámetro el monto que se desea retirar.
    b. En caso de que se desee retirar dinero de una caja de ahorros en dólares se debe verificar
    que haya saldo suficiente antes de hacer la extracción.
    c. En caso de que se desee retirar de una caja de ahorro en pesos se debe verificar una de
    estas condiciones:
    i. Hay saldo suficiente para realizar la extracción.
    ii. La suma del saldo existente + el descubierto NO utilizado no supera el monto que se
    desea extraer.
    En caso de usarlo se debe modificar el valor del descubierto utilizado para futuras
    extracciones.
    d. Este método devuelve true si se pudo realizar la extracción y false en caso contrario.*/

    extraccionCA(monto) {
        let totalD = (this.limit - this.overdraft)
        if (this.currency == "USD") {
            if (this.saldo >= monto) {
                this.saldo -= monto
                return true
            } else {
                return false
            }

        } else {
            if (this.saldo >= monto) {
                this.saldo = this.saldo - monto
                return true
            } else if (this.saldo + totalD >= monto) {
                this.overdraft = this.overdraft + (monto - this.saldo)
                this.saldo = 0
                return true
            } else {
                return false
            }
        }
    }

    /*19) Agregar a la clase SavingsBank un método para ingresar dinero a una caja de ahorros de la cuenta
    bancaria.
    a. El método recibe como parámetro el monto que se desea ingresar.
    b. Si se ingresa dinero a una caja de ahorro en pesos, y de la misma se había utilizado el
    descubierto, se usa la plata para saldar parcial o totalmente el descubierto otorgado
    primero. Si sobra plata, se la suma al balance de la caja de ahorro.
    c. Este método devuelve el saldo que hay en la caja de ahorro luego de haber realizado el
    ingreso de dinero o -1 si no se puede ingresar dinero.*/

    ingresoCA(monto) {
        if (monto <= 0) {
            return -1;
        }

        if (this.currency === "ARS") {
            if (this.overdraft > 0) {
                if (monto >= this.overdraft) {
                    monto -= this.overdraft;
                    this.overdraft = 0;
                    this.saldo += monto;
                } else {
                    this.overdraft -= monto;
                    monto = 0;
                }
                return this.saldo;
            } else {
                this.saldo += monto;
                return this.saldo;
            }
        } else {
            this.saldo += monto;
            return this.saldo;
        }
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

    registrarMovimiento(nombreTercero, monto, fecha) {
        const mov = new Movement(fecha, nombreTercero, monto);
        this.movements.push(mov);
        return true;
    }
}    



/*Genere, a partir de instanciar la clase, un vector de objetos “savingsBanks” con unas cuántas cajas
de ahorro asociadas a los clientes generados en el ejercicio anterior que se generen
automáticamente al abrir la página web (recomendado, algunos clientes que tengan al menos dos
cajas, una en pesos y otra en dólares).*/

clients[0].savingsBanks.push(new SavingsBank("ARS", "juli.gaet", 150000))
clients[0].savingsBanks.push(new SavingsBank("USD", "julieta.gaet.usd", 1400))
clients[1].savingsBanks.push(new SavingsBank("ARS", "pilar.arrufat", 100000))
clients[1].savingsBanks.push(new SavingsBank("USD", "pili.arru.usd", 2000))
clients[2].savingsBanks.push(new SavingsBank("ARS", "juan.putrino", 170000))
clients[2].savingsBanks.push(new SavingsBank("USD", "juan.putri.usd", 1200))
clients[3].savingsBanks.push(new SavingsBank("ARS", "nico.marche", 200000))
clients[3].savingsBanks.push(new SavingsBank("USD", "nico.marchesi.usd", 2400))