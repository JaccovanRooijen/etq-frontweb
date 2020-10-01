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



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}

var buttontop = document.querySelector("#top");

buttontop.addEventListener("click",topFunction);

console.log ("Gaat goed")

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
console.log ("het werkt")

function slider(){
  const slider = document.querySelectorAll('.slide');
  //Set your timer here :
  const timer = 3000;
  slider[0].style.display = 'block';
  bullets = sliderBulletsCreation(slider);
  sliderLoop(slider, timer, bullets);
};

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
