// usecase of

const blackBtn = document.getElementById("black");
const grayBtn = document.getElementById("gray");

function btnAction(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
    //closure function
  };
}

blackBtn.addEventListener("click", btnAction("black"));
grayBtn.addEventListener("click", btnAction("gray"));
