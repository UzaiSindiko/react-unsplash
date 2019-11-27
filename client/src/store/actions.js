import { INCREMENT, DECREMENT, GET_PHOTOS, GET_ONE_PHOTO } from './const'
import axios from '../apis/unsplash'

export function setInc () {
    return {
        type: INCREMENT
    }
}

export function setDec () {
    return {
        type: DECREMENT
    }
}


export const getPhotos = () => async dispatch => {
    const {data} = await axios({
        method: 'get',
        url: `/photos?per_page=30`
      })
    dispatch ({
        type: GET_PHOTOS,
        photos: data
    })
    
}

export const searchPhotos = (q) => async dispatch => {
    const {data} =  await axios({
        method: 'get',
        url: `/search/photos?query=${q}&per_page=30`
      })
    
    dispatch ({
        type: GET_PHOTOS,
        photos: data.results
    })
}

export const getPhotosById = (id) => async dispatch => {
    const { data } = await axios({
            method: 'get',
            url: `/photos/${id}`
        })
        // .then(({data}) => {
        //     setProfilePic(data.user.profile_image.medium)
        //     setPic(data.urls.raw)
        //     SetName(data.user.username)
        //     setLinkDownload(data.links.download + '?force=true')
        // })


        dispatch ({
            type: GET_ONE_PHOTO,
            pic: data.urls.raw,
            profilePic: data.user.profile_image.medium,
            name: data.user.username,
            linkDownload: data.links.download + '?force=true'
        })
}
