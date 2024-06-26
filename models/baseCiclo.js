import mongoose from "mongoose"

const baseCicloSchema = mongoose.Schema({
    name:{
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
    author: {
        type: String
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
})

export default mongoose.model('BaseCiclo', baseCicloSchema)