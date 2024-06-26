import { Macro } from "../models/Ciclos.js"

// Create
const createMacro = async (req, res) => {
    try {
        const newMacro = await Macro.create(req.body)
        if(newMacro) {
            return res.status(201).json({
                msg: 'Create new macrociclo',
                macro: newMacro
            })
        } else {
            return res.status(400).json({
                msg: 'Failed to create macrociclo'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}
// Read
const getAllMacros = async (req, res) => {
    try {
        const macros = await Macro.find()
        if(macros && macros.length > 0) {
            return res.status(200).json({
                msg: 'Get all macros',
                macros: macros
                })
        } else {
            return res.status(404).json({
                msg: 'No macros found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

const getMacroByName = async (req, res) => {
    try {
        const nameMacro = req.params.name_URL
        const getMacroByName = await Macro.findOne({ name_URL: nameMacro })
        if(getMacroByName){
            res.status(200).json({
                msg: 'Get macrociclo by name',
                macro: getMacroByName
                })
        } else {
            res.status(404).json({
                msg: 'Macrociclo not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

// Update
const updateMacro = async (req, res) => {
    try {
        const nameMacro = req.params.name_URL
        const macroUpdate = await Macro.findOneAndUpdate({ name_URL: nameMacro }, req.body)
        if(macroUpdate){
            res.status(200).json({
                msg: 'Macrociclo updated',
                macro: macroUpdate
                })
        } else {
            res.status(404).json({
                msg: 'Macrociclo not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

// soft delete
const softDeleteMacro = async (req, res) => {
    try {
        const nameMacro = req.params.name_URL
        const softDeleteMacro = await Macro.findOneAndUpdate({ name_URL: nameMacro}, {isDeleted: true})
        if(softDeleteMacro){
            return res.status(200).json({
                msg: 'Macrociclo deleted',
                macro: softDeleteMacro
            })    
        } else {
            return res.status(404).json({
                msg: 'Macrociclo not found'
            })
        }
        
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

// Delete
const deleteMacro = async (req, res) => {
    try {
        const nameMacro = req.params.name_URL
        const deleteMacro = await Macro.findOneAndDelete({ name_URL: nameMacro })
        if(deleteMacro){
            res.status(200).json({
                msg: 'Macrociclo deleted',
                macro: deleteMacro
                })
        } else {
            res.status(404).json({
                msg: 'Macrociclo not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

export {
    createMacro,
    getAllMacros,
    getMacroByName,
    updateMacro,
    softDeleteMacro,
    deleteMacro
}