function displayTime(){
const utcTimeDisplayer = document.querySelector(".utc-time-displayer")

const now = new Date();
const hours = now.getUTCHours().toString().padStart(2, '0');
const minutes = now.getUTCMinutes().toString().padStart(2, '0');
const seconds = now.getUTCSeconds().toString().padStart(2, '0');

const timeUTC = `${hours}:${minutes}:${seconds}`;
utcTimeDisplayer.textContent = timeUTC;

}

setInterval( displayTime , 1000)



const dayDisplayer = document.querySelector(".day-displayer");

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date  = new Date();
const day = daysOfWeek[date.getDay()];
dayDisplayer.textContent = day ;

