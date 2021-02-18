let menu = document.querySelector('.menu'),
    title = document.getElementById('title').innerHTML = "Мы продаем только подлинную технику Apple",
    adv = document.querySelectorAll('div > div')[1],
    pmt = document.getElementById('prompt'),
    column = document.querySelectorAll('.column')[1];


console.log(menu);
console.log(title);
console.log(adv);
console.log(prompt);
console.log(column);

//Поменял фон
document.body.style.background = 'url(../img/apple_true.jpg)';

//Удалил рекламу
column.removeChild(adv);

//Добавил кнопку "Пятый пункт"
let li = document.createElement('li');
    li.classList.add('menu-item');
    li.innerHTML = 'Пятый пункт';
    menu.appendChild(li);

console.log(li);

//воостановил порядок в меню
let liThree = document.getElementsByClassName('menu-item')[1].innerHTML = " Второй пункт ";
    liTwo = document.getElementsByClassName('menu-item')[2].innerHTML = " Третий пункт ";

console.log(liThree);
console.log(liTwo);

//Разместил ответ пользователя в окно промпт
pmt.innerHTML = prompt('Как вы относитесть к технике Apple?');