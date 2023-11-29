/*variable open button*/
var btnOpenMenu = document.querySelector("header > button");

/*Laat button naar kliks luisteren*/
btnOpenMenu.onclick = openmenufunction;

/*Maakt een class aan*/
function openmenufunction(){
    document.querySelector("nav").classList.add("toonMenu"); /*<<<< dit zorgt ervoor dat een klas erbij komt*/
}

