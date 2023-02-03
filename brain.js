var x = 0;
//randomize();
function randomize(){
    (x) = (Math.random() * 6) + 1;
}
//button.addEventListener()

const button = document.getElementById("myButton");
const numberDisplay = document.getElementById("numberDisplay");

let count = 0;
button.addEventListener("click", function() {
  count += 1;
  numberDisplay.innerHTML = count;
});
    
