var i = 0;
var txt = "thewhiteh4t's blog";
var speed = 80;
var visible = true;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typetext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.setInterval(function() {
  if (visible === true) {
    document.getElementById('console').className = 'block-cursor white-text text-glow hidden'
    visible = false;
  } else {
    document.getElementById('console').className = 'block-cursor white-text text-glow'
    visible = true;
  }
}, 400)

window.onload = setTimeout(function() { typeWriter(); }, 0);