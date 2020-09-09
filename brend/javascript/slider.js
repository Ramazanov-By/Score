var sliderIndex = 1, 
    sliderTovarItem = document.getElementsByClassName("slider-tovar__item"),
    triangleLeft = document.querySelector(".triangle__left"),
    triangleRight = document.querySelector(".triangle__right");

showSlides(sliderIndex);

function showSlides(n){
      if(n>sliderTovarItem.length){
         sliderIndex = 1;   
      };
      if(n<1){
          sliderIndex =  sliderTovarItem.length;
      };
      for(var i=0; i<sliderTovarItem.length; i++){
            sliderTovarItem[i].style.display="none";
      };
      sliderTovarItem[sliderIndex -1].style.display="block";
};

function Plusslider(n){
      showSlides(sliderIndex+=n);
};

triangleLeft.addEventListener('click', function(){
     Plusslider(-1); 
});

triangleRight.addEventListener('click', function(){
     Plusslider(1); 
});