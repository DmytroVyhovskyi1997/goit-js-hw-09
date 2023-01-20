import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


    const startBtn = document.querySelector('button[data-start]');
    const dateChosen = document.querySelector('#datetime-picker');
    const dataDays = document.querySelector('[data-days]')
    const dataHours = document.querySelector('[data-hours]');
    const dataMinutes = document.querySelector('[data-minutes]');
    const dataSeconds = document.querySelector('[data-seconds]');


startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        startBtn.disabled = true;
      } else {
        startBtn.disabled = false;
      }
    },
  };

  startBtn.disabled = true;
  flatpickr(dateChosen, options);

  startBtn.addEventListener('click', startBtnclick)

function startBtnclick (){
    setInterval(()=>{
        const dataSave = new Date(dateChosen.value) - new Date();
        if(dataSave >= 0){
            let timeValue = convertMs(dataSave)
            dataDays.textContent = addLeadingZero(timeValue.days);
            dataHours.textContent = addLeadingZero(timeValue.hours);
            dataMinutes.textContent = addLeadingZero(timeValue.minutes);
            dataSeconds.textContent = addLeadingZero(timeValue.seconds);
            if (dataSave <= 1000) {
              clearInterval();
            }
        }

    })
}

function addLeadingZero(value){
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);

    const hours = Math.floor((ms % day) / hour);

    const minutes = Math.floor(((ms % day) % hour) / minute);

    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }