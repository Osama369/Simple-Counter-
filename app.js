
// write logic here
// initially is will be zero
let count=0; // to compare the value of the spane

const val= document.querySelector("#value"); // for id # and class .
 // now select the button
 const btns= document.querySelectorAll(".btn");// select the buttons here

 // add eventlistner on the buttons
  
 btns.forEach(function (btn){
    btn.addEventListener('click' ,function(e){
      const style =e.currentTarget.classList;
      if (style.contains("decrease")) {
          count--; 
      }
      else if (style.contains("increase")) {
        count++;
      }else{
        count=0;
      }
      // change the color of the count value
      if (count>0) {
        val.style.color="green";
      }
      if (count<0) {
        val.style.color="red";
      }
      if (count==0) {
        val.style.color="black";
      }
      // set vlaue 
       val.textContent=count;
    });
 });
