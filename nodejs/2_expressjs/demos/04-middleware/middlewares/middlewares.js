export function dateMiddleware(req, res, next) {
    req.dateRequest = new Date();
    next();
}

// Ajoute uen date dans l'objet de la requête
export function queryLogger(req, res, next) {
    console.log(req.dateRequest, req.query);
    // permet de passer au middleware suivant
    next();
}

// Vérifie l'identité de l'utilisateur
export function authMiddleware(req, res, next) {
    console.log("Je suis dans le middleware auth");
    let user = req.body.user;
    if(user !== 'admin') {
        res.sendStatus(401);
    }

    let password = req.body.password;
    if (password !== "password") {
        res.sendStatus(401);
    } 

    next();
}