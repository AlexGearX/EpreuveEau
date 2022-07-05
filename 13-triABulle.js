var myArgs = process.argv.slice(2);
var Args = new Array();
for (let index = 0; index < myArgs.length; index++) {
    if ((!isNumeric(myArgs[index]))) {
        Error();
    }
    Args[index] = parseInt(myArgs[index]);
}
console.log(TriABulle(Args));
function TriABulle(Array) {
    for (let index = (Array.length - 1); index > 0; index--) {
        for (let j = 0; j < index; j++) {
            if (Array[j] > Array[j + 1]) {
                [Array[j + 1], Array[j]] = [Array[j], Array[j + 1]];
            }
        }
    }
    return (Array)
}

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}