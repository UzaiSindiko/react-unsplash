const unsplashAPI = require('../apis/unsplash')

class UnsplashController {

    static find(req, res, next){
        let { per_page } = req.query
        unsplashAPI({
            method: 'get',
            url: `/photos?per_page=${per_page}`
        })
        .then(({data}) =>{
            res.status(200).json(data)
        })
        .catch(next)
    }

    static search(req, res, next){
        let { query, per_page } = req.query
        unsplashAPI({
            method: 'get',
            url: `/search/photos?query=${query}&per_page=${per_page}`
        })
        .then(({data}) =>{
            res.status(200).json(data)
        })
        .catch(next)
    }

    static findOne(req, res, next){
        let { id } = req.params
        unsplashAPI({
            method: 'get',
            url: `/photos/${id}`
        })
        .then(({data}) =>{
            res.status(200).json(data)
        })
        .catch(next)
    }

}

module.exports = UnsplashController