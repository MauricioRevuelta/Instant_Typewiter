document.addEventListener("DOMContentLoaded", function () {
    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const number = document.querySelector(".number");

    let a = 1;

    plus.addEventListener("click", () => {
        if(a<10) {
            a++;
            number.innerText = a;
            console.log(a);
        }
    });

    minus.addEventListener("click", () => {
        if(a>1) {
            a--;
            number.innerText = a;
            console.log(a);
        }
    });

    const plus2 = document.querySelector(".plus2");
    const minus2 = document.querySelector(".minus2");
    const number2 = document.querySelector(".number2");

    let b = 1;

    plus2.addEventListener("click", () => {
        if(b<10) {
            b++;
            number2.innerText = b;
            console.log(b);
        }
    });

    minus2.addEventListener("click", () => {
        if(b>1) {
            b--;
            number2.innerText = b;
            console.log(b);
        }
    });

    const plus3 = document.querySelector(".plus3");
    const minus3 = document.querySelector(".minus3");
    const number3 = document.querySelector(".number3");

    let c = 1;

    plus3.addEventListener("click", () => {
        if(c<10) {
            c++;
            number3.innerText = c;
            console.log(c);
        }
    });

    minus3.addEventListener("click", () => {
        if(c>1) {
            c--;
            number3.innerText = c;
            console.log(c);
        }
    });

    const plus4 = document.querySelector(".plus4");
    const minus4 = document.querySelector(".minus4");
    const number4 = document.querySelector(".number4");

    let d = 1;

    plus4.addEventListener("click", () => {
        if(d<10) {
            d++;
            number4.innerText = d;
            console.log(d);
        }
    });

    minus4.addEventListener("click", () => {
        if(d>1) {
            d--;
            number4.innerText = d;
            console.log(d);
        }
    });
});