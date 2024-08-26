const numberHours = document.querySelector('.number-hours')
const barSeconds = document.querySelector('.bar-seconds')

const numberElement = [];
const barElement = [];

//create number hours
for(let i = 1; i <= 12; i++){
numberElement.push(
`<span style="--index: ${i};"><p>${i}</p></span>`
);
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""))

//create bar seconds 
for (let i = 1; i <= 60; i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
        );
}
barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.o.o-hours')
const handMinutes = document.querySelector('.o.o-minutes')
const handSeconds = document.querySelector('.o.o-seconds')

function getCurrentTime() {
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

//-------------------------------------------------------------------
//   60 seconds = 360deg so 1 sec = 360 / 60 = 6deg
//   60 minutes = 360deg so 1 min = 360 / 60 = 6deg
//   60 hours = 360deg so 1 hrs = 360 / 12 = 30deg

// 1 hrs = 360deg that means 60min = 360deg so 1 min = 30 / 60 = 0.5 or 1/2 deg

// so formula for hours is (hours * 30 + minutes / 2)
// ------------------------------------------------------------------

handHours.style.transform = `rotate(${(currentHours * 30 + currentMinutes / 2)}deg)`;
handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;

}

// call getCurrent:time function on page load
getCurrentTime()

//call getCurrentTime to set clock hands every seconds
setInterval(getCurrentTime, 1000); //1000ms = 1s