import mongoose from "mongoose";

const sesionSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    name_URL: {
        type: String,
        required: true
    },
    description: {
        type: Array,
        required: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
})

export default mongoose.model('BaseSesion', sesionSchema)