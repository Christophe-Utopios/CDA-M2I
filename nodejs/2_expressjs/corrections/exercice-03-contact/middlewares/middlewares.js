import 'dotenv/config'

export function authMiddleware(req, res, next) {

    // Récupération du de l'authentication dans l'entête de la requête HTTP
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');
  
    // Vérifier le password et le login
    if (login && password && login === process.env.LOGIN && password === process.env.PASSWORD) {
      return next();
    }

    return res.sendStatus(401);
}