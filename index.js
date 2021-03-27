function showTime(){ //declaring variables
    var date = new Date();
    var hours = date.getHours(); // 0 - 23
    var min = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var med = "PM";
    
    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        med = "AM";
    }
    
    hours = (hours < 10) ? "0" + hours : hours;
    min = (min < 10) ? "0" + min : min;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var time = hours + ":" + min + ":" + seconds + " " + med;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();