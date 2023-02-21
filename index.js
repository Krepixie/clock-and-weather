// clock 

const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function updateClock() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds().toLocaleString('pt-BR');
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const bodyEl = document.querySelector('body');

    if (hours !== bodyEl.dataset.hour) {
        bodyEl.dataset.hour = hours;
        if ((hours > 5 && hours !== 12 && ampm === "AM" ) || (hours < 4 && ampm === "PM")) {
            bodyEl.classList.add('morning')
            bodyEl.classList.remove('afternoon', 'night')
        } else if (hours > 3 && hours < 8 && ampm === "PM") {
            bodyEl.classList.add('afternoon')
            bodyEl.classList.remove('morning', 'night')
        } else if ((hours > 7 && ampm === "PM") || (hours < 6 && ampm === "AM") || (hours === 12 && ampm === "AM")) {
            bodyEl.classList.add('night')
            bodyEl.classList.remove('afternoon', 'morning')
        }
        
    }



    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hourEl.innerText = hours;
    minuteEl.innerText = minutes;
    secondEl.innerText = seconds;
    ampmEl.innerText = ampm;
}

updateClock();
setInterval(updateClock, 1000);



// weather **********************************************

// var latitude = ;
// var longitude = ;
// const api_key = '8c57925a532f7b10a29c934c87b87e6a'
// const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${api_key}&units=metric&lang=pt_br`

// type Weather = {

// }


// async function getWeatherData() {
//     try{const response = await fetch(url);
//     const data = await response.json();
    

//     }catch(err) {
//         console.error(err)
//     }
// }


// background ******************************
