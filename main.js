function calculator(){
    console.log('Bem-vindo a sua calculadora no console do browser'+'\n'+'\n'+'\n')
    const operatorsList = [
        '+:Soma',
        '-: Subtração',
        '*: Multiplicação',
        '/: Divisão' ,
        '^x: Potência(número informado)',
        '^2: Potência(quadrado)',
        '√: Raiz(quadrada)',
        '√x: Raiz(número informado)',
        '%: Porcentagem',
        '//: Divisão inteira',
        '%/: Resto de Divisão',
    ];
    for(let i = 0; i< operatorsList.length; i++){
        console.info('Operadores disponíveis:')
        console.info(operatorsList[i])
    }
    const number1 = Number(prompt('Digite o primeiro número: '));
    const operator = prompt('Digite o operador')
    const number2 = Number(prompt('Digite o segundo valor: '));
    let result;
    console.clear();

    if(
        operator === '+' ||
        operator === '-' ||
        operator === '*' ||
        operator === '/' ||
        operator === '^x' ||
        operator === '^2' ||
        operator === '√' ||
        operator === '√x'||
        operator === '%' ||
        operator === '//' ||
        operator === '%/'
    ){
        switch(operator){
            case '+':
                result = number1 + number2;
                console.log('O resultado da soma é:', result)
                break;
            case '-':
                result = number1 - number2;
                console.log('O resultado da subtração é:', result)
                break;
            case '*':
                result = number1 * number2;
                console.log('O resultado da multiplicação é:', result)
                break;
            case '/':
                result = number1/number2;
                console.log('O resultado da divisão é:', result)
                break;
            case '^x':
                result = number1 ** number2;
                console.log('O resultado da potência', number2, 'é:', result)
                break;
            case '^2':
                result = number1 ** 2;
                console.log('O resultado de,', number1, 'ao quadrado é:', result)
                break;
            case '√':
                result = number1 ** (1/2);
                console.log('O resultado da raiz quadrada de',number1, 'é:', result)
                break;
            case '√x':
                result = number1 ** (1/number2);
                console.log('O resultado da raiz '+number2, 'é:', Number(result.toFixed(0)))
                break;
            case '%':
                result = number1 * (number2/100);
                console.log('O resultado de',(number2)+'% de', number1+', é:', result)
                break;
            case '//':
                console.log('Será mostrado o valor da divisão inteira.')
                result = Math.floor(number1/number2);
                console.log('O resultado da divisão inteira é:', result)
                break;
            case '%/':
                console.log('Será mostrado o resto de divisão.');
                result = number1 % number2;
                console.log('O resultado do resto de divisão é:', result)
                break;
            default:
        }
    }else{
        console.log('Operador não válido.')
    }
}
calculator()