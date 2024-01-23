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

/*--------------------------------------------------------------------------------------------*/
/*carousel*/
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;
  
    function showSlide(index) {
      const slideWidth = document.querySelector('.carousel img').clientWidth;
      carousel.style.transform = `translateX(${-index * slideWidth}px)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carousel.children.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, 3000); // Automatic slide transition every 3 seconds
  });

/*-------------------------------------------------*/
/*-------------------------detail--------------------*/
/*dropdown*/
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}
