//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
// assim como a quantidade de dias pelos quais o carro foi alugado.
// Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let quilometragemPercorrida = 200
let quantidadeDias = 5

let precoFinal = (quilometragemPercorrida*0.15) + (quantidadeDias*60)

console.log ('O valor total é de ' + precoFinal + ' reais.')  