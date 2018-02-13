 this.getSign = function () {
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
