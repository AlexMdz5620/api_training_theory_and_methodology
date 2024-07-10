import baseVolDistribution from '../models/baseVolDistribution.js';
import {
    SumVertSup100,
    SumVertEqu100,
    SystConsts
} from '../models/Dynamic.js'

const models = {
    'sum-vert-sup-100': SumVertSup100,
    'sum-vert-equ-100': SumVertEqu100,
    'sist-consts': SystConsts
}

// create
const createDynamic = async (req, res) => {
    const { type, ...dynamic } = req.body;
    let newDynamic = models[type]

    if (!newDynamic) {
        return res.status(400).json({ msg: "Invalid dynamic" });
    }

    try {
        if(newDynamic){
            const dynamicCreated = await newDynamic.create(dynamic);
            res.status(200).json({
                msg: 'Successfully created dynamics',
                dynamic : dynamicCreated
            })
        } else {
            res.status(400).json({ msg: "Error al crear dinámica" });
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Error',
            error: err
        })
    }
}
// read
// Get All Dynamics
const getAllDynamics = async (req, res) => {
    try {
        const dynamic = await baseVolDistribution.find();
        return res.status(200).json({
            msg: "Dynamics found successfully",
            dynamic
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        });
    }
};
// get dynamics by type
const getDynamicsByType = async (req, res) => {
    const { type } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const dynamics = await Model.find()
        if(dynamics && dynamics.length > 0){
            return res.status(200).json({
                msg: 'Dynamics found successfully',
                dynamics: dynamics
            })
        } else {
            return res.status(404).json({
                msg: 'Dynamics not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Error',
            error : err
        })
    }
}
// get dynamic by name
const getDynamicByName = async (req, res) => {
    const { type, name } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const dynamicByName = await Model.findOne({ name: name })
        if(dynamicByName){
            return res.status(200).json({
                msg: 'Dynamic found successfully',
                dynamic: dynamicByName
            })
        } else {
            return res.status(404).json({
                msg: 'Dynamic not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Error',
            error: err
        })
    }
}
// update
const updateDynaic = async (req, res) => {
    const { type, name } = req.params;
    const dynamic = req.body;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const dynamicUpdate = await Model.findOneAndUpdate({name: name}, dynamic)
        if(dynamicUpdate) {
            return res.status(200).json({
                msg: 'Dynamica updated correctly',
                dynamic: dynamicUpdate
            })
            
        } else {
            return res.status(400).json({
                msg: 'Failed to update dynamics'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Error',
            error: err
        })
    }
}

// soft-delete
const softDeleteDynamic = async (req, res) => {
    const { type, name } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const dynamicSoftDelete = await Model.findOneAndUpdate({name: name}, { isDeleted: true })
        if(dynamicSoftDelete) {
            return res.status(200).json({
                msg: 'Dynamica soft-delete correctly',
                dynamic: dynamicSoftDelete
            })
        } else {
            return res.status(400).json({
                msg: 'Failed to deleted dynamics'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Error',
            error: err
        })
    }
}
// delete
const deleteDynamicByName = async (req, res) => {
    const { type, name } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const deleteDynamic = await Model.findOneAndDelete({ name: name })
        if(deleteDynamic){
            return res.status(200).json({
                msg: 'Dynamic delete successfully',
                dynamic: deleteDynamic
            })
        } else{
            return res.status(400).json({
                msg: 'Dynamic do not delete'
            })
        }
    } catch (err) {
        res.status(500).json({
            msg_error: 'Cannot remove dynamics',
            err
        })
    }
}

export {
    createDynamic,
    getAllDynamics,
    getDynamicsByType,
    getDynamicByName,
    updateDynaic,
    softDeleteDynamic,
    deleteDynamicByName
}