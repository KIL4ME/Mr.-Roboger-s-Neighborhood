function substituteDigits(number) {
    const numberString = number.toString();
    let substitutedString = "";
  
    if (numberString.includes("3")) {
      substitutedString = "Won't you be my neighbor?";
    } else if (numberString.includes("2")) {
      substitutedString = "Boop!";
    } else if (numberString.includes("1")) {
      substitutedString = "Beep!";
    } else {
      substitutedString = numberString;
    }
  
    return substitutedString;
  }
  
  function substitute() {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
  
    const number = parseInt(numberInput.value);
  
    for (let i = 0; i <= number; i++) {
      const substitutedNumber = substituteDigits(i);
      const listItem = document.createElement("li");
      listItem.textContent = substitutedNumber;
      resultElement.appendChild(listItem);
      
    }
  }

window.addEventListener("load",function(){

  const form = document.getElementById("confirm")
  form.addEventListener("submit",function(event){
    event.preventDefault();
    substitute();
  })

})
