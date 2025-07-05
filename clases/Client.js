/* 1) Idear una clase con la estructura que va a tener cada objeto “Client”.
Hay que considerar que el constructor reciba como parámetros todos los datos necesarios para
generar un nuevo cliente.
Se debe contemplar que cada cliente tiene, mínimamente:
a. ID del cliente.
b. DNI (no puede usarse como ID ya que existen DNIs repetidos).
c. Contraseña para acceder al home banking. Como nombre de usuario para el login vamos a
utilizar el DNI.
d. Nombre del cliente.
e. Apellido del cliente.
f. Cajas de ahorro asociadas.
g. Tarjetas de crédito asociadas.*/

let idClient = 1;
const COTIZACION_DOLAR = 1240; 

class Client {
    constructor(dni, password, nombre, apellido) {
        this.id = idClient;
        idClient++;
        this.dni = dni;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.savingsBanks = [];
        this.creditCards = [];
    }


    /*20) Agregar a la clase Client un método para realizar “Compra – Venta de dólares”.
    a. La forma de llevar a cabo esto es utilizando el método de extracción en la caja de ahorros de
    una moneda y el método de ingreso en la caja de ahorros de la otra moneda, verificando
    qué respuesta dio cada método.
    b. Se debe calcular el equivalente del monto extraído en la moneda destino, utilizando una
    conversión.
    c. El valor de conversión debe ser una variable tipo const global con la cotización del dólar. Hay
    que recordar que las constantes no se declaran ni en camelCase ni en PascalCase, sino que
    se escriben con el formato ESTO_ES_UNA_CONSTANTE.
    d. El método recibe tres parámetros:
    i. Monto que se desea vender de la moneda origen.
    ii. ID de la caja de ahorro de la que se desea extraer el dinero.
    iii. ID de la caja de ahorro a la que se desea ingresar el dinero.
    e. El método automáticamente determina si es una operación de compra o de venta y en qué
    moneda está expresado el monto que se ingresa.
    f. Este método devuelve true si se pudo realizar la compra / venta y false en caso contrario.
    */

    compraVentaDolares(monto, idOrigen, idDestino) {
        let cuentaOrigen;
        let cuentaDestino;
    
        for (let i = 0; i < this.savingsBanks.length; i++) {
            if (this.savingsBanks[i].id == idOrigen) {
                cuentaOrigen = this.savingsBanks[i];
            }
        }
        for (let i = 0; i < this.savingsBanks.length; i++) {
            if (this.savingsBanks[i].id == idDestino) {
                cuentaDestino = this.savingsBanks[i];
            }
        }
        if (cuentaOrigen == undefined || cuentaDestino == undefined) {
            return false;
        }
        if (cuentaOrigen.currency == "USD" && cuentaDestino.currency === "ARS") {
            if (cuentaOrigen.extraccionCA(monto)) {
                let ingreso = cuentaDestino.ingresoCA(monto * COTIZACION_DOLAR);
                return ingreso !== -1;
            } else {
                return false;
            }
        }
        if (cuentaOrigen.currency == "ARS" && cuentaDestino.currency== "USD") {
            if (cuentaOrigen.extraccionCA(monto)) {
                let ingreso = cuentaDestino.ingresoCA(monto / COTIZACION_DOLAR);
                return ingreso !=
                 -1;
            } else {
                return false;
            }
        }
        return false;
    }
    
}

/*Genere, a partir de instanciar la clase, un vector de objetos “clients” con unos cuántos clientes de
ejemplo que se generen automáticamente al abrir la página web (recomendado, al menos 4).*/

const clients = []
clients.push(new Client(21345654, 4132, "Julieta", "Gaetani"));
clients.push(new Client(34567895, 3209, "Pilar", "Arrufat"));
clients.push(new Client(26316387, 4567, "Juan", "Putrino"));
clients.push(new Client(37654876, 9875, "Nicolas", "Marchesi"));