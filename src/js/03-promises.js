import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const btnPromise = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  const DELEY = 1000;
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay})
    } else {
    reject({position, delay})
    }
  }, DELEY);
  });
  
return promise;
}

btnPromise.addEventListener('click', evt =>{
  evt.preventDefault();
  
  let valueDelay  = Number(delay.value);
  let valueStep = Number(step.value);
  for (let position = 0; position <= amount.value; position +=1) {
    createPromise(position, valueDelay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  valueDelay += valueStep
 }
})



