window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	boton.addEventListener("click", function() {
		var crearMensaje = document.getElementById("mensaje").value;

	    var newMensaje = document.createElement("div");
	    var mostrarMensaje = document.createTextNode(crearMensaje);
	    newMensaje.appendChild(mostrarMensaje);

	    var placeText = document.getElementById("hola");
	    placeText.insertBefore(newMensaje, placeText.childNodes[0]);
	    document.getElementById("mensaje").value = "";
	});
});



















