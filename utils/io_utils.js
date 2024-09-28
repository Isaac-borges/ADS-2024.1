import { question, questionNewPassword } from "readline-sync";

export function get_number(entrada){
    const numero = Number(question(entrada))

    return numero
}

export function get_positive_number(entrada){
    const numero = get_number(entrada)

    if (numero < 0){
        get_positive_number(entrada)
    } 

    return numero
}

export function get_entry(entrada){
    const entry = question(entrada)

    return entrada
}

export function print(mensagem){
    console.log(mensagem)
}

export function get_number_in_range(entrada, min, max){
    let numero = get_number(entrada)

    if (numero > max || numero < min){
        print("VALOR INVÁLIDO!")
        numero = get_number_in_range(entrada, min, max)
    }

    return numero
}