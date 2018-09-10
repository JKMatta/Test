// Calcula la fecha actual y entrega formato
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; // Enero es 0!
var yyyy = today.getFullYear();
if(dd < 10){
    dd='0'+dd;
} 
if(mm < 10){
    mm='0'+ mm;
}

today = yyyy +'-'+ mm +'-'+ dd;
// Asigna como fcha máxima a a fecha de hoy al input de la fecha
document.getElementById("date").max = today;

function writeBook(){
    // Crea las etiquetas con los datos
    var tr = document.createElement("tr")
    var rut = document.createElement("td")
    var name = document.createElement("td")
    var date = document.createElement("td")
    var cel = document.createElement("td")
    var region = document.createElement("td")
    var ciudad = document.createElement("td")
    var vivienda = document.createElement("td")
    var correo = document.createElement("td")
    // Ingresa los datos en las etiquetas correspondientes
    rut.innerHTML = document.getElementById("txtRut").value
    //-----------------------------------------------------
    name.innerHTML = document.getElementById("txtName").value
    //-----------------------------------------------------
    date.innerHTML = document.getElementById("txtDate").value
    //-----------------------------------------------------
    cel.innerHTML = document.getElementById("intCel").value
    //-----------------------------------------------------
    region.innerHTML = document.getElementById("txtRegion").value
    //-----------------------------------------------------
    ciudad.innerHTML = document.getElementById("txtCity").value
    //-----------------------------------------------------
    vivienda.innerHTML = document.getElementById("sltVivienda").value
    //-----------------------------------------------------
    correo.innerHTML = document.getElementById("txtCorreo").value
    // Agrega los datos a la fila
    tr.appendChild(rut)
    tr.appendChild(name)
    tr.appendChild(date)
    tr.appendChild(cel)
    tr.appendChild(region)
    tr.appendChild(ciudad)
    tr.appendChild(vivienda)
    tr.appendChild(correo)
    // Inserta la fila en la tabla
    document.getElementById("datos-tabla").appendChild(tr)     
}