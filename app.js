
   
   document.addEventListener("DOMContentLoaded", function() {
  
      
    let  screen = document.querySelector(".screen"),
        buttons = document.querySelectorAll(".btn"),
        clear = document.querySelector(".btn-clear"),
        equal = document.querySelector(".btn-equals")
       
  
   // Number and operator buttons
   buttons.forEach(function (button) {
      button.addEventListener('click', function(e) {

        let value = e.target.dataset.num
        screen.value += value      
      })
   })
   
   // Equals Button
   equal.addEventListener('click', function(e) {
    
      let localScreen = document.querySelector(".screen")
      
      if(localScreen.value == ''){
        screen.value = ''
      }else{
        let answer = eval(localScreen.value)
        screen.value = answer
      }
   })
   
   //Clear Button
   clear.addEventListener('click', function(e){
        screen.value = ''
   })
   
   function clearScreen (){
    document.querySelector(".screen").value = ''
   }
   
   clearScreen()
});
   
   