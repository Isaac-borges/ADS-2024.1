/*receba: nome, sexo, idade, peso, altura, perfil ativ. fisica */
/*mostre: necessidade calórica indiv. */

import { get_entry, get_positive_number, print, get_number_in_range } from "../utils/io_utils.js";

function main(){
    print("BALANÇA CALÓRICA")
    const nome = get_entry("Insira seu nome : ")
    print("(1 -> Masculino; 2 -> Feminino)")
    const sexo = get_number_in_range("Insira seu sexo : ", 1, 2)
    const idade = get_positive_number("Qual sua idade? : ")
    const peso = get_positive_number("Qual seu peso?  : ")
    const altura = get_positive_number("Qual sua altura em metros? : ")

    print("Perfil de Atividade Física (Sedentario -> 1, 2 -> Pouco Ativo, 3-> Ativo, 4-> Muito Ativo")
    const perfil_atv_fis = get_number_in_range("Qual seu nível de atividade física? : ", 1, 4)
    let necessidade_calorica = calcular_necessidade_calorica(sexo, idade, peso, altura, perfil_atv_fis)
    print (necessidade_calorica.toFixed(2)) /* excluir, teste */

    print("Objetivo (Ganhar peso -> 1; Perder peso -> 2)")
    const objetivo = get_number_in_range("Qual seu objetivo? :", 1, 2)
    const kg_desejado = get_positive_number("Quantos kg você quer ganhar ou perder? : ")
    const semanas = get_positive_number("Em quantas semanas? : ")

    const kgp_semana = kg_desejado/semanas
    const cal_semanal = kgp_semana * 7700 
    const cal_diaria = cal_semanal/7

    const objetivo_texto = objetivo === 1 ? "ganhará" : "perderá"
    const mais_ou_menos_sinal = objetivo === 1 ? "+" : "-"
    const mais_ou_menos = objetivo === 1 ? "mais" : "menos"

    const mensagem1 = `
        Você ${objetivo_texto} ${kgp_semana} kg por semana, o que corresponde à ${mais_ou_menos_sinal} ${cal_semanal} kcal semanais!
        Portanto, terá que consumir ${mais_ou_menos} ${cal_diaria} calorias diárias.
        `
    print(mensagem1)
    if (kgp_semana >= 1){   
        const aviso = `
        ------------------------------------------------------------------------------------------------------
        CUIDADO!!
        Você ${objetivo_texto} ${kgp_semana}, isso é perigoso para sua saúde e você pode não se adaptar bem à nova dieta, pense bem
        antes de seguí-la.
        ------------------------------------------------------------------------------------------------------
        
        `
        print(aviso)
    }

    const necessidade_nova = necessidade_calorica + cal_diaria
    const gordurakcal = 0.36 * necessidade_nova
    const gordura_gramas = gordurakcal / 9
    const proteina_carb_kcal = 0.32 * necessidade_nova
    const proteina_carb_gramas = proteina_carb_kcal / 4

    const mensagem2 = `
    A sua nova dieta desve ser constituída por 40% de carboidratos, 40% de proteínas e 20% de gorduras.
    Ou seja:

    ${proteina_carb_gramas}g de carboidratos
    ${proteina_carb_gramas}g de proteínas
    ${gordura_gramas}g de gorduras

    `
    print(mensagem2)
}

function calcular_necessidade_calorica(sexo, idade, peso, altura, ativf){
    let af = 0
    let necessidade_calorica
    if (sexo === 1){
        if (ativf === 1){
            af = 1.00
        } else if (ativf === 2){
            af = 1.11
        } else if (ativf === 3){
            af = 1.25
        } else {
            af = 1.48
        }

        necessidade_calorica = 662 - (9.53 * idade) + af * (15.91 * peso) + (539,6 * altura)

    } else {
        if (ativf === 1){
            af = 1.00
        } else if (ativf === 2){
            af = 1.12
        } else if (ativf === 3){
            af = 1.27
        } else {
            af = 1.45
        }

        necessidade_calorica = 354 - (6.91 * idade) + af * (9.36 * peso) + (726 * altura)

    }

    return necessidade_calorica
}


main()