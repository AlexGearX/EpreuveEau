var listeCombinaisonEnString = "";
for (let premierChiffre = 0; premierChiffre < 10; premierChiffre++) {
    for (let secondChiffre = 0; secondChiffre < 10; secondChiffre++) {
        for (let troisiemeChiffre = 0; troisiemeChiffre < 10; troisiemeChiffre++) {
            for (let quatriemeChiffre = 0; quatriemeChiffre < 10; quatriemeChiffre++) {
                listeCombinaisonEnString += (premierChiffre + "" + secondChiffre + " " + troisiemeChiffre + "" + quatriemeChiffre + ", ")
            }
        }
    }
}
listeCombinaisonEnString = listeCombinaisonEnString.slice(0, -2);
console.log(listeCombinaisonEnString);