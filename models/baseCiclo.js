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
    data: {
        type: Object,
        required: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
})

export default mongoose.model('BaseCiclo', baseCicloSchema)