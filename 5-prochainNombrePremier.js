var myArgs = process.argv.slice(2);
var nombrePremierSuperieurTrouver = false;
var prochainNombrePremier = 0;
if (myArgs.length == 1) {
    if (isNumeric(myArgs[0])) {
        var nombre = parseInt(myArgs[0]) + 1;
        var compteurDivisibilite = 0;
        if (nombre < 2) { Error(); }
        while (!nombrePremierSuperieurTrouver) {
            for (let index = 1; index <= nombre; index++) {
                if (nombre % index === 0) {
                    compteurDivisibilite++;
                }
            }
            if (compteurDivisibilite == 2) {
                compteurDivisibilite = 0;
                nombrePremierSuperieurTrouver = true;
                prochainNombrePremier = nombre;
            } else {
                compteurDivisibilite = 0;
                nombrePremierSuperieurTrouver = false;
                nombre += 1;
            }
        }
        console.log(prochainNombrePremier);
    }

} else {
    Error();
}

function Error() {
    console.log("Erreur.");
    process.exit(1);
}

function isNumeric(num) {
    return !isNaN(num);
}