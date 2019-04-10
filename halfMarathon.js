var halfDeadline = new Date("May 19, 2019 06:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var t = halfDeadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("dayTillHalf").innerHTML = days;
    document.getElementById("hourTillHalf").innerHTML = hours;
    document.getElementById("minuteTillHalf").innerHTML = minutes;
    document.getElementById("secondTillHalf").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demoTillHalf").innerHTML = "GOOD LUCK!";
        document.getElementById("dayTillHalf").innerHTML = "0";
        document.getElementById("hourTillHalf").innerHTML = "0";
        document.getElementById("minuteTillHalf").innerHTML = "0";
        document.getElementById("secondTillHalf").innerHTML = "0";
    }
}, 1000);
