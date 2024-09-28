//Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

import {get_number_in_range, print} from "../utils/io_utils.js";

function main(){
    //Inicio
    let numero = get_number_in_range("Insira um número de três dígitos: ", 100, 999)
    //Processamento
    const centena = Math.floor(numero / 100)
    const resto1 = numero % 100
    const dezena = Math.floor(resto1 / 10)
    const unidade = resto1 % 10

    const soma = centena + dezena + unidade
    //Final
    print(`A soma de ${centena} + ${dezena} + ${unidade} é ${soma}`)
}

main()
