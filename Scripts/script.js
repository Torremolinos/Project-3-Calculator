function calcular() {
  const num1 = parseFloat(document.getElementById("first").value);
  const num2 = parseFloat(document.getElementById("seccond").value);
  const choice = document.getElementById("choice").value;
  let resultado;
  switch (choice) {
    case "add":
      resultado = num1 + num2;
      break;

    case "substract":
      resultado = num1 - num2;
      break;

    case "multiply":
      resultado = num1 * num2;
      break;

    case "divide":
      num1==0 && num2 === 0 ? alert('No se puede dividir por 0') : resultado = num1 / num2;
      break;
      default:
        resultado= 'Operacion invalida';
  }
  document.getElementById('result').textContent = `El resultado es: ${resultado}`;
}

function resetForm() {
  document.getElementById('calculator-form').reset();
  document.getElementById('result').textContent = '';
}
// Manejar el envío del formulario
document.getElementById('calculator-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar el envío del formulario
  calculate();
});

// Manejar el botón de reinicio
document.getElementById('reset').addEventListener('click', function () {
  resetForm();
});
