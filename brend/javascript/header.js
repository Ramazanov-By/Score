var header__li = document.getElementsByClassName("header__nav-item");
for(var i=0; i<header__li.length; i++){
   header__li[i].addEventListener('mouseenter', showSub);
   header__li[i].addEventListener('mouseleave', hideSub);   
}

function showSub(){
      if(this.children.length>1){
            this.children[1].style.opacity="1";
            this.children[1].style.visibility="visible";
      }
}

function hideSub(){
      if(this.children.length>1){
            this.children[1].style.opacity="0";
            this.children[1].style.visibility="hidden";
      }
}