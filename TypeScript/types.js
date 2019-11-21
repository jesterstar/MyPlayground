var isFetching = true;
var loading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TS';
var nemberArray = [1, 2, 3, 5, 8, 13];
var numArr = [1, 2, 3, 5, 8, 13];
var words = ['Hello', 'TS'];
// Tuple
var contact = ['Valera', 1234567];
// Any
var variable = 42;
// ...
variable = 'New string';
variable = [];
// ===
function sayMyName(name) {
    console.log(name);
}
sayMyName('Test my name');
// Never (ф-ция возвращает ошибку и никогда не заканчивает свое выполнение,
// либо когда она постояно что-то делает)
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
