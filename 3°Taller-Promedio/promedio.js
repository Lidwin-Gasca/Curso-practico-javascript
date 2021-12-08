//NOTA IMPORTANTE: 
//Para que funcione esta pagina web
//debes escibir un array dentro de la funcion "calcularMediaArimetica", 
//un ejemplo de esto se encuentra en la siguiente instruccion.

////INSTRUCCION: 
////En la pagina web preciona las teclas [ctrl]+[shift]+[i] para activar
////el apartado de inspeccion, y entrar al 'console' del mismo apartado.
////Una vez ahi escribe lo siguiente: calcularMediaArimetica([1,14,152]);



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




//OTRA MANERA DE HACERLO ES LA SIGUIENTE:


// const sumaLista = lista.reduce(
//     function (valorAcomulado = 0,  nuevoElemento){
//         return valorAcomulado + nuevoElemento;
//     });


///////Se iguala "valor acumulado" a cero, asi ya no es necesario inicializar\\\\\\\
