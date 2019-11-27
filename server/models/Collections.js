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
    }
}, { timestamps: true })

module.exports = mongoose.model('Wishlist', collectionSchema)
