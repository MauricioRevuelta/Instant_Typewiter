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

  initializeCounter(
    '.plus',
    '.minus',
    '.number',
    '.plus2',
    '.minus2',
    '.number2',
    '.plus3',
    '.minus3',
    '.number3',
    '.plus4',
    '.minus4',
    '.number4'
  );
});

let typing = new Typed('.typing', {
  strings: ['Instant Typewriter'],
  loop: !0,
  typeSpeed: 120,
  backSpeed: 80,
});

function showMessage() {
  // Display SweetAlert2 modal
  Swal.fire({
    title: 'Congratulation!',
    text: 'Your message has been sent!',
    icon: 'success',
    confirmButtonText: 'OK',
  });
}

document.getElementById('submit').addEventListener('click', showMessage);
