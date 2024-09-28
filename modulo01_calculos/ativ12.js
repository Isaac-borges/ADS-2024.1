// 12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import { get_number, print } from "../utils/io_utils.js";

function main(){
    //Inicio
    const salario = get_number('Insira o salário: ')
    //Processamento
    const novo_salario = salario * 1.25
    //Final
    print(`O novo aumento de 25% é igual à: R$${novo_salario}`)
}

main()