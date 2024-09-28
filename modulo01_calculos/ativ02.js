//2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

import { get_number, print } from "../utils/io_utils.js";

function main(){
    const horas = get_number("Insira as horas: ")
    const minutos = get_number("Insira uma quantidade de minutos: ")

    const minutos_totais = (horas * 60) + minutos

    print(`Total: ${minutos_totais} minutos`)
}

main()