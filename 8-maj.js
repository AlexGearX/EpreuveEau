var myArgs = process.argv.slice(2);
var phraseEnChar;
var phraseModifier = "";
if ((myArgs.length != 1) || isNumeric(myArgs[0])) { Error(); }

phraseEnChar = myArgs[0].split('');
phraseModifier += phraseEnChar[0].toUpperCase();

for (let index = 1; index < phraseEnChar.length; index++) {

    if (phraseEnChar[index] == " ") {
        phraseModifier += " ";
        phraseModifier += phraseEnChar[index + 1].toUpperCase();
        index++;

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