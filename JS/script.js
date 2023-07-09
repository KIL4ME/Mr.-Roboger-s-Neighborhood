window.addEventListener("load", function(){
function substituteDigits(number) {
    const numberString = number.toString();
    const substitutedString = "";
  
    for (const i = 0; i < numberString.length; i++) {
      const digit = numberString[i];
      const substitute = "";
  
      if (digit === "1") {
        substitute = "Beep!";
      } else if (digit === "2") {
        substitute = "Boop!";
      } else if (digit === "3") {
        substitute = "Won't you be my neighbor?";
      } else {
        substitute = digit;
      }
  
      substitutedString += substitute;
    }
  
    return substitutedString;
  }
  
  function substitute() {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
  
    const number = parseInt(numberInput.value);
  
    for (const i = 0; i <= number; i++) {
      const substitutedNumber = substituteDigits(i);
      const listItem = document.createElement("li");
      listItem.textContent = substitutedNumber;
      resultElement.appendChild(listItem);
    }
  }})