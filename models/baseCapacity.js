import mongoose from "mongoose"

const baseCapacitySchema = mongoose.Schema({
    type:{
        type:String
    },
    name:{
        type: String,
        required: true
    },
    name_URL: {
        type: String
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

export default mongoose.model('BaseCapacity', baseCapacitySchema)