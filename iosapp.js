const oneBtn = document.getElementById("calc-one");
const twoBtn = document.getElementById("calc-two");
const threeBtn = document.getElementById("calc-three");
const fourBtn = document.getElementById("calc-four");
const fiveBtn = document.getElementById("calc-five");
const sixBtn = document.getElementById("calc-six");
const sevenBtn = document.getElementById("calc-seven");
const eightBtn = document.getElementById("calc-eight");
const nineBtn = document.getElementById("calc-nine");
const zeroBtn = document.getElementById("calc-zero");

const noktaBtn = document.getElementById("calc-nokta");
const ACBtn = document.getElementById("calc-ac");
const backspaceBtn = document.getElementById("calc-bs");
const yuzdeBtn = document.getElementById("calc-yuzde");
const displayValElement = document.getElementById("calc-goruntu");

let displayVal = "0";
let pendingVal;
let evalStringArray = [];

const calcNumBtns = document.getElementsByClassName("btn-Rakam");

const calcoperatorBtns = document.getElementsByClassName("btn-opr");

const updateDisplayVal = (clickObj) => {
  const btnText = clickObj.target.innerText;

  if (displayVal === "0") {
    displayVal = "";
  }

  displayVal += btnText;
  displayValElement.innerText = displayVal;
  console.log(btnText);
};

let performOperation = (clickObj) => {
  const operator = clickObj.target.innerText;

  switch (operator) {
    case "+":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerHTML = operator;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;

    case "-":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerHTML = operator;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;

    case "x":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerHTML = operator;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;

    case "÷":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerHTML = operator;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;

    case "%":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerHTML = operator;
      evalStringArray.push(pendingVal);
      evalStringArray.push("%");

      break;

    case "=":
      evalStringArray.push(displayVal);
      let evalutaion = eval(evalStringArray.join(""));
      displayVal = evalutaion + "";
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      break;

    default:
      break;
  }
};

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}
for (let i = 0; i < calcoperatorBtns.length; i++) {
  calcoperatorBtns[i].addEventListener("click", performOperation, false);
}

ACBtn.onclick = () => {
  displayVal = "0";
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
};
backspaceBtn.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
  if (displayVal === "") displayVal = "0";

  displayValElement.innerHTML = displayVal;
};

noktaBtn.onclick = () => {
  if (!displayVal.includes(".")) displayVal += ".";
  displayValElement.innerHTML = displayVal;
};
