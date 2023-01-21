import Notiflix from 'notiflix';

const form = document.querySelector('.form');


function createPromise(position, delay) {
  const obj = { position, delay };
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    if (shouldResolve) {
      resolve(obj)
    } else {
    reject(obj)
    }
  }, delay);
  });
 
}

form.addEventListener('submit', promiseSubmit );


  function promiseSubmit(evt){
    evt.preventDefault();
    
    let delay = Number(form.delay.value);
    for (let position = 1; position <= form.amount.value; position +=1) {
      createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += Number(form.step.value);
   }
  }
  
  

  



 



