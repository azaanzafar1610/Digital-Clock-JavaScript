


function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}


updateClock();


//updating clock everysecond

//setInterval REPEATEDLY executes a function aftr a delay 
//setTimeout executes a function only ONCE after a delay

setInterval(updateClock, 1000);