const body = document.querySelector("body");

function windowResizing() {

    let window_size = window.innerWidth; 

if (window_size < 500) {
    body.style.backgroundColor = "blue"
} else if (window_size <= 800 && window_size >=500) {
    body.style.backgroundColor = "purple"
} else  {
    body.style.backgroundColor = "orange"
} 
}

window.addEventListener("resize", windowResizing);