const arraOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8];
const arraOfStrings: Array<string> = ['Hello', 'world'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arraOfNumbers);
reverse(arraOfStrings);