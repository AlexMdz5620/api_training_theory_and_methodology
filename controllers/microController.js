import { Micro } from "../models/Ciclos.js"

// Create
const createMicro = async (req, res) => {
    try {
        const newMicro = await Micro.create(req.body)
        if(newMicro) {
            res.status(201).json({
                msg: 'Create new microciclo',
                micro: newMicro
            })
        } else {
            res.status(400).json({
                msg: 'Failed to create Microciclo'
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
const getAllMicros = async (req, res) => {
    try {
        const getAllMicros = await Micro.find()
        if(getAllMicros && getAllMicros.length > 0) {
            res.status(200).json({
                msg: 'Get all microciclos',
                micro: getAllMicros
                })
        } else {
            res.status(404).json({
                msg: 'No Microciclo found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

const getMicroByName = async (req, res) => {
    try {
        const nameMicro = req.params.name_URL
        const getMicroByName = await Micro.findOne({ name_URL: nameMicro })
        if(getMicroByName){
            res.status(200).json({
                msg: 'Get microciclo by name',
                micro: getMicroByName
                })
        } else {
            res.status(404).json({
                msg: 'Microciclo not found'
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
const updateMicro = async (req, res) => {
    try {
        const nameMicro = req.params.name_URL
        const microUpdate = await Micro.findOneAndUpdate({ name_URL: nameMicro }, req.body)
        if(microUpdate){
            res.status(200).json({
                msg: 'Microciclo updated',
                micro: microUpdate
                })
        } else {
            res.status(404).json({
                msg: 'Microciclo not found'
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
const softDeleteMicro = async (req, res) => {
    try {
        const nameMicro = req.params.name_URL
        const microUpdate = await Micro.findOneAndUpdate({ name_URL: nameMicro}, {isDeleted: true})
        if(microUpdate){
            res.status(200).json({
                msg: 'Microciclo deleted',
                micro: microUpdate
            })
        } else {
            res.status(404).json({
                msg: 'Microciclo not found'
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
const deleteMicro = async (req, res) => {
    try {
        const nameMicro = req.params.name_URL
        const deleteMicro = await Micro.findOneAndDelete({ name_URL: nameMicro })
        if(deleteMicro){
            res.status(200).json({
                msg: 'Microciclo deleted',
                micro: deleteMicro
                })
        } else {
            res.status(404).json({
                msg: 'Microciclo not found'
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
    createMicro,
    getAllMicros,
    getMicroByName,
    updateMicro,
    softDeleteMicro,
    deleteMicro
}