alert("hola");

let intMenu = parseInt(prompt("Seleccione un producto"));

let precioProducto;

switch(intMenu){
	case 1:
		precioProducto = 10;
		break;
	case 2:
		precioProducto = 20;
		break;
	case 31:
		precioProducto = 50;
		break;
}

let intCantidad;
if(precioProducto > 0){
	intCantidad = parseInt(prompt("ingrese la cantidad:"));
}