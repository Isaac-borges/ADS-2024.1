// 13. Leia um valor em real (R$), calcule e escreva 70% deste valor.

import {get_number, print} from "../utils/io_utils.js"
import { gerar_porcentagem } from "../utils/math_utils.js"

function main(){
    //Inicio
    const valor_real = get_number("Insira um valor em real: ")

    //Processamento 
    const novo_valor = gerar_porcentagem(valor_real, 70)

    //Final
    print(`O novo valor em real é R$${novo_valor.toFixed(2)}`)
}

main()