document.addEventListener('DOMContentLoaded', function () {
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
  
  let typing = new Typed('.typing', {
    strings: ['Instant Typewriter'],
    loop: !0,
    typeSpeed: 120,
    backSpeed: 80,
  });
  
  AOS.init(),
    scrollButton &&
      (window.addEventListener('scroll', () => {
        pageYOffset > 1.2 * window.innerHeight
          ? (scrollButton.style.display = 'flex')
          : (scrollButton.style.display = 'none');
      }),
      scrollButton.addEventListener('click', () => {
        window.scrollTo(0, 0);
      })),
    hamburgerMenu.addEventListener('click', () => {
      navContent.classList.add('show'), (document.body.style.overflow = 'hidden');
    }),
    closeNavButton.addEventListener('click', () => {
      navContent.classList.remove('show'),
        (document.body.style.overflow = 'initial');
    }),
    navLinks.forEach((e) => {
      e.addEventListener('click', () => {
        navContent.classList.remove('show'),
          (document.body.style.overflow = 'initial');
      });
    });
  