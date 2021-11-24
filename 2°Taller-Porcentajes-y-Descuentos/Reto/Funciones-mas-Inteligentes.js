
const coupons = ["baratos", "bajatore", "bjitora"];

function calcularPrecioConDescuento(precio,descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
 
    return precioConDescuento;
}

function funcionOnClick(){
    const precioU = document.getElementById("InputPrice");
    const pricevalue = precioU.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;


    let descuentoV;

    switch(couponValue){
        case coupons[0]: descuentoV = 15;
        break;
        case coupons[1]: descuentoV = 30;
        break;
        case coupons[2]: descuentoV = 25;
        break;
    }



    const precioConDescuento = calcularPrecioConDescuento(pricevalue,descuentoV);

    const priceResult = document.getElementById("PriceResult");
    priceResult.innerText = `El precio ya con con el descuento es de $${precioConDescuento} dolares`
}



///////////////// O MEJOR DE ESTA MANERA:

//////////////   Solución #3: arrays y condicionales mucho más inteligentes  //////////////////////
// Ya usamos uno de los muchos métodos de los arrays para aplicar error first. Pero podemos usar algunos más para simplificar aún más nuestro código.

// 💡 Recuerda que mejorar la legibilidad no (necesariamente) significa reducir líneas de código.

// Array de cupones 2.0: ahora también con los descuentos
// Por ahora tenemos muy separada la lógica de nuestros cupones. Por un lado tenemos la lista de cupones, pero en otro lugar distinto definimos el descuento de cada cupón.

// Vamos a cambiar eso convirtiendo nuestro array de strings en un array de objetos (con el nombre y descuento de cada cupón en el mismo lugar):

// const coupons = [
//     {
//         name: "JuanDC_es_Batman",
//         discount: 15,
//     },
//     {
//         name: "pero_no_le_digas_a_nadie",
//         discount: 30,
//     },
//     {
//         name: "es_un_secreto",
//         discount: 25,
//     },
// ];
// Ahora la función array.includes dejó de funcionar, pero podemos reemplazarla por la función array.find() para validar si el cupón que escribió el usuario está guardado en la propiedad name de alguno de los objetos en la lista de cupones.

// Vamos a crear una variable isUserCouponValueValid con una función que valide si su parámetro coupon es igual a nuestra variable userCouponValue. Y esta variable la vamos a enviar como parámetro a nuestra función array.find().

// const isCouponValueValid = function (coupon) {
//     return coupon.name === couponValue;
// };

// const userCoupon = coupons.find(isCouponValueValid);

// if (!userCoupon) {
//     alert("El cupón " + userCouponValue + "no es válido");
// }
// ¡Muy bien!

// Pero fíjate que ya tenemos nuestro cupón (con nombre y descuento) disponible en la nueva variable userCoupon.

// Podemos aprovechar esta variable para eliminar todos nuestros condicionales else if y cambiarlos por un condicional else que nos proporcione el porcentaje de descuento automáticamente, sin importar el cupón (válido) que estén usando nuestros usuarios.

// if (!userCoupon) {
//     alert("El cupón " + userCouponValue + "no es válido");
// } else {
//     const descuento = userCoupon.discount;
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
// }
// De esta forma, no solo logramos reducir las líneas de código de nuestro programa, sino también mejorar su legibilidad.