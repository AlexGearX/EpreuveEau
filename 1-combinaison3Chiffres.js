for (let premierChiffre = 0; premierChiffre < 10; premierChiffre++) {
    for (let secondChiffre = 0; secondChiffre < 10; secondChiffre++) {
        for (let troisiemeChiffre = 0; troisiemeChiffre < 10; troisiemeChiffre++) {
            if (premierChiffre == secondChiffre || premierChiffre == troisiemeChiffre || secondChiffre == troisiemeChiffre) {

            } else if (premierChiffre < secondChiffre && premierChiffre < troisiemeChiffre && secondChiffre < troisiemeChiffre) {
                console.log(premierChiffre, secondChiffre, troisiemeChiffre);
            }
        }
    }
}