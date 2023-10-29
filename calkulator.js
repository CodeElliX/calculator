let display = document.querySelector(".display");
let buttons = document.querySelector(".buttons");
let isEqualPressed = false; 
let isFirstInput = true;

buttons.addEventListener("click", (event) => {

  const value = event.target.innerText;
  if (isEqualPressed) {
    display.innerText = ""; // Очистка поля после нажатия "="
    isEqualPressed = false; // Сброс флага
  }


  switch (value) {
    case "AC" :
      display.innerText = "";
      isFirstInput = true; // Сброс флага после очистки
      break;
    
      case "C" :
        display.innerText = display.innerText.slice(0, -1)
      break;
     
    case "sin":
      sin();
      break;

      case "cos":
      cos();
      break;

      case "tan":
      tan();
      break;

      case "x²":
      pow();
      break;

      case "√":
      sqrt();
      break;

      case "=":
      if (display.innerText.search(/[^0-9/*+-.]/mi) !== -1) return;
      display.innerText = eval(display.innerText);
      isEqualPressed = true;
      isFirstInput = true;
      break;

  //   default:
  //  display.innerText += value;
  default:
      if (isFirstInput) {
        display.innerText = value;
        isFirstInput = false; // Сброс флага после первого ввода
      } else {
        display.innerText += value;
      }
  }

})



const sin = () => {
  display.innerText = Math.sin(display.innerText);
}

const cos = () => {
  display.innerText = Math.cos(display.innerText);
}

const tan = () => {
  display.innerText = Math.tan(display.innerText);
}

const pow = () => {
  display.innerText = Math.pow(display.innerText, 2);
}

const sqrt = () => {
  display.innerText = Math.sqrt(display.innerText, 2);
}



