console.log("WORkign?")
var clock = document.getElementById("clockID");

console.log(clock);

var date = new Date();
var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "Septemeber", "October", "Novemeber", "December"];
var days = ["Monday", "Tuesday", "Wensesay", "Thrusday", "Friday", "Saturday", "Sunday"];
var sufixes = ["st", "nd", "rd", "th"]


function GetFullMonth() {

}

date.getFullMonth = function () {
    for (var i = 0; i < months.length; i++) {
        if (i == this.getMonth()) {
            return months[i];
        }
    }
    return "invaild month"
}

date.getDayFormat = function () {
    for (var i = 0; i < months.length; i++) {
        if (i == this.getDay()) {
            return days[i - 1];
        }
    }

    return "invaild day"
}

date.getDaySuffix = function () {
    d = this.getDate()
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

clock.textContent = date.getDayFormat() + " " + date.getDate() + date.getDaySuffix() + "" + " " + date.getFullMonth() + " " + date.getFullYear() + " At: " + date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();