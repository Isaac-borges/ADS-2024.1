//11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

import { get_number, print } from "../utils/io_utils.js";

function main(){
    const numero = get_number("Insira um número: ")
    //Processamento 
    const centena = Math.floor(numero/100)
    const resto1 = numero % 100
    const dezena = Math.floor(resto1/10)
    const unidade = numero % 10

    const inverso = unidade * 100 + dezena * 10 + centena
    //Final
    print(`${inverso} é o inverso do ${numero}`)
}

main()