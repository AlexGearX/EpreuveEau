var myArgs = process.argv.slice(2);

for (let index = 0; index < myArgs.length; index++) {
    if ((isNumeric(myArgs[index]))) {
        Error();
    }
}
for (let index = 0; index < myArgs.length - 1; index++) {

    if (myArgs[index] == myArgs[myArgs.length - 1]) {
        console.log(index);
        process.exit(1);
    }
}
console.log("-1");

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}