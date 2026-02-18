// Calculator
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



//Graph 
function plotFunction() {
  const funcInput = document.getElementById('func-input').value;
  const xMin = parseFloat(document.getElementById('xmin').value);
  const xMax = parseFloat(document.getElementById('xmax').value);

  if (!funcInput) {
    alert('Vänligen ange en funktion.');
    return;
  }

  // Create x value and y value place holders
  const step = (xMax - xMin) / 1000; // 1000 dots
  let xValues = [];
  let yValues = [];

  
  for (let x = xMin; x <= xMax; x += step) {
    xValues.push(x);
    try {
      // Ersätt '^' med '**' för exponent och evaluera funktionen
      let expr = funcInput.replace(/\^/g, '**').replace(/x/g, `(${x})`);
      let y = eval(expr);
      yValues.push(y);
    } catch (error) {
      console.error('Fel vid evaluering:', error);
      yValues.push(null);
    }
  }

  // Create plot
  const trace = {
    x: xValues,
    y: yValues,
    type: 'scatter',
    mode: 'lines',
    name: 'f(x)'
  };

  const layout = {
    title: 'Graf',
    xaxis: { title: 'x' },
    yaxis: { title: 'y' }
  };

  Plotly.newPlot('plot', [trace], layout);
}
