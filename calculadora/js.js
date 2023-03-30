let input = document.getElementById("input");

function addNumber(num) {
  input.value += num;
}

function addOperator(operator) {
  input.value += operator;
}

function clearInput() {
  input.value = "";
}

function calculate() {
  try {
    let result = eval(input.value);
    input.value = result;
  } catch (err) {
    alert("Erro ao calcular expressão!");
  }
}
