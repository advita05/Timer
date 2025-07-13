let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let timer;
let totalSeconds = 0;

function updateDisplay() {
  let hrs = Math.floor(totalSeconds / 3600);
  let mins = Math.floor((totalSeconds % 3600) / 60);
  let secs = totalSeconds % 60;

  hours.innerHTML = hrs < 10 ? "0" + hrs : hrs;
  minutes.innerHTML = mins < 10 ? "0" + mins : mins;
  seconds.innerHTML = secs < 10 ? "0" + secs : secs;
}

startBtn.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(() => {
      totalSeconds++;
      updateDisplay();
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  totalSeconds = 0;
  updateDisplay();
});

updateDisplay();
