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
}

/*Genere, a partir de instanciar la clase, un vector de objetos “clients” con unos cuántos clientes de
ejemplo que se generen automáticamente al abrir la página web (recomendado, al menos 4).*/

const clients = []
clients.push(new Client(21345654, 4132, "Julieta", "Gaetani"));
clients.push(new Client(34567895, 3209, "Pilar", "Arrufat"));
clients.push(new Client(26316387, 4567, "Juan", "Putrino"));
clients.push(new Client(37654876, 9875, "Nicolas", "Marchesi"));