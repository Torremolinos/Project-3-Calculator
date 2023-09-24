function calcular() {
  const num1 = parseFloat(document.getElementById("first").value);
  const num2 = parseFloat(document.getElementById("seccond").value);
  const eleccion = document.getElementById("choice").value;
  let resultado;
  switch (eleccion) {
    case "add":
      resultado = num1 + num2;
      break;

    case "subtract":
      resultado = num1 - num2;
      break;

    case "multiply":
      resultado = num1 * num2;
      break;

    case "divide":
      num1 && num2 === 0 ? alert('No se puede dividir por 0') : resultado = num1 / num2;
      break;
  }
}
