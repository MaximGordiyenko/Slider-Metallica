//1. изображение меняется каждые 5 секунд setInterval
//2. при нажатии стрелок переключения вправо лево
let images = document.querySelectorAll(".slider-content > img");
let current = 0;
images[current].style.display = `block`;

function slideImg() {
    setInterval(function () {
        //Спрятать предедущий елемент после того как появится следующий
        images[current].style.display = `none`;
        //Счетчик, current=1 потом 1+1, 2+1, images.length = 8
        current = (current + 1) % images.length;
        //Отобразить даный елемент и спрятать предедущий елемент
        images[current].style.display = `block`;
    }, 3000);
}

slideImg();

window.onkeydown = function (e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 37:
            images[current].style.display = `none`;
            //если текущий индекс (первый елемент масива или колекции) равен 0, затем показать последнее изображение в масиве в позиции images.length - 1, в противном случае показать изображение с предедущим индексом (если не равен нолю просто сделать шаг назад)
            current = current === 0 ? (images.length - 1) : current - 1;
            images[current].style.display = `block`;
            break;

        case  39:
            //Спрятать предедущий елемент после того как появится следующий
            images[current].style.display = `none`;
            //Счетчик, current=1 потом 1+1, 2+1, images.length = 8
/* Вариант 2
            current = (current + 1) % images.length;
*/
            current = current + 1 === images.length ? 0 : current + 1;
            //Отобразить даный елемент и спрятать предедущий елемент
            images[current].style.display = `block`;
            break;
        default:
            break;
    }
};