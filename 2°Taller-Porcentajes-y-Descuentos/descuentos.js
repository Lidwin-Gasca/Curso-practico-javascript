
function calcularPrecioConDescuento(precio,descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
 
    return precioConDescuento;
}

function funcionOnClick(){
    const precioU = document.getElementById("InputPrice");
    const pricevalue = precioU.value;
    const descuentoU = document.getElementById("InputDiscount");
    const descuentovalue = descuentoU.value;

    const precioConDescuento = calcularPrecioConDescuento(pricevalue,descuentovalue);

    const priceResult = document.getElementById("PriceResult");
    priceResult.innerText = `El precio ya con con el descuento es de $${precioConDescuento} dolares`
}
