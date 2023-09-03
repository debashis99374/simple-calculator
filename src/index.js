import "./styles.css";

var userInput = "";
var buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      userInput = eval(userInput);
      document.querySelector(".inputt").value = userInput;
    }
    if (e.target.innerHTML == "AC") {
      userInput = "";
      document.querySelector(".inputt").value = userInput;
    } else {
      userInput = userInput + e.target.innerHTML;
      document.querySelector(".inputt").value = userInput;
    }
  });
});
