/* Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
* divisores. (flag número = 0).
*/
import { get_number, print } from "../utils/io_utils.js";

function get_divisores(num){
    let contador = 0
    let relacao = 0

    print(`Número = ${num}`)

    while (contador <= num){
        contador++

        if (num % contador === 0){
            relacao++
            print(`${relacao}º divisor \t ${contador}`)
        }
    }

}

function main(){
    let lista = get_number("Insira um número: ")

    while(lista !== 0){
        get_divisores(lista)
        lista = get_number("Insira um número: ")
    }

    print("Fim!")
}

main()