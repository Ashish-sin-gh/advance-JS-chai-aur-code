const buttonStart = document.querySelector("#startBtn");
const buttonStop = document.querySelector("#stopBtn");

let setIntervalRef;

buttonStart.addEventListener(
  "click",
  (e) => {
    setIntervalRef = setInterval(() => {
      console.log("ashish", Math.random());
    }, 1000);
  },
  false
);

console.log(setIntervalRef);

buttonStop.addEventListener(
  "click",
  (e) => {
    clearInterval(setIntervalRef);
  },
  false
);
