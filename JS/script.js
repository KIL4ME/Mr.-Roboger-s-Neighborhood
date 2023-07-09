function substituteDigits(number) {
    const numberString = number.toString();
    const substitutedString = "";
  
    for (const i = 0; i < numberString.length; i++) {
      const digit = numberString[i];
      const substitute = "";
  
      if (digit === "3") {
        substitute = "Won't you be my neighbor?";
      } else if (digit === "2") {
        substitute = "Boop!";
      } else if (digit === "1") {
        substitute = "Beep!";
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
    resultElement.innerHTML = ""; // Clear previous results
  
    const number = parseInt(numberInput.value);
    const resultList = [];
  
    for (const i = 0; i <= number; i++) {
      const substitutedNumber = substituteDigits(i);
      resultList.push(substitutedNumber);
    }
  
    displayResult(resultList);
  }
  
  function displayResult(resultList) {
    const resultElement = document.getElementById("result");
  
    resultList.forEach(function(item) {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      resultElement.appendChild(listItem);
    });
  }
  