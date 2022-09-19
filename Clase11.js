let diaSemana = prompt("¿Qué día es hoy?");
switch (diaSemana) {
case "lunes":

alert("Hoy corresponde pectorales.");

break;
case "martes":

alert("Hoy corresponde dorsal.");

break;
case "miércoles":

alert("Hoy corresponde piernas.");

break;
case "jueves":

alert("Hoy corresponde abdominales.");

break;
case "viernes":

alert("Hoy corresponde biceps.");

break;
case "sábado":

alert("Hoy corresponde triceps.");

break;
case "domingo":

alert("Hoy corresponde espalda.");

break;
default:

alert("Escribe el día de la semana en minúsculas.");

}



let cantveces = prompt("¿Cuántas veces quiere que se muestre el mensaje?");

for(i=1;i<=cantveces;i++)
{
    document.write("Hola mundo n°: " + i + "<br>");   
}


