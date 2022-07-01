function Time() {

    //Date
    var date = new Date();
    var year = date.getFullYear();
    if(year < 1000) {
        year +=1900;
    }
    var day = date.getDay(); //day ex. monday
    var month = date.getMonth(); //month
    var dateofm = date.getDate(); //date of the month
    var dayArray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    
    if (h == 24){
        h = 0;
    } else if(h>12) {
        h = h-0;
    }
    
    if (h < 10){
        h = "0" + h;
    }
    if (m < 10){
        m = "0" + m;
    }
    if (s < 10){
        s = "0" + s;
    }

    var clock = document.getElementById("dispClock");
    clock.textContent = "" +dayArray[day]+ " " +dateofm+ " " +monthArray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
    clock.innerText = "" +dayArray[day]+ " " +dateofm+ " " +monthArray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;


    setTimeout("Time()",1000);
}
Time();