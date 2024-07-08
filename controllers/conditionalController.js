import {
    Strenght,
    Endurance,
    Velocity,
    Flexibility
} from "../models/Conditional.js"

const models = {
    fuerza: Strenght,
    resistencia: Endurance,
    velocidad: Velocity,
    flexibilidad: Flexibility
}

// Create
const createConditional = async (req, res) => {
    const { type, ...conditional} = req.body;
    const newConditional = models[type]

    if (!newConditional) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        if(newConditional){
            const conditionalCreated = await newConditional.create(conditional);
            return res.status(201).json({ 
                msg: "Conditional created successfully",
                conditional: conditionalCreated
            });
        } else {
            return res.status(400).json({ msg: "Error creating conditional" });
        }
        
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        });
    }
};
// Read
// Get Conditional by Type
const getConditionalByType = async (req, res) => {
    const { type } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }
  
    try {
      const capacidades = await Model.find();
      if (capacidades && capacidades.length > 0) {
        return res.status(200).json({
            msg: "Capacidades encontradas",
            conditional: capacidades
          });
    } else {
        return res.status(404).json({
            msg: 'No se encontraron capacidades de este tipo'
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };

// Get Conditional by Name
const getConditionalByName = async (req, res) => {
    const { type, name_URL } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }
  
    try {
      const capacidadByName = await Model.findOne({ name_URL: name_URL});
      if (capacidadByName) {
        return res.status(200).json({
            msg: "Capacidad encontrada",
            conditional: capacidadByName
        });
    } else {  
        return res.status(404).json({
            msg: 'Capacidad no encontrada'
        });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };
// Update
const updateConditional = async (req, res) => {
    const { type, name_URL } = req.params;
    const conditional = req.body;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const updatedConditional = await Model.findOneAndUpdate({ name_URL: name_URL }, conditional);
        if (updatedConditional) {
            res.status(200).json({
                msg: "Conditional updated successfully",
                conditional: updatedConditional
            });
        } else {
            res.status(404).json({
                msg: "Conditional not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        });
    }
};

// Soft-Delete
const softDeleteConditional = async (req, res) => {
    const { type, name_URL } = req.params;
    let Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const softDeleteConditional = await Model.findOneAndUpdate({ name_URL: name_URL}, { isDeleted: true });
        if (softDeleteConditional) {
            res.status(200).json({
                msg: `Conditional delete successfully`,
                conditional: softDeleteConditional
            });
        } else {
            res.status(404).json({
                msg: "Conditional not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        });
    }
};
// Delete
const deleteConditional = async (req, res) => {
    const { type, name_URL } = req.params;
    const Model = models[type]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const deletedConditional = await Model.findOneAndDelete({ name_URL: name_URL });
        if (deletedConditional) {
            res.status(200).json({
                msg: "Conditional deleted successfully",
                conditional: deletedConditional
            });
        } else {
            res.status(404).json({
                msg: "Conditional not found"
            });
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        });
    }
};

export {
    createConditional,
    getConditionalByType,
    getConditionalByName,
    updateConditional,
    softDeleteConditional,
    deleteConditional
}