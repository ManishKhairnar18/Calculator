let buttons = document.querySelectorAll(".btns");
let display = document.getElementById("display");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if(button.textContent==="AC"){
             display.value = "";
        }

        else if(button.textContent === "DEL"){
            
           display.value = display.value.slice(0, -1);

        }

     
      else if(button.textContent === "="){
          try {

               if(display.value!==""){
                display.value = eval(display.value);

           }  
               
             }   catch (error) {
                 display.value = "Syntax Error!";
             }
         
     }
      

      else {

          display.value += button.textContent;

      }
     

    });

});






