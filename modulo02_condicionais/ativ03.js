//3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

import { get_number } from "../utils/io_utils.js";

function main(){
    //Inicio
    const num1 = get_number("Insira um número: ")
    const num2 = get_number("Insira um número: ")
    const num3 = get_number("Insira um número: ")
    let maior, menor
    //Processamento
    if (num1 > num2 && num1 > num3){
        maior = num1
        if (num2 > num3){
            menor = num3
        } else {
            menor = num2
        }
    } if (num2 > num1 && num2 > num3){
        maior = num2
        if (num1 > num3){
            menor = num3
        } else {
            menor = num1
        }
    } if (num3 > num1 && num3 > num2){
        maior = num3 
        if (num1 > num2){
            menor = num2
        } else {
            menor = num1
        }
    }
    //Final
    print(`O maior número é ${maior} e o menor é ${menor}`)

}