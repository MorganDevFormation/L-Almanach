function isPositiveInteger(req, res, next) {

    const id = Number.parseInt(req.params.id, 10); // on convertit id en nombre entier

// Number.isIntenger permet de s'assurer que l'id est un nombre entier
// si on passe le test et le nbre est un entier positif : on retourne next

    if (Number.isInteger(id) && id > 0) { 
        req.params.id = id;
        return next();
    }

    const error = new Error('Requête mal formée');
    error.statusCode = 400;

    return next(error);
}

export { isPositiveInteger };
