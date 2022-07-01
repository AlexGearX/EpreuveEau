var myArgs = process.argv.slice(2);
var indexResultat = 2;
var premiereValeur = 1;
var secondeValeur = 1;
var resultatSuite;

if (!(myArgs.length == 1) || !isNumeric(myArgs[0]) || myArgs[0] < 0) { Error(); }
if (myArgs[0] <= 2) {
    if (myArgs[0] == 0) { console.log("1"); process.exit(1); }
    else { console.log("1"); process.exit(1); }
}
while (indexResultat != myArgs[0]) {
    resultatSuite = premiereValeur + secondeValeur;
    premiereValeur = secondeValeur;
    secondeValeur = resultatSuite;
    indexResultat++;
}
console.log(resultatSuite);

function Error() {
    console.log("-1");
    process.exit(1);
}
function isNumeric(num) {
    return !isNaN(num);
}