 


const contenido= document.getElementById("contenido");

let nombre=" Leonys Vasquesz";

let edad=18;

let resultado = "Nombre:"+ nombre;
 

if (edad > 17) {
    alert("Puedes entrar a la disco");
}
else if(edad =>13){
    alert('Puedes entrar con un adulto');
}

else{
    alert("No puedes entrar a la disco");
}

addContent("<h2>"+nombre+"</h2>")



for(let edad1=0; edad1 <=10; edad1++){
    console.log(edad1)

}
for(let edad1=0; edad1 <=100; edad1+=20){
    console.log(edad1)
}


for(let edad=0; edad <=10 ; edad++){
   addContent("<h2>La edad de"+nombre+" es "+edad+" </h2>");
}

/* FUNTION QUE ANADE CONTENIDO AL ELEMENTO QUE ASIGNE*/

function addContent(newContent){
    console.log(newContent)
    contenido.innerHTML += newContent;
}



addContent("HOLA CHICA")



/* LAS CONSTANTES SE PONEN EN MAYUCULAS BUENA PRACTICA*/
const COLOR_ROJO="#FF000";

let nombres=["Leonys ","Ricardo ","Julio ","Asheley"];


let edades=[ 20, 50, 234, 45];
console.log(edades[0]);


for (let i = 0; i< edades.length; i++){
    addContent("<h2>La edad de "+nombre+" es "+edades[i]+"</h2>");
}




