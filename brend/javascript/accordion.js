var sidebarItemHead = document.getElementsByClassName("sidebar-item__head");
var sidebarlist = document.getElementsByClassName("sidebar-list__list");
var w = window.innerWidth;
for(var i=0; i<sidebarItemHead.length; i++){
   sidebarItemHead[i].addEventListener('click', function(){
      if(!(this.nextElementSibling== null)){
            this.nextElementSibling.classList.toggle("sidebar-list__list-active");
            this.classList.toggle("sidebar-item__head-activ");  
            }
   })
}




