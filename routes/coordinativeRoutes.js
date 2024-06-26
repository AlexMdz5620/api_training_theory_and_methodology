import express from 'express'
import {
    createCoordinative,
    getCoordinativeByName_URL,
    updateCoordinative,
    softDeleteCoordinative,
    deleteCoordinative
} from '../controllers/coordinativeController.js'

const coordinativeRoute = express.Router()

coordinativeRoute.route('/')
    .post(createCoordinative)

coordinativeRoute.route('/:name_URL')
    .get(getCoordinativeByName_URL)
    .put(updateCoordinative)

coordinativeRoute.route('/delete/:name_URL')
    .put(softDeleteCoordinative)
    .delete(deleteCoordinative);

export default coordinativeRoute