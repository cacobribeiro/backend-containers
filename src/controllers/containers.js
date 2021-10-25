const { Container } = require('../../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            const containerInfo = await Container.findAll();

            res.status(200).send({ containerInfo });
        } catch (err) {
            res.status(400).json({ message: err });
        }
    },

    get: async (req, res) => {
        try {
            const { containerId } = req.params;

            const containerInfo = await Container.findOne({ where: { containerId } });

            if (!containerInfo) return res.status(404).send({ error: 'not found' });

            res.status(200).send({ containerInfo });
        } catch (err) {
            res.status(400).json({ message: err });
        }
    },

    post: async (req, res) => {
        try {
            const { fullName, containerId, type, status, category } = req.body;

            const verifyContainer = await Container.findOne({ where: { containerId } });

            if (verifyContainer)
                return res.status(401).send({ message: 'Já existe este containerId.' });

            const containerInfo = await Container.create({
                fullName,
                containerId,
                type,
                status,
                category,
            });

            res.status(200).send({ containerInfo });
        } catch (err) {
            res.status(400).json({ message: err });
        }
    },

    patch: async (req, res) => {
        try {
            const { containerId } = req.body;

            const containerInfo = await Container.update(
                { ...req.body },
                { where: { containerId } }
            );

            res.status(200).send({ containerInfo });
        } catch (err) {
            res.status(400).json({ message: err });
        }
    },

    delete: async (req, res) => {
        try {
            const { containerId } = req.body;

            const containerInfo = await Container.destroy({ where: { containerId } });

            res.status(200).send({ containerInfo });
        } catch (err) {
            res.status(400).json({ message: err });
        }
    },
};
