$(document).ready(function(){
   var delay=1500, setTimeoutConst;
   $('#intro_button').hover(function(){
        setTimeoutConst = setTimeout(function(){
            /* Do Some Stuff*/
           window.location.replace("../html/main.html")
        }, delay);
   },function(){
        clearTimeout(setTimeoutConst );
   })
})