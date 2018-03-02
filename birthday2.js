var button1 = document.getElementById("getMessage");
button1.addEventListener("click", displayBirthdayMessage);

function calculateAge(bday) {
    var today = new Date();
    var age = Math.floor((today.getTime() - Math.floor(bday.getTime())) / (1000 * 60 * 60 * 24 * 365));
    return age;
}

function daysUntilBDay(birthday) {
    var bDay = new Date(birthday);
    var today = new Date();
    var days = Math.floor((bDay.getTime() - today.getTime()) / 1000 / 60 / 60 / 24 / 24);
    return days;
}

function getSign(birthdate) {
    var month = birthdate.getMonth() + 1;
    var day = birthdate.getDate() + 1;
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "Capricorn,";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Aquarius,";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Pisces,";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Aries,";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Taurus,";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gemini,";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Cancer,";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Leo,";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Virgo,";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Libra,";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Scorpio,";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Sagittarius,";
    }
}

function checkFormat() {
    var input = document.getElementById("textbox").value;
    var date = new Date(input);
    var slash1 = input.substring(2, 3);
    var slash2 = input.substring(5, 6);
    if (isNaN(date) == false) {
        return true
    } else if (slash1 == "/" && slash2 == "/" && input.length == 10) {
        return true
    } else {
        return false
    }


}

function displayBirthdayMessage() {
    var input = document.getElementById("textbox").value;
    var date = new Date(input);
    var age = calculateAge(date);
    var sign = getSign(date);
    var number = daysUntilBDay(date);
    var errorMessage = "You have entered an invalid date. Please input a valid date in mm/dd/yyyy format!"
    var message = "You are " + age + " years old, your sign is " + sign + " and there are" + number + " days until your birthday!";
    if (checkFormat(date) == false) {
        document.getElementById("result").textContent = errorMessage;
    } else {
        document.getElementById("result").textContent = message;
    }
}
