const Collection = require('../models/Collections')

class CollectionController {

    static find(req, res, next){
        const userId = req.decode.id
        Collection.find({ userId })
        .then(collections => {
            res.status(200).json(collections)
        })
        .catch(next)
    }

    static add(req, res, next){
        const userId = req.decode.id
        const photosId = req.params.id
        const { url } = req.body
        Collection.findOne({ userId, photosId })
        .then(result =>{
            if(result){
                next({
                    status: 400,
                    msg: 'this photo already in your collection'
                })
            } else {
                Collection.create({ userId, photosId, url })
                    .then(collection => {
                        res.status(201).json(collection)
                    })
                    .catch(next)
            }
        })
        .catch(next)
    }

    static remove(req, res, next){
        console.log(`MASSSSSSSSOOOOOOOOOOOOKKKKKKKKKKK`)
        const { id } = req.params
        Collection.findByIdAndDelete(id)
            .then(collection => {
                res.status(200).json(collection)
            })
            .catch(next)
    }
}

module.exports = CollectionController