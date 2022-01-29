///HELPERS💥
function calcularMediaArimetica(lista){
    //     let sumaLista = 0;
    // //    for (let i = 0; i < lista.length; i++){                CICLO FOR:
    // //     sumaLista = sumaLista + lista[i];                     en este bloque se usa el 
    // //     }                                                     ciclo for en vez de usar 'reduce'.
    const sumaLista = lista.reduce(
        function (valorAcomulado,  nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }, 0);          //DATO CURIOSO: en esta misma linea, el "}, 0);"
                        //es la inicializacion del acumulador, o en este caso "valorAcomulado"
                        //si no lo inicailizamos, 'reduce' se saltara el primer objeto de el Array.
                        //NOTA: 
                        //no es necesario inicializar en cero, puedes inicializar en cualquier numero deseado.
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

// fucntion esPar(numerito){
//     if (numerito % 2 === 0){
//         return true;                    🎈este boque de codigo es inecesario, el siguiente bloque de codigo es mejor.
//     } else{
//         return false;
//     }
// }
function esPar(numerito){
    return (numerito % 2 === 0);
}

 

///CODIGO REAL SOBRE EL ANALISIS💦
const salariosCol  = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColombiaSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);



function medianaSalarioCol(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1]
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaArimetica([personitaMitad1], [personitaMitad2]);
        return mediana;
    } else { 
        const personitaMitad = lista[mitad -1];

        return personitaMitad;
    }
}

  console.log(medianaSalarioCol(salariosColombiaSorted));

///MEDIANA GENERAL DE COLOMBIA
  const medianaGeneralCol = medianaSalarioCol(salariosColombiaSorted);

///MEDIANA TOP 10%
const spliceStart = (salariosColombiaSorted.length * 90) / 100;
const spliceCount = salariosColombiaSorted.length - spliceStart;
const salariosColTop10 =  salariosColombiaSorted.splice(
    spliceStart,
    spliceCount,
);
const medianaTop10Col = medianaSalarioCol(salariosColTop10);

console.log(medianaTop10Col);
/* 
esto no esta completado, el ultimo log me sale undifined, no entiendo
 */