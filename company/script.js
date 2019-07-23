// burger menu
menu.onclick = function myFunction(){
    var x = document.getElementById("myTopnav");
    if(x.className ==="topnav"){
    x.className +=" responsive";
    }else{
        x.className = "topnav";
    }
}



/*
function aaa(){
    document.getElementById("characters_2").className =
    document.getElementById("characters_2").className.replace(/\bhide\b/,'');
}
setTimeout(aaa,10000);
*/

// scroll///
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1111) {
    document.getElementById("characters_2").className = "";
  } else {
      
    document.getElementById("characters_2").className = "hide";
  }
}

