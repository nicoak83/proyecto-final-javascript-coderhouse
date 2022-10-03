/*Código para la generación de un buscador de precios de los productos y en base al valor encontrado, establece un costo final dependiendo de la forma de pago

class producto{
    constructor(codigo, articulo, marca, cantidad, precio){
        this.codigo = codigo;
        this.articulo = articulo;
        this.marca = marca;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}
let productos = [];
productos.push(new producto(`000${productos.length + 1}`,"Jabón líquido ropa", "TBCC","800 ml",250));
productos.push(new producto(`000${productos.length + 1}`,"Suavizante ropa", "TBCC","800 ml",186));
productos.push(new producto(`000${productos.length + 1}`,"Lavandina", "TBCC","4 l",920));
productos.push(new producto(`000${productos.length + 1}`,"Detergente vajilla", "TBCC","300 ml",200));
productos.push(new producto(`000${productos.length + 1}`,"Liquido limpiador baño", "TBCC","420 ml",320));

let articulo = prompt ("Ingrese el nombre del artículo del cual desea buscar el precio");
let encontrado = productos.find((item)=>item.articulo === articulo);
let mostrar = `
    Artículo: ${encontrado.articulo}
    Precio: $${encontrado.precio} 
`;
alert (mostrar);

let valorProducto = encontrado.precio;
let modoDePago = prompt ("Ingrese la forma de pago del articulo deseado (Efectivo - Debito - Credito");
let tna =  57;
let descuento = 0.20;
let recargo = 0.05;

function multiplicacion (a,b){
    return (a*b);
}
function division (a,b){
    return (a/b);
}
function sumar (a,b){
    return (a+b);
}
function restar (a,b){
    return (a-b);
}

if (modoDePago === "Efectivo"){
    let precioConDescuento = restar (valorProducto,multiplicacion (valorProducto,descuento));
    alert (`El valor del producto deseado es de ${precioConDescuento} pesos dado que posee un descuento por pago en efectivo.`)
}
if (modoDePago === "Debito"){
    let precioConRecargo = sumar (valorProducto,multiplicacion (valorProducto,recargo));
    alert (`El valor del producto deseado es de ${precioConRecargo} pesos dado que posee un recargo por pago con débito.`)
}
if (modoDePago === "Credito"){
    let cantidadCuotas = prompt ("Ingrese la cantidad de cuotas en las que desea pagar el artículo");
    for (let index = 0; index < cantidadCuotas; index++){
        let precioDivididoPlazo = division (valorProducto,cantidadCuotas);
        let precioDivididoPlazoMensual = multiplicacion (precioDivididoPlazo,index);
        let diferencia = restar (valorProducto,precioDivididoPlazoMensual);
        let diferenciaConRecargo = division (multiplicacion (diferencia,tna),100);
        let valorCuota = parseInt (sumar (precioDivididoPlazo,diferenciaConRecargo));
        let mensaje = `El valor del pago de la cuota ${index+1} es de ${valorCuota} pesos`;
        alert (mensaje);
    }
}*/

let catalogo = document.getElementById("catalogo");
const inputAfter = document.getElementById("inputAfter");
const botonImput = document.getElementById("botonImput");
class producto{
    constructor(codigo, articulo, marca, presentacion, precio, descripcion, imagen){
        this.codigo = codigo;
        this.articulo = articulo;
        this.marca = marca;
        this.presentacion = presentacion;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}
let carrito = [];
let productos = [];
const boton = document.getElementById ("boton");
productos.push(new producto(`000${productos.length + 1}`,"Jabón líquido ropa", "TBCC","800 ml",250,"Su exclusiva fórmula biodegradable provee una limpieza superior, dejando los blancos más blancos y cuidando las fibras. Elimina las manchas de todos los días y deja un agradable aroma. Altamente concentrado, con apenas 30 ml de producto se puede realizar una carga completa de lavado. Deja la ropa suave y perfumada.","../media/jabonRopa.png"));
productos.push(new producto(`000${productos.length + 1}`,"Suavizante ropa", "TBCC","800 ml",186,"Nuestro suavizante preserva el color original y la suavidad de tus prendas. Sobre todo en el caso de prendas de lana o de ropa delicada, el suavizante mantiene cada fibra lisa y suave, reduciendo la electricidad estática y prolongando la vida útil de la ropa.","../media/suavizante.jpg"));
productos.push(new producto(`000${productos.length + 1}`,"Lavandina", "TBCC","4 l",920,"Solución de Hipoclorito de sodio en agua utilizado como agente oxidante y desinfectante.","../media/lavandina.jpg"));
productos.push(new producto(`000${productos.length + 1}`,"Detergente vajilla", "TBCC","300 ml",200,"Detergente líquido especialmente diseñado para la remoción de suciedad de origen orgánico, proteínas, grasas y aceites mediante el lavado manual de la vajilla. Actúa también sobre suciedad de origen inorgánico tal como incrustaciones minerales. Posee un fresco aroma. Rinde hasta 8 veces su presentación.","../media/detergente.jpg"));
productos.push(new producto(`000${productos.length + 1}`,"Liquido limpiador baño", "TBCC","420 ml",320,"Nuestro producto tiene una poderosa fórmula nueva que elimina fácilmente la suciedad y los residuos de jabón para que puedas limpiar menos y vivir más. Elimina el 99,9 % de los gérmenes. Elimina Escherichia coli durante el uso (al aplicarlo).","../media/liquidoBano.jpg"));


productos.forEach(producto => {
    let item = document.createElement ("div");
    item.innerHTML = `
    <div class="card" style="width: 20rem;">
        <img class="imagenProducto" src="${producto.imagen}" class="card-img-top" alt="Imagen del producto">
        <div class="card-body">
            <h5 class="card-title ">${producto.articulo}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text"> <strong>Código:</strong> ${producto.codigo}</p>
            <p class="card-text"> <strong>Presentación:</strong> ${producto.presentacion}</p>
            <p class="card-text"> <strong>Precio según presentación:</strong> $${producto.precio}</p>
            <a href="#" id=${producto.codigo} class="btn btn-primary">Agregar al carrito</a>
        </div>
    </div>
    `;
    catalogo.append(item);
    const boton = document.getElementById(producto.codigo);
    boton.addEventListener("click", () => comprarProducto(producto));
});

const comprarProducto = (producto) => {
    let productoEnCarrito = carrito.find(item => item.codigo===producto.codigo);
    if(productoEnCarrito === undefined){
        carrito.push({
            codigo: producto.codigo,
            articulo: producto.articulo,
            marca: producto.marca,
            presentacion: producto.presentacion,
            precio: producto.precio,
            cantidad: 1,
        }) 
    }else{
        productoEnCarrito.precio = productoEnCarrito.precio + producto.precio
        productoEnCarrito.cantidad = productoEnCarrito.cantidad + 1
    };
}

const buscarProducto = (string) => {
    console.log (string);
    let productoBuscado = productos.find(item => productos.nombre.includes (string))
    console.log (productoBuscado);
    inputAfter.value = "";
}

boton.addEventListener("click", ()=>console.log (carrito));
botonImput.addEventListener("click", ()=>buscarProducto (inputAfter.value));

