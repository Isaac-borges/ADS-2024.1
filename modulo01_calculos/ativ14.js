//14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

import { get_number, print } from "../utils/io_utils.js";

function calcular_media(n1, n2, n3, p1, p2, p3){
    const notaspesadas = (n1 * p1) + (n2 * p2) + (n3 * p3)
    const pesos = p1 + p2 + p3

    return notaspesadas / pesos
}

function main(){
    //Inicio
    const nota1 = get_number("Insira a primeira nota: ")
    const peso1 = get_number("Insira o peso 1: ")
    const nota2 = get_number("Insira a segunda nota : ")
    const peso2 = get_number("Insira o peso 2: ")
    const nota3 = get_number("Insira a terceira nota: ")
    const peso3 = get_number("Insira o peso 3: ")
    
    //Processamento
    const media = calcular_media(nota1, nota2, nota3, peso1, peso2, peso3)

    //Final
    print(`A média do aluno é: ${media}`)

}

main()