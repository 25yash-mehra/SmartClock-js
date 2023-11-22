var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = new Date();
var date = weekday[day.getDay()];
document.getElementById("daynumber").innerHTML = date;

var h = new Date();
var h2 = h.getHours();
document.getElementById("hour").innerHTML = h2;

var m = new Date();
var m2 = m.getMinutes();
document.getElementById("minute").innerHTML = m2;

var ampm = "AM";
if (hour >= 12) {
    ampm = "PM";
}
document.getElementById("ampm").innerHTML = ampm;