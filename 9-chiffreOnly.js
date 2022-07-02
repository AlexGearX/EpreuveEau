var myArgs = process.argv.slice(2);
if ((myArgs.length != 1) || !isNumeric(myArgs[0])) {
    Error();
} else {
    console.log("true");
}

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("False");
    process.exit(1);
}