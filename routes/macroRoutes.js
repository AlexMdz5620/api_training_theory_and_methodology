import express from 'express'
import {
    createMacro,
    getAllMacros,
    getMacroByName,
    updateMacro,
    softDeleteMacro,
    deleteMacro
} from '../controllers/macroController.js'

const macroRoute = express.Router()

macroRoute.route('/')
    .post(createMacro)
    .get(getAllMacros)

macroRoute.route('/:name_URL')
    .get(getMacroByName)
    .put(updateMacro)

macroRoute.route('/delete/:name_URL')
    .put(softDeleteMacro)
    .delete(deleteMacro)

export default macroRoute