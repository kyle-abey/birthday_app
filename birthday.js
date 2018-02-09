var button = document.getElementById('displayAge');
function displayAge(){
    var input = document.getElementById('inputBday');
    var bday = input.getDate();
    this.age = function () {
        var today = new Date();
        var time = (today.getTime() - this.birthdate.getTime());
        var age = Math.floor((today.getTime() - Math.floor(this.birthdate.getTime())) / (1000 * 60 * 60 * 24 * 365));
        return "You are " age " years old."

button.addEventListener('click', displayAge);
