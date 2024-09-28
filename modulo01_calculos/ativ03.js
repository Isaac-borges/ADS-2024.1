//3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

import { get_number, print } from "../utils/io_utils.js";

function main(){
    const minutos = get_number("Insira uma quantidade de minutos: ")

    const horas = Math.floor(minutos/60)
    const minutos_finais = minutos - horas * 60

    print(`${horas} horas e ${minutos_finais} minutos`)

}

main()