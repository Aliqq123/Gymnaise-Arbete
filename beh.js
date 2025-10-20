// --- Calculator ---
const calcInput = document.getElementById('calc-input');
document.querySelectorAll('.calc-grid button').forEach(btn => {
  btn.addEventListener('click', () => {
    calcInput.value += btn.innerText;
  });
});