var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    }
];

// Регулярний вираз для перевірки email
var emailCheck = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Масив для зберігання довірених email
var trustedEmails = [];

for (var i = 0; i < arr.length; i++) {
    if (emailCheck.test(arr[i].email)) {
        trustedEmails}
    }
