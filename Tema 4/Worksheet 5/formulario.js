function validarFormulario(){
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	var inputNombre = document.getElementById("nombre");
	var inputApellidos = document.getElementById("apellidos");

	var reNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
	var reApellidos = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
	if (reNombre.test(nombre)){
		inputNombre.style.backgroundColor = "#21FD95";
		inputNombre.style.border = "#21FD95";
	} else{
		inputNombre.style.backgroundColor = "#FF5151";
		inputNombre.style.border = "#FF5151";
		//document.getElementById("pNombre").style.visibility = "visible";
	}

	if (reApellidos.test(apellidos)){
		inputApellidos.style.backgroundColor = "#21FD95";
		inputApellidos.style.border = "#21FD95";
	} else{
		inputApellidos.style.backgroundColor = "#FF5151";
		inputApellidos.style.border = "#FF5151";
		//document.getElementById("pApellidos").style.visibility = "visible";
	}


	var dni = document.getElementById("dni").value;
	var inputDNI = document.getElementById("dni");
	var reDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

	if (reDNI.test(dni)){
		inputDNI.style.backgroundColor = "#21FD95";
		inputDNI.style.border = "#21FD95";
	} else{
		inputDNI.style.backgroundColor = "#FF5151";
		inputDNI.style.border = "#FF5151";
		//document.getElementById("pDNI").style.visibility = "visible";
	}


	var telefono = document.getElementById("telefono").value;
	var inputTelefono = document.getElementById("telefono");
	var reTelefono = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;

	if (reTelefono.test(telefono)){
		inputTelefono.style.backgroundColor = "#21FD95";
		inputTelefono.style.border = "#21FD95";
	} else{
		inputTelefono.style.backgroundColor = "#FF5151";
		inputTelefono.style.border = "#FF5151";
		//document.getElementById("pTelefono").style.visibility = "visible";
	}


	var correo = document.getElementById("correo").value;
	var inputCorreo = document.getElementById("correo");
	var reCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if (reCorreo.test(correo)){
		inputCorreo.style.backgroundColor = "#21FD95";
		inputCorreo.style.border = "#21FD95";
	} else{
		inputCorreo.style.backgroundColor = "#FF5151";
		inputCorreo.style.border = "#FF5151";
		//document.getElementById("pCorreo").style.visibility = "visible";
	}


	var usuario = document.getElementById("usuario").value;
	var inputUsuario = document.getElementById("usuario");
	var reUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;

	if (reUsuario.test(usuario)){
		inputUsuario.style.backgroundColor = "#21FD95";
		inputUsuario.style.border = "#21FD95";
	} else{
		inputUsuario.style.backgroundColor = "#FF5151";
		inputUsuario.style.border = "#FF5151";
		//document.getElementById("pUsuario").style.visibility = "visible";
	}
}



