var isFetching = true;
var isLoading = false;
var int = 42;
var float = 42.2;
var num = 3e10;
var message = 'Hello Typescript';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'Typescript'];
var words2 = ['Hello', 'Typescript'];
// Tuple
var contact = ['Name', 1234567];
// Any
var variable = 42;
// ...
variable = 'New string';
variable = [];
// ===
function sayMyName(name) {
    console.log(name);
}
sayMyName('Имя');
// Never
function throwError(message) {
    throwError(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
