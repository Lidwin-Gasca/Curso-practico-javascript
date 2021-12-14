
let mediana;

const lista1 = [
    100,
    200,
    500,
    4000,
];


//LIDWIN, SI ESTAS VIENDO ESTO RESUELVELO, ES DECIR ADAPTA EL CODIGO COMENTADO DE ABAJO AL CODIGO DE ESTE ARCHIVO.

// const listaCount = {};

// lista1.map(
//     function (elemento){
//         if (listaCount[elemento]){
//              listaCount[elemento] += 1; //ESTO ES LO MISMO QUE PONER 👉 listaCount[elemento] = listaCount[elemento] + 1;
//         }
//         else {
//           listaCount[elemento] = 1;
//         }
//     }
// );

// const listaArray = Object.entries(listaCount).sort(
//     function (elementoA, elementoB) {
//         return elementoA[1] - elementoB[1];
//     }
// );


const mitadLista1 = Math.floor((lista1.length / 2) - 1);
const mitadListaElemento2 = Math.floor(lista1.length / 2);

function calcularMediaArimetica(lista){//esta funcion es reutilizada de la carpeta Promedio
    //     let sumaLista = 0;
    // //    for (let i = 0; i < lista.length; i++){                CICLO FOR:
    // //     sumaLista = sumaLista + lista[i];                     en este bloque se usa el 
    // //     }                                                     ciclo for en vez de usar 'reduce'.
    const sumaLista = lista.reduce(function (valorAcomulado,  nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }, 0);          //DATO CURIOSO: en esta misma linea, el "}, 0);"
                        //es la inicializacion del acumulador, o en este caso "valorAcomulado"
                        //si no lo inicailizamos, 'reduce' se saltara el primer objeto de el Array.
                        //NOTA: 
                        //no es necesario inicializar en cero, puedes inicializar en cualquier numero deseado.
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

function esPar(numerito){
    if (numerito % 2 === 0){
        return true
    }
    else {
        return false
    }
}

if (esPar(lista1.length)) { 
    const elemento1 = lista1[mitadLista1];         // -> necesitamos dos elementos
    const elemento2 = lista1[mitadListaElemento2];// 
    const promedioElemento1y2 = calcularMediaArimetica([elemento1, elemento2]) // -> el promedio
    mediana = promedioElemento1y2;            // -> mediana
} 
else{
    mediana = lista1[mitadListaElemento2];
}
