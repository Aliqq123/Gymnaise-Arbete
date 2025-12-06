// -------------------------------------------------------------
// --- Calculator ------------------------------------------------
// -------------------------------------------------------------
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
    let expression = calcInput.value.replace(/\^/g, '**');
    const result = eval(expression);
    calcInput.value = result;
  } catch (error) {
    calcInput.value = 'Error';
    setTimeout(() => { calcInput.value = ''; }, 1500);
  }
}

function clearCalc() {
  calcInput.value = '';
}


// -------------------------------------------------------------
// --- Function Plotter with function-plot library -------------
// -------------------------------------------------------------
function plotFunction() {
    const f = document.getElementById("func-input").value;
    const xmin = parseFloat(document.getElementById("xmin").value);
    const xmax = parseFloat(document.getElementById("xmax").value);

    // Clear previous plot
    document.getElementById('plot').innerHTML = "";

    try {
        functionPlot({
            target: '#plot',
            width: 900,
            height: 600,
            grid: true,
            xAxis: { domain: [xmin, xmax] },
            data: [{
                fn: f     // sin(x), x^2, etc
            }]
        });
    } catch (err) {
        alert("Kunde inte rita funktionen. Kontrollera att uttrycket är korrekt.");
        console.error(err);
    }
}
