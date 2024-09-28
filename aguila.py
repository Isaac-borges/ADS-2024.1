def main():
    # Crie uma calculadora que some os valores passados via input até um limite X de soma
    print("Hello World: ")
    inicio = 0 
    limite = int(input("Insira o limite: "))
    soma = 0

    while soma < limite:
        inicio += 1
        soma += int(input("Insira uma soma: "))
        print(soma)

main()

        
