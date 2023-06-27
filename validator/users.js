const { check, validationResult } = require('express-validator');

const validatorCreateUser = [
    check("name", "nombre es requerido")
    .exists()
    .trim()
    .isLength({min: 2, max: 90}),

    check("email")
    .exists()
    .isEmail().withMessage("Debe ingresar un email valido")
    .normalizeEmail(),

    check("password", "password es requerido")
    .exists()
    .isLength({ min: 8 }).withMessage("Password debería tener minimo 8 caracteres")
    .trim(),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const valores = req.body
            const validaciones = errors.array()
            res.render('pages/signUp', {validaciones:validaciones, valores: valores})
        }else{
           next()
        }
    }
]

module.exports = { validatorCreateUser};