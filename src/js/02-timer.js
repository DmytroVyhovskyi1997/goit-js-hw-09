import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
     startBtn : document.querySelector('button[data-start]'),
     dateChosen : document.querySelector('#datetime-picker'),
     dataDays : document.querySelector('[data-days]'),
     dataHours : document.querySelector('[data-hours]'),
     dataMinutes : document.querySelector('[data-minutes]'),
     dataSeconds : document.querySelector('[data-seconds]'),
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
        window.alert('Please choose a date in the future');
        startBtn.disabled = true;
      } else {
        startBtn.disabled = false;
      }
    },
  };
  flatpickr(refs.dateChosen, options);

refs.startBtn.addEventListener('click', () => {
    let timer = setInterval(() =>{
        let dateValue = new Date(refs.dateChosen.value) - new Date();
        startBtn.disabled = true;
        if(dateValue >= 0){

        }

    }, 1000);
});



function pad(value){
    return String(value).padStart(2, '0');
}



function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = pad(Math.floor(ms / day));

    const hours = pad(Math.floor((ms % day) / hour));

    const minutes = pad(Math.floor(((ms % day) % hour) / minute));

    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }