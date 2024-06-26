import mongoose from "mongoose";

const exerciseTrenSupSchema = mongoose.Schema({
    muscle_group: {
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
        type: String,
        required: true
    },
    implements: {
        type: String
    },
    image: {
        type: String
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
})

export default mongoose.model('ExerciseTrenSup', exerciseTrenSupSchema)