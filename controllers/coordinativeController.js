import {
    Adaptation,
    Balance,
    Differentation,
    GenDynCoor,
    Orientation,
    Reaction,
    Rhythm
} from "../models/Coordinative.js"

// Create
const createCoordinative = async (req, res) => {
    const coordinative = req.body;
    let newCoordinative;

    switch (coordinative.type) {
        case 'adaptacion':
            newCoordinative = Adaptation;
            break;
        case 'balance':
            newCoordinative = Balance;
            break;
        case 'diferenciacion':
            newCoordinative = Differentation;
            break;
        case 'coordinacion-dinamica-general':
            newCoordinative = GenDynCoor;
            break;
        case 'orientacion':
            newCoordinative = Orientation;
            break;
        case 'reaccion':
            newCoordinative = Reaction;
            break;
        case 'ritmo':
            newCoordinative = Rhythm;
            break;
        default:
            return res.status(400).json({ msg: "Tipo no válido" });
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
    let Model;
  
    switch (name_URL) {
        case 'adaptacion':
            Model = Adaptation;
            break;
          case 'balance':
            Model = Balance;
            break;
          case 'diferenciacion':
            Model = Differentation;
            break;
          case 'coordinacion-dinamica-general':
            Model = GenDynCoor;
            break;
          case 'orientacion':
            Model = Orientation;
            break;
          case 'reaccion':
            Model = Reaction;
            break;
          case 'ritmo':
            Model = Rhythm;
            break;
        default:
            return res.status(400).send('Nombre no válido');
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
    let Model;

    switch (name_URL) {
        case 'adaptacion':
            Model = Adaptation;
            break;
        case 'balance':
            Model = Balance;
            break;
        case 'diferenciacion':
            Model = Differentation;
            break;
        case 'coordinacion-dinamica-general':
            Model = GenDynCoor;
            break;
        case 'orientacion':
            Model = Orientation;
            break;
        case 'reaccion':
            Model = Reaction;
            break;
        case 'ritmo':
            Model = Rhythm;
            break;
        default:
            return res.status(400).json({ msg: "Nombre no válido" });
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
    let Model;

    switch (name_URL) {
        case 'adaptacion':
            Model = Adaptation;
            break;
        case 'balance':
            Model = Balance;
            break;
        case 'diferenciacion':
            Model = Differentation;
            break;
        case 'coordinacion-dinamica-general':
            Model = GenDynCoor;
            break;
        case 'orientacion':
            Model = Orientation;
            break;
        case 'reaccion':
            Model = Reaction;
            break;
        case 'ritmo':
            Model = Rhythm;
            break;
        default:
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
    let Model;

    switch (name_URL) {
        case 'adaptacion':
            Model = Adaptation;
            break;
        case 'balance':
            Model = Balance;
            break;
        case 'diferenciacion':
            Model = Differentation;
            break;
        case 'coordinacion-dinamica-general':
            Model = GenDynCoor;
            break;
        case 'orientacion':
            Model = Orientation;
            break;
        case 'reaccion':
            Model = Reaction;
            break;
        case 'ritmo':
            Model = Rhythm;
            break;
        default:
            return res.status(400).json({ msg: "Nombre no válido" });
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