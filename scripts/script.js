/*OPEN MENU*/
/*variable open button*/
var btnOpenMenu = document.querySelector('button[aria-label="menubutton"]');

/*Laat button naar kliks luisteren*/
btnOpenMenu.onclick = openmenufunction;

/*Maakt een class aan*/
function openmenufunction() {
    document.querySelector("nav").classList.add("toonMenu"); /*<<<< dit zorgt ervoor dat het in de lijst kijkt en een klas erbij komt*/
}
/*--------------------------------------------------------------------------------------------*/

/*SLUIT*/
var closemenu = document.querySelector("nav button");

/*laat de menu-button luisteren naar kliks en voer dan een functie */
closemenu.onclick = closemenufunction;

/*in de functie verwijder de class van de nav*/
function closemenufunction() {

    document.querySelector("nav").classList.remove("toonMenu");
}

