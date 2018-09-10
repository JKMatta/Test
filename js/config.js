
function validate() {

	console.log("validando");

	var nombre, rut, celular, birthdate, region, ciudad, vivienda, correo, expresion;

	rut = document.getElementById("intRut").value;
	nombre = document.getElementById("txtName").value;
	birthdate = document.getElementById("txtDate").value;
	celular = document.getElementById("intCel").value;
	region = document.getElementById("sltRegion").value;
	ciudad = document.getElementById("sltCiudad").value;
	vivienda = document.getElementById("sltVivienda").value;
	correo = document.getElementById("txtCorreo").value;

	if (rut === "") {
		alert("El campo rut esta vacío");
		return false;
	}
	else if (nombre === "") {
		alert("El campo nombre esta vacío");
		return false;
	}
	else if (birthdate === "") {
		alert("El campo birthdate esta vacío");
		return false;
	}
	else if (celular === "") {
		alert("El campo celular esta vacío");
		return false;
	}
	else if (region === "") {
		alert("El campo region esta vacío");
		return false;
	}
	else if (ciudad === "") {
		alert("El campo ciudad esta vacío");
		return false;
	}
	else if (vivienda === "") {
		alert("El campo vivienda esta vacío");
		return false;
	}
	else if (correo === "") {
		alert("El campo correo esta vacío");
		return false;
	}
}

function modifyText() {
    var letters = 
                [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
                    "v", "w", "x", "y", "z", ",", ".", "!", "'", "$", "%", "&",
                    "/", "(", ")", "=", "?", "¿", "¡", ".", ","
                ]
    var txtRut = document.getElementById("txtRut")
    txtRut.value = txtRut.value.toLowerCase()
    for(let i in letters){
        txtRut.value = txtRut.value.replace(letters[i], "")
    }
    if(txtRut.value.includes("-")) {
        txtRut.value = txtRut.value.replace(/-/g, "")
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }else
    {
        txtRut.value = txtRut.value.slice(0, txtRut.value.length - 1) + "-" + txtRut.value.slice(txtRut.value.length - 1)
    }
    if(txtRut.value.includes("k")) {
        txtRut.value = txtRut.value.replace(/k/g, "")
        txtRut.value += "k"
    }
}



