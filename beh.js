// --- Calculator ---
const calcInput = document.getElementById('calc-input');

// Add button click handlers
document.querySelectorAll('.calc-grid button').forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.innerText;
    
    if (value === '=') {
      calculate();
    } else {
      calcInput.value += value;
    }
  });
});

// Calculate function
function calculate() {
  try {
    // Replace ^ with ** for exponentiation
    let expression = calcInput.value.replace(/\^/g, '**');
    
    // Evaluate the expression
    const result = eval(expression);
    
    // Display the result
    calcInput.value = result;
  } catch (error) {
    calcInput.value = 'Error';
    setTimeout(() => {
      calcInput.value = '';
    }, 1500);
  }
}

// Clear calcul231w2ator
function clearCalc() {
  calcInput.value = '';
}