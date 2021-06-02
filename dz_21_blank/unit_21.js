
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    let div = document.querySelector('.div-1');
    div.innerHTML += 'touch'
}
document.querySelector('.div-1').ontouchstart = t1;


// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let count2 = 0;
function t2() {
    let div = document.querySelector('.div-2');
    count2++
    div.innerHTML = count2
}
document.querySelector('.div-2').ontouchstart = t2;


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

let out3 = document.querySelector('.out-3');

function t3() {
    out3.innerHTML = this.innerHTML
}
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);



// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

let out4 = document.querySelector('.out-4');
let b4 = document.createElement('button');
document.querySelector('.out-4').before(b4);
b4.classList.add('button');

function t4() {
    document.querySelector('.div-4').addEventListener('touchstart', t41);
}
function t41() {
    out4.innerHTML += 'touch';
}

document.querySelector('.button').onclick = t4;

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').removeEventListener('touchstart', t41)
}
document.querySelector('.b-5').onclick = t5;


// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

let out6 = document.querySelector('.out-6');

document.querySelector('.div-4').addEventListener('touchend', t61)

function t61() {
    out6.innerHTML = 'touchend'
}



// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */


document.querySelector('.div-7').addEventListener('touchstart', t7)

function t7() {
    document.querySelector('.div-7').style.backgroundColor = "red";
}


// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

document.querySelector('.div-8').addEventListener("touchstart", t8)

function t8() {
    document.querySelector('.div-8').style.backgroundColor = a8[Math.floor(Math.random() * a8.length)];
}


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
function t9(event) {
    document.querySelector('.out-9').innerHTML = event.touches.length

}
document.querySelector('.div-9').ontouchstart = t9;



// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
w10 = document.querySelector('.div-10').offsetWidth;

function t10() {
    w10++;
    document.querySelector('.div-10').style.width = w10 + 'px';
}

document.querySelector('.div-10').ontouchmove = t10;

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
    console.log(event);
    let x1 = event.targetTouches[0].radiusX;
    let y1 = event.targetTouches[0].radiusY;
    document.querySelector('.out-11').innerHTML = x1 + '  ' + y1;
}
document.querySelector('.div-11').ontouchstart = t11;

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images
const next = document.querySelector('.next');

const prev = document.querySelector('.prev');
const reset = document.querySelector('.reset');

function nextFunction() {
    if (count + 1 < images.length) {
        count++
    } else {
        count = 0
    }
    for (i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img')
    }

    images[count].classList.add('active-img');
    document.querySelector('.img-12-max').src = images[count].src;
}
next.onclick = nextFunction;


function prevFunction() {
    if (count == 0) count = images.length;
    count--;

    for (i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img')
    }

    images[count].classList.add('active-img');
    document.querySelector('.img-12-max').src = images[count].src;
}
prev.onclick = prevFunction;


function resetFunction() {
    count = 0;
    for (i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img')
    }

    images[0].classList.add('active-img');
    document.querySelector('.img-12-max').src = images[count].src;
}
reset.onclick = resetFunction;