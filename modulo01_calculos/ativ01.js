// 1. Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)
import {get_number, print} from '../utils/io_utils.js'

function main(){
    const velocidade_ms = get_number("Insira uma velocidade em m/s: ") 

    const velocidade_kmh = velocidade_ms * 3.6

    print(`A velocidade equivalente em Km/h é ${velocidade_kmh} km/h`)
}

main()