/* Obtener referencia a todos los botones */
let botones = document.querySelectorAll("#catalogo > article > button");

/* Agregar el escucha del evento Click, ejecutar método */
botones.forEach(element => {
element.addEventListener("click", agregarCarrito);
});

/* Método para agregar el producto al carrito */
function agregarCarrito(producto){
	let tituloProducto = producto.target.parentElement.querySelector("h3");
	let precioProducto = producto.target.parentElement.querySelector("p");
	let imagenProducto = producto.target.parentElement.querySelector("picture");

/* Ahora colocar en el modal */
let modalCuerpo = document.querySelector("#ventanaCarrito > div > div > div.modal-body");

/* Condicional para saber si está vacío */
if (modalCuerpo.querySelector("p").innerHTML == "Su carrito está actualmente vacío."){
	modalCuerpo.innerHTML = "";
}

modalCuerpo.innerHTML += "<h3>" + tituloProducto.innerHTML + "</h3><p>" + precioProducto.innerHTML + imagenProducto.innerHTML +"</p";
alert("Se agregó correctamente");

}


let limpiar = document.querySelector("#ventanaCarrito > div > div > div > button");
limpiar.addEventListener("click", limpiar_modal);

function limpiar_modal(producto){
	modalCuerpo.innerHTML = "";
}