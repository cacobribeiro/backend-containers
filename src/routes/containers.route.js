// Router do Express
const router = require('express').Router();
// Middleware capaz de pegar o req antes da chama API
const validate = require('../middleware/requestValidation')
// Schema para validação com Joi.
const containerValidation = require('../helpers/schema/containersValidation')
// Controller da rota Auth
const containersController = require('../controllers/containers');

// Definição das rotas e os controllers correspondentes.
router.get('/all' , containersController.getAll);

router.get('/:containerId', validate(containerValidation.get) , containersController.get);

router.patch('/', validate(containerValidation.patch) , containersController.patch);

router.post('/', validate(containerValidation.post) , containersController.post);

router.delete('/', validate(containerValidation.delete) , containersController.delete);


module.exports = router;