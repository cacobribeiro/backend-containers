// Router do Express
const router = require('express').Router();
// Middleware capaz de pegar o req antes da chama API
const validate = require('../middleware/requestValidation')
// Schema para validação com Joi.
const containerValidation = require('../helpers/schema/containersValidation')
// Controller da rota Auth
const containersController = require('../controllers/containers');

// Definição das rotas e os controllers correspondentes.
router.get('/', validate(containerValidation.get) , containersController.get);

router.post('/', validate(containerValidation.post) , containersController.post);

router.patch('/', validate(containerValidation.patch) , containersController.patch);

router.delete('/', validate(containerValidation.delete) , containersController.delete);

module.exports = router;