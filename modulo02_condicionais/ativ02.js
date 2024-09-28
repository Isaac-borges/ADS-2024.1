//2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

import { get_number, print } from "../utils/io_utils.js"

function main(){
    //Inicio
    const num1 = get_number("Insira um número: ")
    const num2 = get_number("Insira um número: ")
    let maior, menor
    //Processamento
    if (num1 > num2){
        num1 = maior
        num2 = menor
    } else {
        num2 = maior
        num1 = menor
    }
    
    //Final 
    print(`O maior número é ${maior} e o menor é ${menor}`)
}

main()