// Desafio 1
function compareTrue(parametro1, parametro2) {
    // 1. implementar um código | 2 deve receber DOIS parâmetros booleanos. | 3. retornar verdadeiro se ambos forem verdadeiros | 4. retornar falso se um ou ambos forem falsos.
    if (parametro1 === true && parametro2 === true) {
        return true;
    } return false;
}

// Desafio 2
function calcArea(base, altura) {
    return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
    return string.split(' ');
}

// Desafio 4
function concatName(array) {
    return `${array[array.length - 1]}, ${array[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
    let countWins = 3;
    let countTies = 1;
    return wins * countWins + ties * countTies;
}

// Desafio 6
function highestCount(array) {
    let highestNum = Math.max(...array);
    let count = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === highestNum) {
            count += 1;
        }
    }
    return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let distanciaCat1 = Math.abs(mouse - cat1);
    let distanciaCat2 = Math.abs(mouse - cat2);

    if (distanciaCat2 < distanciaCat1) {
        return 'cat2';
    } else if (distanciaCat1 < distanciaCat2) {
        return 'cat1';
    }
    return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
    let arrayPalavras = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] % 3 === 0 && array[i] % 5 === 0) {
            arrayPalavras.push('fizzBuzz');
        } else if (array[i] % 3 === 0) {
            arrayPalavras.push('fizz');
        } else if (array[i] % 5 === 0) {
            arrayPalavras.push('buzz');
        } else {
            arrayPalavras.push('bug!');
        }
    }
    return arrayPalavras;
}

// Desafio 9
function encode(phrase) {
    let string = phrase.split('');
    for (let i = 0; i < string.length; i += 1) {
        switch (string[i]) {
            case 'a':
                string[i] = '1';
                break;

            case 'e':
                string[i] = '2';
                break;

            case 'i':
                string[i] = '3';
                break;

            case 'o':
                string[i] = '4';
                break;

            case 'u':
                string[i] = '5';
                break;

            default:
                string[i] = string[i];
                break;
        }
    }
    return string.join('');
}

function decode(phraseNums) {
    let string = phraseNums.split('');
    for (let i = 0; i < string.length; i += 1) {
        switch (string[i]) {
            case '1':
                string[i] = 'a';
                break;

            case '2':
                string[i] = 'e';
                break;

            case '3':
                string[i] = 'i';
                break;

            case '4':
                string[i] = 'o';
                break;

            case '5':
                string[i] = 'u';
                break;

            default:
                string[i] = string[i];
                break;
        }
    }
    return string.join('');
}

// Desafio 10
function techList(arrayTech, nomePessoa) {
    if (arrayTech.length === 0) {
        return 'Vazio!'
    }
    else {
        let arrayLista = [];
        arrayTech.sort();
        for (item in arrayTech) {
            let novoObj = {
                tech: arrayTech[item],
                name: nomePessoa
            };
            arrayLista.push(novoObj);
        }
        return arrayLista;
    }
}