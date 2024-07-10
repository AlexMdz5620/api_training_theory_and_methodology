import express from 'express'
import {
    createConditional,
    getAllConditional,
    getConditionalByType,
    getConditionalByName,
    updateConditional,
    softDeleteConditional,
    deleteConditional
} from '../controllers/conditionalController.js'

const conditionalRoute = express.Router()

conditionalRoute.route('/')
    .post(createConditional)
    .get(getAllConditional)

conditionalRoute.route('/:type')
    .get(getConditionalByType)

conditionalRoute.route('/:type/:name_URL')
    .get(getConditionalByName)
    .put(updateConditional)

conditionalRoute.route('/:type/delete/:name_URL')
    .put(softDeleteConditional)
    .delete(deleteConditional)


export default conditionalRoute