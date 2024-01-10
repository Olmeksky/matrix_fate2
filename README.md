# matrix_fate2

  Как получить сумму цифр из числа?
2 спсоба сложить по очереди все цифры длинного числа
  Вот непонятный
var n = 1234;
var sum = 0;

while (n > 0) {
    sum += n % 10
    n = Math.floor(n/10)
}

Вот следующий
function digit (number) {
  var figures = "" + number
  var sum = 0

  for (var i = 0; i < figures.length; i++) 
    sum += +figures[i]
  return sum
}
digit(255) // output => 2+5+5 = 12
\
Остается только приспособить их для посчета арканов
