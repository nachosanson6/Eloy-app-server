const router = require("express").Router();

const {
    newPicture,
    getAllPictures,
    getOnePicture,
    filteredPictures,
    deletePicture
} = require("../controllers/pictures.controllers")

router.post("/newPicture", newPicture)

router.get("/getAllPictures", getAllPictures)

router.get("/getOnePicture/:picture_id", getOnePicture)

router.get("/filteredPictures", filteredPictures)

router.post("/deletePicture/:picture_id", deletePicture)

module.exports = router;