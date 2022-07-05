var myArgs = process.argv.slice(2);
var Args = new Array();
var min;
for (let index = 0; index < myArgs.length; index++) {
    if ((!isNumeric(myArgs[index]))) {
        Error();
    }
    Args[index] = parseInt(myArgs[index]);
}

console.log(TriParSelection(Args))
function TriParSelection(Array) {
    for (let index = 0; index < (Array.length - 1); index++) {
        min = index;
        for (let j = (index + 1); j < (Array.length); j++) {
            if (Array[j] < Array[min]) {
                min = j;
            }
        }
        if (min != index) {
            [Array[index], Array[min]] = [Array[min], Array[index]];
        }
    }
    return (Array);
}

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}