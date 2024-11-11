var words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];
var regex = /^[^aA]{6,}$/;

words.forEach(word => {
    if (regex.test(word)) {
        console.log(word + " — підходить");
    } else {
        console.log(word + " — не підходить");
    }
});
