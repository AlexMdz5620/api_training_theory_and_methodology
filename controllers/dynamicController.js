import {
    SumVertSup100,
    SumVertEqu100,
    SystConsts
} from '../models/Dynamic.js'

// create
const createDynamic = async (req, res) => {
    const dynamic = req.body;
    let newDynamic;

    switch (dynamic.type) {
        case 'sum-vert-sup-100':
            newDynamic = SumVertSup100;
            break;
        case 'sum-vert-equ-100':
            newDynamic = SumVertEqu100;
            break;
        case 'sist-consts':
            newDynamic = SystConsts;
            break;
        default:
            return res.status(400).json({ msg: "Tipo no válido" });
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
// get dynamics by type
const getDynamicsByType = async (req, res) => {
    const { type } = req.params;
    let Model;
  
    switch (type) {
      case 'sum-vert-sup-100':
        Model = SumVertSup100;
        break;
      case 'sum-vert-equ-100':
        Model = SumVertEqu100;
        break;
      case 'sist-consts':
        Model = SystConsts;
        break;
      default:
        return res.status(400).send('Tipo no válido');
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
    let Model;
  
    switch (type) {
      case 'sum-vert-sup-100':
        Model = SumVertSup100;
        break;
      case 'sum-vert-equ-100':
        Model = SumVertEqu100;
        break;
      case 'sist-consts':
        Model = SystConsts;
        break;
      default:
        return res.status(400).send('Tipo no válido');
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
    let Model;
  
    switch (type) {
      case 'sum-vert-sup-100':
        Model = SumVertSup100;
        break;
      case 'sum-vert-equ-100':
        Model = SumVertEqu100;
        break;
      case 'sist-consts':
        Model = SystConsts;
        break;
      default:
        return res.status(400).send('Tipo no válido');
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
    let Model;
  
    switch (type) {
      case 'sum-vert-sup-100':
        Model = SumVertSup100;
        break;
      case 'sum-vert-equ-100':
        Model = SumVertEqu100;
        break;
      case 'sist-consts':
        Model = SystConsts;
        break;
      default:
        return res.status(400).send('Tipo no válido');
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
    let Model;
  
    switch (type) {
      case 'sum-vert-sup-100':
        Model = SumVertSup100;
        break;
      case 'sum-vert-equ-100':
        Model = SumVertEqu100;
        break;
      case 'sist-consts':
        Model = SystConsts;
        break;
      default:
        return res.status(400).send('Tipo no válido');
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
    getDynamicsByType,
    getDynamicByName,
    updateDynaic,
    softDeleteDynamic,
    deleteDynamicByName
}