/*Idear una clase con la estructura que va a tener cada objeto “Movement” (movimiento).
Hay que considerar que el constructor reciba como parámetros todos los datos necesarios para
generar un nuevo movimiento.
Se debe contemplar que cada movimiento tiene, mínimamente:
a. ID del movimiento.
b. Fecha del movimiento. Puede recibirse en el constructor o ingresarse automáticamente la
fecha actual. El parámetro debe ser de la clase Date.
c. Nombre del tercero. O sea, el nombre del local dónde se realizó el consumo, o nombre de la
persona a la que se realizó / se recibió una transferencia. Depende del contexto.
d. Monto consumido o acreditado.
e. Cantidad de cuotas (en caso de ser un movimiento de tarjeta de crédito).*/

let idMovement = 1;

class Movement {
    constructor(fecha, nombreTercero, montoConsumido, cuotas) {
        this.id = idMovement;
        idMovement++;
        this.fecha = fecha;
        this.nombreTercero = nombreTercero;
        this.montoConsumido = montoConsumido;
         if(cuotas>=1){
            this.cuotas = cuotas;
        }
    }
}

clients[0].savingsBanks[0].movements.push(new Movement(new Date(2025,7,3), "Coto", 10000))
clients[1].savingsBanks[1].movements.push(new Movement(new Date(2025,7,8), "Coto", 50000))