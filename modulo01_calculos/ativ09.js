// 9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
import { get_number, print } from "../utils/io_utils.js";

function main(){
    const A = get_number("Insira um número: ")
    const B = get_number("Insira um número: ")
    //Processamento (não tem)
    //Final
    print(`${B}, ${A}`)
}

main()