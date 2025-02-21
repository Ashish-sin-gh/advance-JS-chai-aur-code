const updateKey = document.querySelector("h1");

window.addEventListener("keypress", (e) => {
  console.log(e.key);
  updateKey.innerHTML = e.key;

  setTimeout(() => {
    updateKey.innerHTML = "press any key and watch what key is pressed here";
  }, 1000);
});
