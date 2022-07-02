var myArgs = process.argv.slice(2);
var premierNombre = 0;
var secondNombre = 0;

var listeFinal = "";
if ((myArgs.length != 2) || !isNumeric(myArgs[0]) || !isNumeric(myArgs[1])) {
    Error();
}
premierNombre = parseInt(myArgs[0]);
secondNombre = parseInt(myArgs[1]);

if (premierNombre < secondNombre) {
    for (let index = premierNombre; index < secondNombre; index++) {
        listeFinal += (index + " ");
    }
} else {
    for (let index = secondNombre; index < premierNombre; index++) {
        listeFinal += (index + " ");
    }
}
listeFinal = listeFinal.slice(0, -1);
console.log(listeFinal);

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}