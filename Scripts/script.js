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
      num2 === 0 ? resultado = 'No se puede dividir por cero': resultado = num1 / num2;
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
// Manejar el envío del formulario el preventDefault() es importante miralo bien con forms.
document.getElementById('calculator-form').addEventListener('submit', (e)=> {
  e.preventDefault(); // Evitar el envío del formulario, esto sirve para deshabilitar las funciones que tiene el form por defecto(y asi puedas tratarlo como quieras)
  calcular();
});

// Manejar el botón de reinicio
document.getElementById('reset').addEventListener('click', ()=> {
  resetForm();
});
