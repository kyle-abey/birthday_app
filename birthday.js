var button1 = document.getElementById("giveAge");
button1.addEventListener("click", () => {
    document.getElementById("output").textContent = displayAge();

});


function displayAge() {
    var input = document.getElementById("textbox").value;
    var bday = new Date(input);
    var today = new Date();
    var age = Math.floor((today.getTime() - Math.floor(bday.getTime())) / (1000 * 60 * 60 * 24 * 365));
    return "You are " + age + " years old.";
}


if ( isNaN(d.getTime())) {

}





function daysUntilBDay(birthday) {
    var bDay = new Date(birthday);
    var today = new Date();
    var days = Math.floor((bDay.getTime() - today.getTime()) / 1000 / 60 / 60 / 24 / 24);
    return days;
}



var button2 = document.getElementById("button2");
button1.addEventListener("click", () => {
    document.getElementById("submit2").textContent = displaySign();

});


function displaySign() {
    var input = document.getElementById("textbox").value;
    var month = this.birthdate.getMonth() + 1;
    var day = this.birthdate.getDate() + 1;
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "Your sign is Capricorn";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Your sign is Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Your sign is Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Your sign is Aries";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Your sign is Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Your sign is Gemini";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Your sign is Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Your sign is Leo";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Your sign is Virgo";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Your sign is Libra";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Your sign is Scorpio";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Your sign is Sagittarius";
    }
}
