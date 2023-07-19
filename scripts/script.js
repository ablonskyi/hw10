let arr = new Array();
let arrLenght;

function arrLenghtFunction () {
    arrLenght = +prompt('Введіть довжину масиву');
}

function addArrayElements () {
    arrLenghtFunction ();
    if (typeof(arrLenght) === 'number' && !isNaN(arrLenght)) {
        for (let i = 0; i < arrLenght; i++) {
            let arrElement = prompt(`Це Ваш масив: ${arr}\nВведіть елемент массиву №${i}`);
            arr.push(arrElement);
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
    deleteArrayElements();
}

operationsWithArray ();
