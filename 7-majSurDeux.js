var myArgs = process.argv.slice(2);
var phraseEnChar;
var phraseModifier = "";
var compteurLettre = 0;
if ((myArgs.length != 1) || isNumeric(myArgs[0])) { Error(); }
phraseEnChar = myArgs[0].split('');
for (let index = 0; index < phraseEnChar.length; index++) {

    if (phraseEnChar[index] != " ") {
        if (compteurLettre % 2 == 0) {
            phraseModifier += phraseEnChar[index].toUpperCase();
            compteurLettre++;
        } else {
            phraseModifier += phraseEnChar[index].toLowerCase();
            compteurLettre++;
        }
    } else {
        phraseModifier += phraseEnChar[index];
    }
}
console.log(phraseModifier);
function Error() {
    console.log("Erreur.");
    process.exit(1);
}
function isNumeric(num) {
    return !isNaN(num);
}