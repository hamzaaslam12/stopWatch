var hr = 0, min = 0, sec = 0, msec = 0, time;
var msecTime = document.getElementById("msec");
var secTime = document.getElementById("sec");
var minTime = document.getElementById("min")
var hrTime = document.getElementById("hr");

function timer() {
          msec++

          if (msec <= 100) {
                    msecTime.innerHTML = msec;
          }

          else if (msec > 100 && sec <= 60) {
                    sec++
                    secTime.innerHTML = sec;
                    msec = 0;
          }

          else if (sec > 60 && min <= 60) {
                    min++;
                    minTime.innerHTML = min;
                    sec = 0;
          }
          else if (min > 60 && hr <= 60) {
                    hr++;
                    hrTime.innerHTML = hr;
                    min = 0;
          }
}

function startTime() {
          var startbtn = document.getElementById("start");
          startbtn.style.display = 'disabled';
          startbtn.style.color = 'black';

          time = setInterval(timer, 10)

}

function pauseTime() {
          clearInterval(time)
}

function resetTime() {
          hr = 0, min = 0, sec = 0, msec = 0;

          hrTime.innerHTML = hr;
          minTime.innerHTML = min;
          secTime.innerHTML = sec;
          msecTime.innerHTML = msec;
          pauseTime();
}
