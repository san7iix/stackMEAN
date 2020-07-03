const jwt = require('jsonwebtoken');

let checkAuth = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, 'colapp', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }
        req.user = decoded.usuario
        next();
    })
};

module.exports = { checkAuth };
