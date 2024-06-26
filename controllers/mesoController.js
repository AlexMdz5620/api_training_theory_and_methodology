import { Meso } from "../models/Ciclos.js"

// Create
const createMeso = async (req, res) => {
    try {
        const newMeso = await Meso.create(req.body)
        if(newMeso) {
            res.status(201).json({
                msg: 'Create new Mesociclo',
                meso: newMeso
            })
        } else {
            res.status(400).json({
                msg: 'Failed to create Mesociclo'
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
const getAllMesos = async (req, res) => {
    try {
        const getAllMesos = await Meso.find()
        if(getAllMesos && getAllMesos.length > 0) {
            res.status(200).json({
                msg: 'Get all mesociclos',
                meso: getAllMesos
                })
        } else {
            res.status(404).json({
                msg: 'No mesociclo found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        })
    }
}

const getMesoByName = async (req, res) => {
    try {
        const nameMeso = req.params.name_URL
        const getMesoByName = await Meso.findOne({ name_URL: nameMeso })
        if(getMesoByName){
            res.status(200).json({
                msg: 'Get Mesociclo by name',
                meso: getMesoByName
                })
        } else {
            res.status(404).json({
                msg: 'Mesociclo not found'
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
const updateMeso = async (req, res) => {
    try {
        const nameMeso = req.params.name_URL
        const mesoUpdate = await Meso.findOneAndUpdate({ name_URL: nameMeso }, req.body)
        if(mesoUpdate){
            res.status(200).json({
                msg: 'Mesociclo updated',
                meso: mesoUpdate
                })
        } else {
            res.status(404).json({
                msg: 'Mesociclo not found'
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
const softDeleteMeso = async (req, res) => {
    try {
        const nameMeso = req.params.name_URL
        const mesoUpdate = await Meso.findOneAndUpdate({ name_URL: nameMeso}, {isDeleted: true})
        if(mesoUpdate){
            res.status(200).json({
                msg: 'Mesociclo deleted',
                meso: mesoUpdate
            })
        } else {
            res.status(404).json({
                msg: 'Mesociclo not found'
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
const deleteMeso = async (req, res) => {
    try {
        const nameMeso = req.params.name_URL
        const deleteMeso = await Meso.findOneAndDelete({ name_URL: nameMeso })
        if(deleteMeso){
            res.status(200).json({
                msg: 'Mesociclo deleted',
                meso: deleteMeso
                })
        } else {
            res.status(404).json({
                msg: 'Mesociclo not found'
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
    createMeso,
    getAllMesos,
    getMesoByName,
    updateMeso,
    softDeleteMeso,
    deleteMeso
}