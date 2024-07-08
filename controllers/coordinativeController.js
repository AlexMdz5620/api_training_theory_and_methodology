import {
    Synchronization,
    Orientation,
    Reaction,
    Differentation,
    Balance,
    Rhythm,
    Adaptation
} from "../models/Coordinative.js"

const models = {
    sincronizacion: Synchronization,
    orientacion: Orientation,
    reaccion: Reaction,
    diferenciacion: Differentation,
    equilibrio: Balance,
    ritmo: Rhythm,
    adaptacion: Adaptation
}

// Create
const createCoordinative = async (req, res) => {
    const { type, ...coordinative } = req.body;
    const newCoordinative = models[type]

    if (!newCoordinative) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        if(newCoordinative){
            const coordinativeCreated = await newCoordinative.create(coordinative);
            res.status(201).json({ 
                msg: "Coordinative created successfully",
                coordinative: coordinativeCreated
            });
        } else {
            res.status(400).json({ msg: "Error creating coordinative" });
        }
    } catch (err) {
        res.status(500).json({
            msg: 'Error',
            error: err
        });
    }
};
// Read
// Get all cordinative by Name_URL
const getCoordinativeByName_URL = async (req, res) => {
    const { name_URL } = req.params;
    const Model = models[name_URL]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }
  
    try {
      const capacidades = await Model.findOne({ name_URL: name_URL })
      if (capacidades) {
        return res.status(200).json({
            msg: "Capacidades encontradas",
            coordinative: capacidades
          })
      } else {
        return res.status(404).json({
            msg: `No se encontro ${Model.name}`
        });
      }
      ;
    } catch (err) {
      res.status(500).json({
        msg: 'Error',
        error: err
    });
    }
  };

// Update
const updateCoordinative = async (req, res) => {
    const { name_URL } = req.params;
    const coordinative = req.body;
    const Model = models[name_URL]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const updatedCoordinative = await Model.findeOneAndUpdate({ name_URL: name_URL }, coordinative);
        if (updatedCoordinative) {
            return res.status(200).json({
                msg: "Conditional updated successfully",
                coordinative: updatedCoordinative
            });
        } else {
            return res.status(404).json({
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
const softDeleteCoordinative = async (req, res) => {
    const { name_URL } = req.params;
    const Model = models[name_URL]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const softDeleteCoordinative = await Model.findeOneAndUpdate({ name_URL: name_URL}, { isDeleted: true });
        if (softDeleteCoordinative) {
            return res.status(200).json({
                msg: `Coordinative delete successfully`,
                conditional: softDeleteCoordinative
            });
        } else {
            return res.status(404).json({
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
const deleteCoordinative = async (req, res) => {
    const { name_URL } = req.params;
    const Model = models[name_URL]

    if (!Model) {
        return res.status(400).json({ msg: "Invalid capacity" });
    }

    try {
        const deletedCoordinative = await Model.findeOneAndDelete({ name_URL: name_URL });
        if (deletedCoordinative) {
            return res.status(200).json({
                msg: "Conditional deleted successfully",
                conditional: deletedCoordinative
            });
        } else {
            return res.status(404).json({
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
    createCoordinative,
    getCoordinativeByName_URL,
    updateCoordinative,
    softDeleteCoordinative,
    deleteCoordinative
}