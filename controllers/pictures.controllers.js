const router = require("express").Router()
const Picture = require('./../models/Pictures.model')
const generateName = require('./../modules/nameGenerator'); // Ajusta la ruta según tu estructura de carpetas

const newPicture = async (req, res, next) => {
    try {
        const { photo, height, width, prize, colors, materials, sold } = req.body;
        console.log(req.body)

        // Obtén la lista de nombres existentes en la base de datos
        const existingNames = await Picture.distinct('name');

        // Genera un nuevo nombre basado en los materiales y nombres existentes
        const generatedName = generateName("Pintura", materials, existingNames);

        // Crea la nueva imagen utilizando el nombre generado
        await Picture.create({ name: generatedName, photo, height, width, prize, colors, materials, sold });

        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
};


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

const getPicturesPhotos = (req, res, next) => {
    const picturesPromise = Picture.find({ sold: false });

    picturesPromise
        .then((pictures) => {
            const allItems = pictures.map(item => ({ photo: item.photo, product: item.product, sold: item.sold, _id: item._id }));
            res.json(allItems);
        })
        .catch(err => {
            next(err);
        });
};

const editPicture = async (req, res, next) => {
    try {
        const { _id, photo, height, width, prize, colors, materials, sold } = req.body;

        // Encuentra la imagen por su ID
        const picture = await Picture.findById(_id);

        // Verifica si los materiales se han cambiado
        if (JSON.stringify(picture.materials) !== JSON.stringify(materials)) {
            // Los materiales han sido modificados, genera un nuevo nombre basado en los nuevos materiales
            const existingNames = await Picture.distinct('name');
            const generatedName = generateName("Pintura", materials, existingNames);

            // Actualiza el nombre de la imagen
            await Picture.findByIdAndUpdate(_id, { name: generatedName });
        }

        // Actualiza los otros campos de la imagen
        await Picture.findByIdAndUpdate(_id, { photo, height, width, prize, colors, materials, sold });

        res.status(201).send("Picture edited successfully");
    } catch (error) {
        next(error);
    }
};


const deletePicture = async (req, res, next) => {
    const { picture_id } = req.params;

    Picture
        .findByIdAndDelete(picture_id)
        .then(() => res.sendStatus(202))
        .catch(err => next(err))
};

module.exports = {
    newPicture,
    getAllPictures,
    getOnePicture,
    filteredPictures,
    getPicturesPhotos,
    editPicture,
    deletePicture
}