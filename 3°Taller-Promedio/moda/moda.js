const lista = [
    1,
    2,
    3,
    4,
    3,
    4,
    2,
    1,
    1,
    2,
    2,
    3,
    1,
    2,
    2,
];
const listaCount = {};

lista.map(
    function (elemento){
        if (listaCount[elemento]){
             listaCount[elemento] += 1; //ESTO ES LO MISMO QUE PONER 👉 listaCount[elemento] = listaCount[elemento] + 1;
        }
        else {
          listaCount[elemento] = 1;
        }
    }
);

const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

const moda = listaArray[listaArray.length - 1]; //para hacer este codigo funcionar, o mas bien manifestarlo, debes escribirlo en el inspeccionador de google, o tu navegador de preferencia.