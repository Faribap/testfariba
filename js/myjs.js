let getelementheightmy=document.querySelectorAll(".getelementheight")

let divbeformy=document.querySelector(".divbefor")

let itemmenumy=document.querySelectorAll(".item-menu")

let iconserchmy=document.querySelector(".iconserch")   

let divsearchmy=document.querySelector(".divsearch")
let closeSearchmy=document.querySelector(".closeSearch")

let mynavmy=document.querySelector(".mynav")
/*height 100% zir menu*/




/*  item ul*/








itemmenumy.forEach(function(item){
	
	let getSubMenu=item.children[1];
item.addEventListener("mouseover",function(){
	
getelementheightmy.forEach(function(items){
	
	
if(items.classList.contains("open")){
	items.classList.add("d-none")
divbeformy.classList.add("d-none")	
items.classList.remove("open")

	}	
		
	
})	







	
 getSubMenu=item.children[1];	
//console.log(getSubMenu)
if(getSubMenu==undefined){
divsearchmy.classList.add("d-none")
	//console.log("n")
}

if(getSubMenu!=undefined && getSubMenu.classList.contains("getelementheight") ){

getSubMenu.classList.add("getelementheight")		
getSubMenu.classList.remove("d-none")
divbeformy.classList.remove("d-none")
let myheight=getSubMenu.offsetHeight + "px"
divbeformy.style.height=myheight
getSubMenu.classList.add("open")



	/*if(divbeformy.classList.contains("d-none")){
		
		divbeformy.style.top="72px"
		getSubMenu.style.top="100px"
		
	}
*/





divbeformy.addEventListener("mouseover",function(){
		//console.log("uu")
	if(getSubMenu.classList.contains("open")){
		
	getSubMenu.classList.remove("d-none")
divbeformy.classList.remove("d-none")	
		
		
	}


		})



divbeformy.addEventListener("mouseout",function(){
divbeformy.classList.add("d-none")	
getSubMenu.classList.add("d-none")		
	
})




}








})	

item.addEventListener("mouseout",function(){
	let getSubMenu=item.children[1];

if(getSubMenu!=undefined){
	
divbeformy.classList.add("d-none")	
getSubMenu.classList.add("d-none")		
	
}






	
})








window.addEventListener('resize', setProperties)

  function setProperties() {
  
   windowWidth = window.innerWidth
    getelementheightmy.forEach(function(items){
	  
	if(windowWidth<992){items.classList.remove("getelementheight")	}  
		if(windowWidth>992){items.classList.add("getelementheight")	}  
	
	     //console.log(windowWidth)
		 //console.log("b")
  })

	
    }
	
	

	
	
})






	 wWidth = window.innerWidth
	   getelementheightmy.forEach(function(items){
	  
	if(wWidth<992){items.classList.remove("getelementheight")	}  
		if(wWidth>993){items.classList.add("getelementheight")	}  
	
	     //console.log(wWidth)
  })
  
  

	/*
divbeformy.addEventListener("mouseout",function(){
	
divbeformy.classList.add("d-none")		
	
})
*/

divsearchmy.addEventListener("mouseover",function(item){
	
	
	divsearchmy.classList.remove("d-none")
	
})
divsearchmy.addEventListener("mouseout",function(item){
	
	
	divsearchmy.classList.add("d-none")
	
})




iconserchmy.addEventListener("click",function(){
		mynavmy.classList.add("openBoxSearch")
	 divsearchmy.classList.remove("d-none")

	
})

closeSearchmy.addEventListener("click",function(){
	
	mynavmy.classList.remove("openBoxSearch")
	divsearchmy.classList.add("d-none")	
})


var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
	
	
	
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     
})
//let a=window.width()
//console.log(a)

if ($(window).width() <768) {
 
   var swiper =new Swiper('.swiper', {
		
		     slidesPerView: 2,
		  spaceBetween: 20,
		
	})
 
 
 
 
 
}


 $(window).resize(function() {
  var width = $(window).width();
 // console.log(width)
   if ($(window).width() <= 768) { 
  
  
    var swiper =new Swiper('.swiper', {
		
		     slidesPerView: 2,
			  spaceBetween: 20,
		
	})
	
  
 }
 
    if ($(window).width() > 769) { 
	     var swiper =new Swiper('.swiper', {
		
		     slidesPerView: 3,
			  spaceBetween: 20,
		
	})
	
	
	}
 })


