
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая по событию keydown считывает содержимое event.key и добавляет в .out-1. Во всех последующих задачах - работаем с латиницей и цифрами. */

function t1(event) {
    out = document.querySelector('.out-1')
    out.innerHTML = event.key
    console.log(event);
    //console.log('key: ' + event.key);

}

document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая по событию onkeypress выводит в out-2 числовой код символа (event.keyCode). */

function t2(event) {
    out = document.querySelector('.out-2')
    out.innerHTML = event.keyCode
    // console.log(event);
}

document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте keyCode. */


function t3(event) {
    out = document.querySelector('.out-3')
    if (event.keyCode >= 47 && event.keyCode <= 59) {
        out.innerHTML = false
    } else {
        out.innerHTML = true
    }
}

document.querySelector('.i-3').onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out-4 получаем ab4ci. */

function t4() {
    out = document.querySelector('.out-4')
    inp = document.querySelector('.i-4').value;
    out.innerHTML = inp.toLowerCase()
}

document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
    out = document.querySelector('.out-5')
    inp = document.querySelector('.i-5').value;
    out.innerHTML = inp.toUpperCase()
}

document.querySelector('.i-5').onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая позволяет вводить в i-6 только символы в нижнем регистре. Т.е. мы до функции создаем строку. Внутри функции проверяем код символа. Если символ - в нижнем регистре - добавляем в строку. Потом принудительно присваиваем строку в value input i-6. Чтобы блокировать стандартный вывод в input в конце функции пишем return false;  */
let div = ''
function t6(event) {
    if (event.key === event.key.toLowerCase()) {
        div += event.key
        document.querySelector('.i-6').value = div
    }
    return false;
}

document.querySelector('.i-6').onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

const a7 = ['a', 'z', 'x', 'w', 'y', 't'];

function t7() {
    out = document.querySelector('.out-7');
    rand = Math.floor(Math.random() * a7.length);
    out.innerHTML = a7[rand]
}

document.querySelector('.i-7').onkeydown = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая дописывает в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

const a8 = {
    i: 1,
    o: 0,
    l: 7
}

function t8(event) {
    let out = document.querySelector('.out-8');
    a8[event.key] !== undefined ? out.innerHTML = a8[event.key] : out.innerHTML = event.key;

    // 1. Получаем из event введенный символ
    // 2. Проверяем наличие такого ключа в a8 - уже делали это раньше!!!!
    // 3. Если есть дописываем в out-8 символ из массива a8. Если нет - введенный символ.
}

document.querySelector('.i-8').onkeydown = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество (число) нажатых клавиш стрелка вниз. */
let count = 0;
function t9(event) {
    out = document.querySelector('.out-9');
    if (event.key === "ArrowDown")
        count++
    out.innerHTML = count
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и блок .block-10. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину блока. Клавиши стрелка вверх и вниз - увеличивать высоту блока. Одно нажатие клавиши - 1px. */

let h = 75;
let w = 75;

function t10(event) {

    if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
        document.querySelector('.block-10').style.width = w + 'px';
        w++;
    } else if (event.key == "ArrowUp" || event.key == "ArrowDown") {
        document.querySelector('.block-10').style.height = h + 'px';
        h++;
    }

    // увеличиваем  h, w, потом присваиваем как свойства...
    console.log(event);
}

document.querySelector('.i-10').onkeydown = t10;




// Task 11 ============================================
/*  Проект. 
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/
const keyboard = document.querySelectorAll('.keyboard')
let keys1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter', 'ctrl', 'alt',]


function t11(event) {
    // const allButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "w", "e", "r", "enter", "space", "ctrl", "alt", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Backspace",];
    // for (let item of allButtons) {
    //     let b = document.createElement("div");
    //     b.classList.add("keyboard");
    //     b.setAttribute("data", item);
    //     b.innerHTML = item;
    //     document.querySelector(".out-11").append(b);
    // }
    //     if (event.key === [a-z] &&  event.key === event.key.toLowerCase()) {
    //         inp.classList.add('active')
    //     }
    // }
    let key = event.key
    for (i = 0; i < keyboard.length; i++) {
        keyboard[i].classList.remove('active')
    }
    // for (item of keyboard) {
    //     item.classList.remove('active')
    // }


    if (key === ' ') {
        key = 'space'
    }
    if (key === "Alt") {
        key = 'alt'
    }
    if (key === "Control") {
        key = 'ctrl'
    }
    if (key === "Enter") {
        key = 'enter'
    }
    if (key === "Backspace") {
        key = 'backspace'
    }

    let btn = document.querySelector('.keyboard[data = "' + key + '"]');
    btn.classList.add('active');

    console.log(event.key)
    console.log(event.keyCode);
}
document.querySelector('.i-11').onkeydown = t11;

