var x = document.getElementById("myAudio");
document.getElementById("myAudio").volume = 0.2; 
function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
}
function btn1() {
  document.getElementById("btn1").href = ".";
}