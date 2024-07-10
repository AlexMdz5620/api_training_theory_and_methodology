import express from 'express'
import {
    createDynamic,
    getAllDynamics,
    getDynamicsByType,
    getDynamicByName,
    updateDynaic,
    softDeleteDynamic,
    deleteDynamicByName
} from '../controllers/dynamicController.js'

const dynamicRoute = express.Router()

dynamicRoute.route('/')
    .post(createDynamic)
    .get(getAllDynamics)

dynamicRoute.route('/:type')
    .get(getDynamicsByType)

dynamicRoute.route('/:type/:name')
    .get(getDynamicByName)
    .put(updateDynaic)

dynamicRoute.route('/:type/delete/:name')
    .put(softDeleteDynamic)
    .delete(deleteDynamicByName)

export default dynamicRoute