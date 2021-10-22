const Joi = require('joi');

module.exports = {
    get: {
        body: Joi.object({
            containerId: Joi.string().regex(/[a-z]{4}[0-9]{6}/i).required(),
        }),
    },
    post: {
        body: Joi.object({
            fullName: Joi.string().required(),
            containerId: Joi.string().regex(/[a-z]{4}[0-9]{6}/i).required(),
            type: Joi.number().valid(20, 40).required(),
            status: Joi.string().valid('Cheio', 'Vazio').required(),
            category: Joi.string().valid('Importação', 'Exportação').required(),
        }),
    },

    patch: {
        body: Joi.object({
            fullName: Joi.string(),
            containerId: Joi.string().regex(/[a-z]{4}[0-9]{6}/i).required(),
            type: Joi.number().valid(20, 40),
            status: Joi.string().valid('Cheio', 'Vazio'),
            category: Joi.string().valid('Importação', 'Exportação'),
        }).min(2),
    },

    patch: {
        body: Joi.object({
            containerId: Joi.string().regex(/[a-z]{4}[0-9]{6}/i).required(),
        }),
    },
};
