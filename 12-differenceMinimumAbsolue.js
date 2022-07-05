var myArgs = process.argv.slice(2);
var plusPetiteDifference = Infinity;
for (let index = 0; index < myArgs.length; index++) {
    if ((!isNumeric(myArgs[index]))) {
        Error();
    }
}
for (let index = 0; index < myArgs.length; index++) {

    for (let i = 0; i < myArgs.length; i++) {
        if (i != index) {
            if (myArgs[index] - myArgs[i] < plusPetiteDifference && myArgs[index] - myArgs[i] > 0) {

                plusPetiteDifference = (myArgs[index] - myArgs[i]);
            }
        }
    }
}
console.log(plusPetiteDifference);

function isNumeric(num) {
    return !isNaN(num);
}
function Error() {
    console.log("Error.");
    process.exit(1);
}