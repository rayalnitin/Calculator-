let display = document.querySelector("#inscr");
let btns = document.querySelectorAll(".op");
const calculate = (value) => {
  if (value.indexOf("^") >= 0) {
    let ans = value.replace("^", ",");
    ans = "Math.pow(" + ans + ")";
    return eval(ans);
  }
  return eval(value);
};
btns.forEach((n) => {
  n.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "AC":
        display.value = "";
        break;
      case "=":
        try {
          display.value = calculate(display.value);
        } catch {
          display.value = "Error";
        }
        break;
      case "DEL":
        if (display.value) {
          display.value = display.value.slice(0, -1);
        }
        break;
      default:
        display.value += e.target.value;
    }
  });
});
