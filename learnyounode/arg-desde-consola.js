/*
console.log(process.argv)

$ node program.js 1 2 3

La salida estándar a consola será algo parecido a:

[ 'node', '/path/to/your/program.js', '1', '2', '3' ]

+process.argv[2] = Number(process.argv[2] note el +
*/

var numeros = process.argv
var sum = 0

for (let i=2 ; i<numeros.length ; i++) {
  sum = sum + +numeros[i]
}

console.log(sum)