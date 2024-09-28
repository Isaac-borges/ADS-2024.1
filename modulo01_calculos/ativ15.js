//15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

import { get_number, get_positive_number, print } from "../utils/io_utils.js"

function calcular_area(b, h){
    return (b * h)/2
}

function main(){
    //Inicio
    const base = get_positive_number("Insira a base do triangulo: ")
    const altura = get_positive_number("Insira a altura do triangulo: ")
    //Processamento 
    const area = calcular_area(base, altura)
    //Final
    print(`A área do triangulo é: ${area}`)
}

main()