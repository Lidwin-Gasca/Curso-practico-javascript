const gastosDelMes = [];
const ingresosDelMes = [];
function gastosRandom(min, max){
    let resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) +  min;
    return resultado;
}

gastosDelMes.push({
    pagoDe: "Carro",
    cantidad: -300,
});

gastosDelMes.push({
    pagoDe: "Aseguranza",
    cantidad:  -162,
});

gastosDelMes.push({
    pagoDe: "Realm",
    cantidad: -8.99,
});

gastosDelMes.push({
    pagoDe: "Kinetic internet Service",
    cantidad: -95,
});

gastosDelMes.push({
    pagoDe: "Renta del mes",
    cantidad: -300,
});

gastosDelMes.push({
    pagoDe: "Pago del agua",
    cantidad: -120,
});

gastosDelMes.push({
    pagoDe: "Gasto Random",
    cantidad: - gastosRandom(350, 700),
});

ingresosDelMes.push({
    pagoDe: "Trabajo",
    cantidad: 460 * 4,
});

const residuo = gastosDelMes.concat(ingresosDelMes);
const cantidadesResiduo = residuo.map(function(residuo){
    return residuo.cantidad;
});

const reductor = (valorPrevio, valorActual) => valorPrevio + valorActual;
ahorro = cantidadesResiduo.reduce(reductor);

console.log(gastosDelMes,
     ingresosDelMes,
      residuo,
       cantidadesResiduo,
        `                             Dinero restante $${ahorro} dolares.`);