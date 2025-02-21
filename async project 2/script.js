const colorValue = function () {
  const value = `rgb(${Math.floor(Math.random() * 255)},
  ${Math.floor(Math.random() * 255)},
  ${Math.floor(Math.random() * 255)})`;
  return value;
};

console.log(colorValue());

let setIntervalRef;

if (!setIntervalRef) {
  document.getElementById("btnStart").addEventListener("click", () => {
    setIntervalRef = setInterval(() => {
      document.body.style.backgroundColor = colorValue();
    }, 100);
  });
}

document.getElementById("btnStop").addEventListener("click", () => {
  clearInterval(setIntervalRef);
  document.body.style.backgroundColor = "white";
  // setIntervalRef = null;
  console.log(setIntervalRef);
});
