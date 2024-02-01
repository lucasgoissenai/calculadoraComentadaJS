// Função para somar dois números
function somar(numeroA, numeroB) {
  return numeroA + numeroB;
}

// Função para subtrair dois números
function subtrair(a, b) {
  return a - b;
}

// Função para multiplicar dois números
function multiplicar(a, b) {
  return a * b;
}

// Função para dividir dois números
function dividir(a, b) {
  return a / b;
}

// Função principal para realizar os cálculos e exibir os resultados na página
function calcular() {
  // Obter os valores dos campos de entrada
  const numeroA = parseFloat(document.getElementById("numeroA").value);
  const numeroB = parseFloat(document.getElementById("numeroB").value);

  // Exibir os resultados na página HTML
  document.getElementById("soma").innerHTML = "Soma: " + somar(numeroA, numeroB);
  document.getElementById("subtracao").innerHTML = "Subtração: " + subtrair(numeroA, numeroB);
  document.getElementById("multiplicacao").innerHTML = "Multiplicação: " + multiplicar(numeroA, numeroB);
  document.getElementById("divisao").innerHTML = "Divisão: " + dividir(numeroA, numeroB);
}
