// Desafio 11
function generatePhoneNumber(array) {
    // fazer uma função que conta se o número repetiu mais de 3 vezes. se sim return não é possível... 
    if (array.length !== 11) {
        return 'Array com tamanho incorreto.'
    }
    for (let element in array) {
        let count = 0;
        if (array[element] > 9 || array[element] < 0) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
        for (let i in array) {
            if (array[i] === array[element]) {
                count += 1;
            }
            if (count >= 3) {
                return 'não é possível gerar um número de telefone com esses valores';
            }
        }
    }
    if (array.length > 0 && array.length === 11) {
        return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
    }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    if (lineA > Math.abs(lineB - lineC) && lineA < (lineB + lineC)) {
        return true;
    }
    else if (lineB > Math.abs(lineA - lineC) && lineB < (lineA + lineC)) {
        return true;
    }
    else if (lineC > Math.abs(lineA - lineB) && lineC < (lineA + lineB)) {
        return true;
    } return false;
}

// Desafio 13
function hydrate(string) {
    let numbers = string.match(/\d+/g).map(Number);
    let contador = 0;
    for (i = 0; i < numbers.length; i += 1) {
        contador += numbers[i];
    }
    if (contador > 1) {
        return `${contador} copos de água`;
    }
    else if (contador === 1) {
        return `${contador} copo de água`;
    }
}