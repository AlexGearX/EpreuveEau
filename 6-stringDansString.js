var myArgs = process.argv.slice(2);
var premierMot;
var deuxiemeMot;
if ((myArgs.length != 2) || isNumeric(myArgs[0]) || isNumeric(myArgs[1]) || myArgs[0].length < myArgs[1].length) { Error(); }
premierMot = myArgs[0].split('');
deuxiemeMot = myArgs[1].split('');
for (let index = 0; index < premierMot.length; index++) {
    if (premierMot[index] == deuxiemeMot[0]) {
        var compteurLongueurMot = 1;
        for (let i = 1; i < deuxiemeMot.length; i++) {
            if (premierMot[index + i] == deuxiemeMot[i]) {
                compteurLongueurMot++;
                if (compteurLongueurMot == deuxiemeMot.length) {
                    console.log("true");
                    process.exit(1);
                }
            }
        }
    }
}
console.log("False");
function Error() {
    console.log("Erreur.");
    process.exit(1);
}
function isNumeric(num) {
    return !isNaN(num);
}