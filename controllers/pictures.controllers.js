const router = require("express").Router()
const Picture = require('./../models/Pictures.model')

const newPicture = (req, res, next) => {
    const { name, photo, height, width, prize, colors } = req.body

    Picture
        .create({ name, photo, height, width, prize, colors })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const getAllPictures = (req, res, next) => {

    Picture
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOnePicture = (req, res, next) => {

    const { picture_id } = req.params

    Picture
        .findById(picture_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const filteredPictures = (req, res, next) => {

    const { height, width, colors } = req.body
    const filters = {}

    if (height) {
        filters.height = height;
    }

    if (width) {
        filters.width = width;
    }

    if (colors) {
        filters.colors = { $in: colors.split(',') };
    }

    Picture.find(filters)
        .then((paintings) => {
            res.json(paintings);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Error en el servidor' });
        });
}

const deletePicture = async (req, res, next) => {
    const { picture_id } = req.params;

    try {
        await Picture.findByIdAndDelete(picture_id);
        res.sendStatus(202);
    } catch (error) {
        console.error("Error deleting picture:", error);
        next(error);  // Pasa el error a next para que lo maneje el middleware de errores
    }
};

module.exports = {
    newPicture,
    getAllPictures,
    getOnePicture,
    filteredPictures,
    deletePicture
}