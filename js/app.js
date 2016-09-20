window.addEventListener("load", function() {
	var boton = document.getElementById("boton");
	var crearMensaje = document.getElementById("mensaje");
	
	boton.addEventListener("click", function(e) {
		e.preventDefault();
		mostrarMensaje(crearMensaje.value);
		crearMensaje.value = "";
		var contar = document.getElementById("contador").innerText="140";
		boton.disabled = true; 
		
	});

	function mostrarMensaje(crearMensaje){
		var newMensaje = document.createElement("div");
	    var mostrarMensaje = document.createTextNode(crearMensaje);
	    newMensaje.appendChild(mostrarMensaje);
	    var placeText = document.getElementById("hola");
	    reloj(newMensaje);
	    placeText.insertBefore(newMensaje, placeText.childNodes[0]);
	    };

	function reloj(re){
		var momentoActual = new Date() ;
	   	var hora = momentoActual.getHours() ;
	   	var minuto = momentoActual.getMinutes() ;
	   		if (minuto<10) {
	   			minuto ="0" + minuto;
	   		}
	   	var horaImprimible = " " + hora + " : " + minuto;
	   	var hora = document.createElement("span");
	   	hora.innerText=horaImprimible ;
		re.insertBefore(hora,re.childNodes[1]);
	}

	crearMensaje.addEventListener("keydown", function(){
		var limiteMaximo = 140;
		var caracteresIngresados = this.value.length;
		var contar = document.getElementById("contador");
		contar.innerText = limiteMaximo - caracteresIngresados;
		if (caracteresIngresados >=130){
			contar.classList.add("colorPurpura");
		} else {
			contar.classList.remove("colorPurpura");
		};
		if (caracteresIngresados>=120){
			contar.classList.add("colorRed");
		}else{
			contar.classList.remove("colorRed");
		};
		if (caracteresIngresados>=limiteMaximo){
			contar.classList.add("colorSol");
			boton.disabled = true;
		} else {
			contar.classList.remove("colorSol");
			boton.disabled = false;
		};
	});
	
	crearMensaje.addEventListener('keydown', autosize);     
		function autosize(){
		  var el = this;
		  setTimeout(function(){
		    el.style.cssText = 'height:auto; padding:0';
		    el.style.cssText = 'height:' + el.scrollHeight + 'px';
		  },0);
		}
});