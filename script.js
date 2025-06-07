const text = "Web Developer|Animal Lover|Sience Enthusiast";
const speed = 100;
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;