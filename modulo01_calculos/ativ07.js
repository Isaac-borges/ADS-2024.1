// 7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

import {get_number, print} from '../utils/io_utils.js'

function main(){
    //Inicio
    const num1 = get_number("Digite um número: ")
    const num2 = get_number("Digite um número: ")
    const num3 = get_number("Digite um número: ")
    //Processamento
    const soma = num1 + num2
    const diferenca = num2 - num3
    //Final
    print(`A soma dos dois primeiros números é ${soma} e a diferença dos dois últimos é ${diferenca}`)

}

main()