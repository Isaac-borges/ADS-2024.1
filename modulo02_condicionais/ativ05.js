// 5. Leia 3 (três) números e escreva-os em ordem crescente.

import { get_number, print } from "../utils/io_utils.js";

function main(){
    //Inicio
    const num1 = get_number("Insira um número: ")
    const num2 = get_number("Insira um número: ")
    const num3 = get_number("Insira um número: ")
    let maior, meio, menor
    //Processamento
    if (num1 > num2 && num1 > num3){
        maior = num1

        if (num2 > num3){
            meio = num2
            menor = num3
        } else {
            meio = num3
            menor = num2
        }
    } else if (num2 > num1 && num2 > num3){
        maior = num2

        if (num1 > num3){
            meio = num1
            menor = num3
        } else {
            meio = num3
            menor = num1
        }
    } else {
        maior = num3

        if (num1 > num2){
            meio = num1
            menor = num2
        } else {
            meio = num2
            menor = num1
        }
    }
    //Final
    print(`A ordem dos números é ${menor}, ${meio}, ${maior}`)
}

main()