// 8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.  

import { get_number, print } from "../utils/io_utils.js";

function main(){
    const num1 = get_number("Insira um número: ")
    const num2 = get_number("Insira um número: ")
    //Processamento
    const calculo = (num1 + num2) / (num1 - num2)
    //Final
    print(`A divisão da soma pela subtração dos números lidos é ${calculo}`)

}

main()