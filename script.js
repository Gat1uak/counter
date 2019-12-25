console.log("Connection made!!");

let counter = document.querySelector('.counter');
const addCont = document.getElementById('addCounterBtn');
const lowerCont = document.getElementById('lowerCounterBtn');

let count = 0;

addCont.addEventListener('click', incrementCounter);
lowerCont.addEventListener('click', decrementCounter);

function incrementCounter() {
   count++;
   counter.innerHTML = count;
   if (counter.innerHTML > '0') {
      counter.style.color = 'green';
   } else if(counter.innerHTML === '0'){
      counter.style.color = 'white';
   }
   counter.animate([{
      opacity: '0.2'
   }, {
      opacity: '1.0'
   }], {
      duration: 1000,
      fill: 'forwards'
   });
}
function decrementCounter() {
   count--;
   counter.innerHTML = count;
   if (counter.innerHTML < '0') {
      counter.style.color = 'red';
   } else if (counter.innerHTML === '0') {
      counter.style.color = 'white';
   }

   counter.animate([{
      opacity: '0.2'
   }, {
      opacity: '1.0'
   }], {
      duration: 1000,
      fill: 'forwards'
   });
}
