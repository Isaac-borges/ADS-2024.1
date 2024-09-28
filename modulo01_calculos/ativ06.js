//6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

import { get_number, print } from "../utils/io_utils.js";

function main(){
    //Inicio
    const velocidade_kmh = get_number("Insira uma velocidade em km/h: ")
    //Processamento
    const velocidade_ms = velocidade_kmh / 3.6
    //Final
    print(`A velocidade equivalente é ${velocidade_ms.toFixed(2)} m/s`)

}

main()