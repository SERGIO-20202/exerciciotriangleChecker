// Verifica se os lados formam um triângulo válido e qual tipo ele é
function triangleChecker(a, b, c) {
  // Verifica se todos os lados são positivos
  if (a <= 0 || b <= 0 || c <= 0) {
    return 'none';
  }

  // Verifica a condição de existência do triângulo
  if (a + b <= c || a + c <= b || b + c <= a) {
    return 'none';
  }

  // Verifica o tipo de triângulo
  if (a === b && b === c) {
    return 'equilateral'; // Todos os lados iguais
  } else if (a === b || a === c || b === c) {
    return 'isosceles'; // Dois lados iguais
  } else {
    return 'scalene'; // Todos os lados diferentes
  }
}

// Exemplos de uso
console.log(triangleChecker(3, 3, 3)); // equilateral
console.log(triangleChecker(4, 4, 5)); // isosceles
console.log(triangleChecker(3, 4, 5)); // scalene
console.log(triangleChecker(0, 0, 0)); // none
