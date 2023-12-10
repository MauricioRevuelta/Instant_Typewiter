document.addEventListener('DOMContentLoaded', function () {
  
  // function for the quantity of typewriter that will be order
    function initializeCounter(plusSelector, minusSelector, numberSelector) {
      const plus = document.querySelector(plusSelector);
      const minus = document.querySelector(minusSelector);
      const number = document.querySelector(numberSelector);
  
      let count = 1;
  
      plus.addEventListener('click', () => {
        if (count < 10) {
          count++;
          number.innerText = count;
          console.log(count);
        }
      });
  
      minus.addEventListener('click', () => {
        if (count > 1) {
          count--;
          number.innerText = count;
          console.log(count);
        }
      });
    }
  
    initializeCounter('.plus', '.minus', '.number');
    initializeCounter('.plus2', '.minus2', '.number2');
    initializeCounter('.plus3', '.minus3', '.number3');
    initializeCounter('.plus4', '.minus4', '.number4');
  });
  
  // Animation for the website title
  let typing = new Typed('.typing', {
    strings: ['Instant Typewriter'],
    loop: !0,
    typeSpeed: 120,
    backSpeed: 80,
  });
  