// 10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

import { get_number, print } from "../utils/io_utils.js";

function main(){
    //Inicio
    const num1 = get_number("Insira um número: ")
    const num2 = get_number("Insira um número: ")
    //Processamento
    const quociente = Math.floor(num1/num2)
    const resto = num1 % num2
    //Final
    print(`O quociente da divisão é: ${quociente}; O resto é: ${resto}`)
}

main()