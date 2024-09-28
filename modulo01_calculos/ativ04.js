//4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

import { get_number, print } from "../utils/io_utils.js"

function main(){
    //Inicio
    const cotacao_dolar = get_number("Insira a cotação do dólar: ")
    const valor_dolar = get_number("Insira um valor em dólar: ")

    //Processamento
    const real_valor = valor_dolar * cotacao_dolar

    //Final
    print(`O equivalente em real é R$${real_valor.toFixed(2)}`)
}

main()