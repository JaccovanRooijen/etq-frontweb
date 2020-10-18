


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
var header = document.querySelector('.nav'); 
var menubar = document.querySelector('.menu');
var shopbag = document.querySelector('.shop')

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

/* Menuknop*/

var menuknop = document.querySelector('.menu')
var lijst = document.querySelector('.menulijst')

menuknop.addEventListener("click", toonmenu)

function toonmenu(){
	lijst.classList.toggle(".menuItem")
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


/* Slider*/
var x = document.getElementsByClassName("mySlides");
var start = 0;
sliden();


function sliden() {
  var i;
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  start++;
  if (start > x.length) {start = 1}    
  x[start-1].style.display = "block";  
  setTimeout(sliden, 2000); 
}