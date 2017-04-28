var element = document.querySelector(".form-in");
element.addEventListener('submit',function(event){
	event.preventDefault();
	validateForm();
});


function validateForm(){
	var name = document.getElementById("name"),
		dni = document.getElementById("dni"),
		date = document.getElementById("date"),	
		cel	= document.getElementById("cel"),
		house = document.getElementById("house"),
		password1 = document.getElementById("password-input"),
		password2 = document.getElementById("password-input2"),
		comentario = document.getElementById("comentario");
	var span0 = document.getElementById("wrong0"),
		span1 = document.getElementById("wrong1"),
		span2 = document.getElementById("wrong2"),
		span3 = document.getElementById("wrong3"),
		span4 = document.getElementById("wrong4"),
		span5 = document.getElementById("wrong5"),
		span6 = document.getElementById("wrong6"),
		span7 = document.getElementById("wrong7"),
		span8 = document.getElementById("wrong8"),
		span8 = document.getElementById("wrong9");
// NAME
	if(name.value == ""){
		span0.style.display = "block";
		span0.innerHTML = "Completa el campo";
		name.focus();
		return false;
	}
	else if(/([A-ZÑÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+/.test(name.value) == false){
		span0.style.display = "block";
		span0.innerHTML = "Las primeras letras de tu nombre en mayúscula";
	}
	else{
		span0.style.display = "none";
	}
// DNI
	if(dni.value == ""){
		span1.style.display = "block";
		span1.innerHTML = "Completa el campo";
		dni.focus();
		return false;
	}

	else if(/\w+/.test(dni.value) || dni.value.length > 8){
		span1.style.display="block";
		span1.innerHTML = "Solo 8 dígitos";
		dni.focus();
		return false;
	}
	else {
		span1.style.display="none";
		date.focus();
	}




	// else if(/\d{6,10}/.test(password1)){
	// 	span1.style.display = "none";
	// }

// DATE
	// if(date)
	
	// span2.style.display = "block";
	// 	span2.innerHTML = "Completa el campo";
	// 	span2.innerHTML	=	"Oh!! Eres mayor de edad"

// CEL
	// span3.style.display = "block";
	// 	span3.innerHTML = "Completa el campo";


// HOUSE
	// span4.style.display = "block";
	// 	span4.innerHTML = "Completa el campo";
// PASSWORD1
	// span5.style.display = "block";
	// 	span5.innerHTML = "Completa el campo";

// PASSWORD2
	// span6.style.display = "block";
	// 	span6.innerHTML = "Escriba nuevamente su contraseña";
// COMENTARIO
	// span7.style.display = "block";
	// 	span7.innerHTML = "Escriba su comentario";

	// span8.style.display = "block";
	// 	span8.innerHTML = "Acepta las condiciones?";



}

// function setInputDate(){
// 	date
// 	var hoy = 

// }