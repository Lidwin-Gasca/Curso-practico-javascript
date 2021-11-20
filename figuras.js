//Codigo para un Cuadrado
console.group("Cuadrado");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrada(lado){
    return lado * lado;
}
console.groupEnd();


//Codigo para un triangulo
console.group("Triangulo");
let ladoTrianguloA = 6;
let ladoTrianguloBase = 4;
let ladoTrianguloC = alturaTriangulo = 6;
function perimetroTriangulo(a, b, c){
    return a + b + c;
}

function areaTriangulo(b,a){
    return (b * a) / 2;
}
console.groupEnd();


//Codigo para Circulo
console.group("Circulo");
let Pi = Math.PI; //esta variable empieza su nombre porque es constante (habitos de buena practica)
function perimetroCirculo(d){
    return d * Pi;
}
function areaCirculo(d){
    let radio = d / 2;
    return (Math.pow(radio, 2) * Pi) / 2;
}
console.groupEnd();

//Interaccion con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrada(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrada(value);
    alert(area);
}