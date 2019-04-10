var fullDeadline = new Date("Jun 02, 2019 06:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var t = fullDeadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("dayTillRevel").innerHTML = days;
    document.getElementById("hourTillRevel").innerHTML = hours;
    document.getElementById("minuteTillRevel").innerHTML = minutes;
    document.getElementById("secondTillRevel").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demoTillRevel").innerHTML = "GOOD LUCK!";
        document.getElementById("dayTillRevel").innerHTML = "0";
        document.getElementById("hourTillRevel").innerHTML = "0";
        document.getElementById("minuteTillRevel").innerHTML = "0";
        document.getElementById("secondTillRevel").innerHTML = "0";
    }
}, 1000);
