let displayValue = '0';

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

document.querySelectorAll('.buttons').forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.dataset.value;
    if (buttonValue === 'C') {
      clearDisplay();
    } else if (buttonValue === '=') {
      calculateResult();
    } else {
      appendToDisplay(buttonValue);
    }
  });
});

