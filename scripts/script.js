let arr = new Array();
let arrLenght;
let arrElement;
let check = true;

function arrLenghtFunction () {
    arrLenght = +prompt('Введіть довжину масиву');
}

function addArrayElements () {
    arrLenghtFunction ();
    if (typeof(arrLenght) === 'number' && !isNaN(arrLenght)) {
        for (let i = 0; i < arrLenght; i++) {
            while (check) {
                arrElement = +prompt(`Це Ваш масив: ${arr}\nВведіть елемент массиву №${i}`);
                if (typeof(arrElement) === 'number' && !isNaN(arrElement)) {
                    check = false;
                }
            }
            arr.push(arrElement);
            check = true;
        }
    } else {
        addArrayElements ();
    }
    alert('Bаш масив: ' + arr);
}

function deleteArrayElements () {
    if (arrLenght <= 2) {
        alert(`Нема елементів для видалення.\nДовжина масиву недостня для здійснення операціі.\nВаш масив: ${arr}`)
    } else {
        arr.splice(2, 2);
        alert(`Видалили елементи з масиву з 2 по 4 (включно!).\nВаш масив: ${arr}`);
    }
}

function operationsWithArray () {
    addArrayElements ();
    arr.sort((a, b) => a - b);
    alert(`Після сортування Ваш масив виглядае так: ${arr}`);
    deleteArrayElements();
}

operationsWithArray ();
