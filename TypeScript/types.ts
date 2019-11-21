const isFetching: boolean = true;
const loading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello TS';

const nemberArray: number[] = [1, 2, 3, 5, 8, 13];
const numArr: Array<number> = [1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'TS'];

// Tuple
const contact: [string, number] = ['Valera', 1234567];

// Any
let variable: any = 42;
// ...
variable = 'New string';
variable = [];

// ===
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Test my name');

// Never (ф-ция возвращает ошибку и никогда не заканчивает свое выполнение,
// либо когда она постояно что-то делает)
function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while(true) {}
}

// Type
type Login = string;

const login: Login = 'admin';
// const login1: Login = 2 - not working

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';
// const id3: ID = true - not working

type SomeType = string | null | undefined;