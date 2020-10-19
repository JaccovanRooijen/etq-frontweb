/* Top Knop*/
var buttontop = document.querySelector("#top");

buttontop.addEventListener("click",topFunction);

console.log ("Gaat goed")

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


console.log ("het werkt")

/* Nav animatie*/
// Haal element op met de classes://
var header = document.querySelector('.nav'); 
var menubar = document.querySelector('.menu');
var shopbag = document.querySelector('.shop')

// Wanneer scroll var top scroll y meer dan 600 is -> voor funtion uit//
window.onscroll = function(){
	var top = window.scrollY;
	console.log(top);
	
	if (top >= 600){
		header.classList.add('active')
		menubar.classList.add('menuactive')
		shopbag.classList.add('shopactive')
	}
	else{
		header.classList.remove('active')
		menubar.classList.remove('menuactive')
		shopbag.classList.remove('shopactive')

	}
}

/* Collapsible*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


// Haal element op met ID #slideshow
var slideshow = document.getElementById('slideshow')

// Haal de fotos op binnen de #slideshow element
var images = slideshow.getElementsByTagName('img')

// Init counter
var index = 0;

// Functie dat de fotos wisselt zodat het lijkt op een "slideshow"
function runSlideshow() {

  // Check, als we binnen de range zitten van de (variable)images array.
  if ((index+1) < images.length) {

    // Verberg huidige image
    images[index].style.display = 'none'

    // Maak volgende image zichtbaar
    images[index+1].style.display = 'block'

    // Increment counter
    index++

  } else {
    // Indien we niet meer in de range zitten
    // Verberg huidige image image
    images[index].style.display = 'none'

    // Reset index (zodat deze weer bij 0 begint)
    index = 0

    // Start weer van het begin (om de cirkel af te maken)
    images[0].style.display = 'block'
  }

  // Wacht twee seconden em roep de functie opnieuw op
  setTimeout('runSlideshow()', 2000)
}

runSlideshow()


