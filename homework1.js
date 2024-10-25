let obj = { //оголошення об'єкту через створення змінної obj з 3-ма властивостями
    name: "Mariia",
    age: 30,
    gender: "Female",
    
    getInfo: function() { /*оголошення методу getInfo як частини об'єкта obj. 
        використовується для виведення інформації про властивості об'єкта*/
        for (let property in this) { /*Змінна property буде приймати значення назв 3-х властивостей
            цикл for перебирає всі властивості об'єкта this, де this посилається на obj*/
            if (typeof this[property] !== 'function') { /*перевірка чи є властивість, яка в даний момент розглядається, функцією. 
                Якщо це не функція, код продовжить виконуватися*/

                console.log(property + ": " + this[property]); /*виводить назву властивості (property) та її значення (this[property]), 
                яке отримується через квадратні дужки. якщо property дорівнює "name", виведе name: Mariia.*/
            }
        }
    }
};

obj.getInfo(); 
/* Виведе:
name: Mariia
age: 30
gender: Female*/

obj.newProperty = "Нова властивість!"; // Додавання нової властивості

obj.getInfo();  //Виводить всі властивості, включаючи щойно додану.
/* Виведе:
 name: Mariia
 age: 30
 gender: Female
 newProperty: Нова властивість!*/
