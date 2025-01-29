// FORMULARIO 1 SELECCIÓN DE PIZZA
let opcionesPizza = document.f1.pizz.options;
let pizza, complemento, postre, bebida;
let subtotal = 0;

function mostrarPrecioPizza(){
	for(let i = 0;i<opcionesPizza.length;i++){
		if(opcionesPizza[i].selected){
			document.f1.dinerito1.value = opcionesPizza[i].value+"€";
			pizza =opcionesPizza[i].value;
		}
	}
}

function calcularTotalPizza(){

    let cantPizza = document.getElementById("cantidad1").value; 

	if (cantPizza && pizza) {
		let total = parseFloat(cantPizza) * parseFloat(pizza);
		document.getElementById("total1").value = total.toFixed(2);

	}
}

function compraProvisionalPizza(){
	let totalPizza = document.getElementById("total1").value;
	if(totalPizza){
		let pizzaSeleccionada = document.getElementById("pizzas").options[document.getElementById("pizzas").selectedIndex].text;
		document.getElementById("tiquet1").value += pizzaSeleccionada+" X "+document.getElementById("cantidad1").value +" = "+totalPizza+"€ \n" ;
		subtotal = parseFloat(subtotal)  + parseFloat(totalPizza) ;
	}
}

document.getElementById("boton2").addEventListener("click", function(event) {
	event.preventDefault();
	calcularTotalPizza();
});

// FORMULARIO 2 SELECCIÓN DE COMPLEMENTO
let opcionesComplemento = document.f2.comp.options;

function mostrarPrecioComplemento(){
	for(let i = 0;i<opcionesComplemento.length;i++){
		if(opcionesComplemento[i].selected){
			document.f2.dinerito2.value = opcionesComplemento[i].value+"€";
			complemento =opcionesComplemento[i].value;
		}
	}
}


function calcularTotalComplemento(){

    let cantCompl = document.getElementById("cantidad2").value; 

	if (cantCompl && complemento) {
		let total = parseFloat(cantCompl) * parseFloat(complemento);
		document.getElementById("total2").value = total.toFixed(2);

	}
}

function compraProvisionalComplemento(){
	let totalComplemento = document.getElementById("total2").value;
	if(totalComplemento){
		let complementoSeleccionado = document.getElementById("complementos").options[document.getElementById("complementos").selectedIndex].text;
		document.getElementById("tiquet1").value += complementoSeleccionado+" X "+document.getElementById("cantidad2").value +" = "+totalComplemento+"€\n" ;
		subtotal = parseFloat(subtotal)  + parseFloat(totalComplemento);

	}
}

document.getElementById("boton4").addEventListener("click", function(event) {
	event.preventDefault();
	calcularTotalComplemento();
});

// FORMULARIO 3
let opcionesPostre = document.f3.postr.options;

function mostrarPrecioPostre(){
	for(let i = 0;i<opcionesPostre.length;i++){
		if(opcionesPostre[i].selected){
			document.f3.dinerito3.value = opcionesPostre[i].value+"€";
			postre =opcionesPostre[i].value;

		}
	}
}

function calcularTotalPostre(){

    let cantPostre = document.getElementById("cantidad3").value; 

	if (cantPostre && postre) {
		let total = parseFloat(cantPostre) * parseFloat(postre);
		document.getElementById("total3").value = total.toFixed(2);

	}
}

function compraProvisionalPostre(){
	let totalPostre = document.getElementById("total3").value;
	if(totalPostre){
		let postreSeleccionado = document.getElementById("postres").options[document.getElementById("postres").selectedIndex].text;
		document.getElementById("tiquet1").value += postreSeleccionado+" X "+document.getElementById("cantidad3").value +" = "+totalPostre+"€\n" ;
		subtotal = parseFloat(subtotal)  + parseFloat(totalPostre);
	}
}

document.getElementById("boton6").addEventListener("click", function(event) {
	event.preventDefault();
	calcularTotalPostre();
});


// FORMULARIO 4
let opcionesBebida = document.f4.bebid.options;

function mostrarPrecioBebida(){
	for(let i = 0;i<opcionesBebida.length;i++){
		if(opcionesBebida[i].selected){
			document.f4.dinerito4.value = opcionesBebida[i].value+"€";
			bebida =opcionesBebida[i].value;
		}
	}
}


function calcularTotalBebida(){

    let cantBebida = document.getElementById("cantidad4").value; 

	if (cantBebida && bebida) {
		let total = parseFloat(cantBebida) * parseFloat(bebida);
		document.getElementById("total4").value = total.toFixed(2);

	}
}

function compraProvisionalBebida(){
	let totalBebida = document.getElementById("total4").value;
	if(totalBebida){
		let bebidaSeleccionada = document.getElementById("bebidas").options[document.getElementById("bebidas").selectedIndex].text;
		document.getElementById("tiquet1").value += bebidaSeleccionada+" X "+document.getElementById("cantidad4").value +" = "+totalBebida+"€\n" ;
		subtotal = parseFloat(subtotal)  + parseFloat(totalBebida);


	}
}

document.getElementById("boton8").addEventListener("click", function(event) {
	event.preventDefault();
	calcularTotalPostre();
});


function pagar(){
	event.preventDefault();
	document.getElementById("total5").value=subtotal.toFixed(2)+"€";
}



