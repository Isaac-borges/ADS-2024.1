//16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

import { get_positive_number } from "../utils/io_utils.js"

function area_quadrado(lado){
    return lado**2
}

function main(){
    //Inicio 
    const lado = get_positive_number("Insira o valor do lado do triangulo: ")
    //Processamento
    const area = area_quadrado(lado)
    //Final
    print(`A área do quadrado é: ${area}`)
}

main()