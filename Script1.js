let timer;
let isRunning = false;
let startTime;
let lapCounter = 1;

function startStop() {
    if (isRunning) {
        stopTimer();
        document.getElementById("startStopBtn").innerText = "Start";
    } else {
        startTimer();
        document.getElementById("startStopBtn").innerText = "Stop";
    }
}

function startTimer() {
    isRunning = true;
    startTime = new Date() - (lapCounter > 1 ? localStorage.getItem("pauseTime") : 0);
    timer = setInterval(updateDisplay, 1000);
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
    localStorage.setItem("pauseTime", new Date() - startTime);
}

function reset() {
    stopTimer();
    document.getElementById("display").innerText = "00:00:00";
    lapCounter = 1;
    document.getElementById("laps").innerHTML = "";
    localStorage.removeItem("pauseTime");
}

function lap() {
    if (isRunning) {
        const lapTime = calculateTime(new Date() - startTime);
        const lapItem = document.createElement("li");
        lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
        lapCounter++;
    }
}

function updateDisplay() {
    const currentTime = new Date() - startTime;
    document.getElementById("display").innerText = calculateTime(currentTime);
}

function calculateTime(time) {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));

    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

// Check if there was an active timer on page reload
window.onload = function () {
    if (localStorage.getItem("pauseTime") !== null) {
        startTimer();
        document.getElementById("startStopBtn").innerText = "Stop";
    }
};
