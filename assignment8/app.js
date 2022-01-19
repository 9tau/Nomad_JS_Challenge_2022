const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date().getTime();
    const xmas = new Date("December 25, 22 00:00:00").getTime();
    const gap = xmas - date;

    const day = Math.floor((gap / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24 ))/(1000*60*60));
    const minutes = Math.floor((gap % (1000 * 60 * 60 ))/(1000*60));
    const seconds = Math.floor((gap % (1000*60))/1000);
    clock.innerText = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

getClock();
setInterval(getClock, 1000);