window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	var crearMensaje = document.getElementById("mensaje");

	boton.addEventListener("click", function(e) {
		e.preventDefault();
		mostrarMensaje(crearMensaje.value);
		crearMensaje.value = "";
	});

	function mostrarMensaje(crearMensaje){
		var newMensaje = document.createElement("div");
	    var mostrarMensaje = document.createTextNode(crearMensaje);
	    newMensaje.appendChild(mostrarMensaje);
	    var placeText = document.getElementById("hola");
	    placeText.insertBefore(newMensaje, placeText.childNodes[0]);
	    };

	crearMensaje.addEventListener("keyup", function(){
		var limiteMaximo = 140;
		var caracteresIngresados = this.value.length;
		var contar = document.getElementById("contador");
		contar.innerText = limiteMaximo - caracteresIngresados;
		if (caracteresIngresados>=limiteMaximo){
			contar.classList.add("colorRed");
			boton.disabled = true;
		} else {
			contar.classList.remove("colorRed");
			boton.disabled=false;
		}
	});
	
});



















