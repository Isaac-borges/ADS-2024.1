/* 4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade. */

import { get_number_in_range, print } from "../utils/io_utils";

function main(){
    //Inicio
    const numero = get_number_in_range("Insira um número: ", 10, 99)
    //Processamento
    const dezena = Math.floor(numero/10)
    const unidade = numero % 10
    let verificacao_igualdade = desiguais
    
    if (dezena === unidade){
        verificacao_igualdade = iguais
    }

    //Final
    print(`Os algarismo da dezena e da unidade são: ${verificacao_igualdade}`)
}

main()