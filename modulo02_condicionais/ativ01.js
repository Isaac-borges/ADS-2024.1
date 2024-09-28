//1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

import {get_number, print} from '../utils/io_utils.js'

function main(){
    //Inicio
    const num1 = get_number('Insira um número: ')
    const num2 = get_number('Insira um número: ')
    const num3 = get_number('Insira um número: ')
    let mensagem = "Não há nenhum número igual"
    //Processamento
    if (num1 === num2 && num1 === num3 && num2 === num3){
        mensagem = "Há 3 números iguais"
    } else if (num1 === num2 || num1 === num3 || num2 === num3){
        mensagem = "Há dois números iguais"
    }
    //Final
    print(mensagem)
}

main()