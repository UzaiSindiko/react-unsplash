const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const collectionSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    photosId: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Collection', collectionSchema)
