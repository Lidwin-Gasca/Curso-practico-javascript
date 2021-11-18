//Codigo para un Cuadrado
console.group("Cuadrado");
let ladoCuadrado = 5;
console.log(`los lados del cuadrado miden ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`el perimetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log(`El area es ${areaCuadrada}cm­²`);
console.groupEnd();

//Codigo para un triangulo
console.group("Triangulo");
let ladoTrianguloA = 6;
let ladoTrianguloBase = 4;
let ladoTrianguloC = alturaTriangulo = 6;
console.log(`Los lados del triangulo son ${ladoTrianguloA}cm, ${ladoTrianguloBase}cm y ${ladoTrianguloC}cm`);

const perimetroTriangulo = ladoTrianguloA + ladoTrianguloBase + ladoTrianguloC;
console.log(`el perimetro del triangulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo)/2;
console.log(`el area del triangulo es: ${areaTriangulo}cm²`)
console.groupEnd();

//Codigo para Circulo
let Pi = Math.PI; //esta variable empieza su nombre porque es constante (habitos de buena practica)
let diametro = 6;
let radio = diametro / 2;
console.group("Circulo");
let perimetroCirculo = diametro * Pi;
console.log(`el perimetro es ${perimetroCirculo}`);
let areaCirculo = (Math.pow(radio, 2) * Pi) /2;
console.log(`area del circulo es ${areaCirculo}`);
console.groupEnd();

