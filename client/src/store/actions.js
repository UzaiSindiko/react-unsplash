import { INCREMENT, DECREMENT, 
         GET_PHOTOS, GET_ONE_PHOTO, GET_BG, 
         LOGIN, IS_LOGIN, LOGOUT,
         SHOW, ADD, REMOVE } from './const'

import axios from '../apis/axios'
import Swal from 'sweetalert2'

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

// PHOTOS

// export const getPhotos = () => {
//     return async dispatch => {

//         Swal.showLoading()
//         try {
//             const {data} = await axios({
//                 method: 'get',
//                 url: `/apis?per_page=30`
//             })
//             Swal.close()
//             dispatch ({
//                 type: GET_PHOTOS,
//                 photos: data
//             })
//         } catch (error) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: error.response.data.message,
//             })
//         }

//     }
// }

export function getPhotos(){
    
    return async function actions(dispatch){
        
        Swal.showLoading()
        try {
            const {data} = await axios({
                method: 'get',
                url: `/apis?per_page=30`
            })
            Swal.close()
            dispatch ({
                type: GET_PHOTOS,
                photos: data
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
            })
        }
        
    }
}

export const searchPhotos = (q) => async dispatch => {
    Swal.showLoading()
    try {
        const {data} =  await axios({
            method: 'get',
            url: `/apis/search?query=${q}&per_page=30`
          })
        Swal.close()
        dispatch ({
            type: GET_PHOTOS,
            photos: data.results
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const getPhotosById = (id) => async dispatch => {
    Swal.showLoading()
    try {
        const { data } = await axios({
            method: 'get',
            url: `/apis/${id}`
        })
    Swal.close()
    dispatch ({
        type: GET_ONE_PHOTO,
        pic: data.urls.raw,
        profilePic: data.user.profile_image.medium,
        name: data.user.username,
        linkDownload: data.links.download + '?force=true'
    })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const getBg = () => async dispatch =>{
    Swal.showLoading()
    try {
    let random = Math.round(Math.random() * 25)
    const { data }  = await axios({
        method: 'get',
        url: '/apis/search?query=wallpapers&per_page=30'
    })
    Swal.close()
    dispatch ({
        type: GET_BG,
        bgImage: {
            backgroundImage: `url("${data.results[random].urls.raw}")`
        }
    })
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

// USERS

export const login = ({ email, password, history, location }) => async dispatch => {
    Swal.showLoading()
    try {
        const { data }  = await axios({
            method: 'post',
            url: '/users/login',
            data: {
                email,
                password
            }
        })
        Swal.close()
        dispatch ({
            type: LOGIN,
            token : data.token
        })
        const lastPath = location.state ? location.state.from : '/'
        history.replace(lastPath)
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}


export const register = ({ email, password, history, location }) => async dispatch => {
    Swal.showLoading()
    try {
        const { data }  = await axios({
            method: 'post',
            url: '/users/register',
            data: {
                email,
                password
            }
        })
        Swal.close()
        dispatch ({
            type: LOGIN,
            token : data.token
        })
        const lastPath = location.state ? location.state.from : '/'
        history.replace(lastPath)
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const isLogin = () => {
    return {
        type: IS_LOGIN
    }
}

export const showCol = () => async dispatch => {
    Swal.showLoading()
    try {
        const { data }  = await axios({
            method: 'get',
            url: '/collections',
            headers : {
                token: localStorage.getItem('token')
            }
        })
        Swal.close()
        dispatch ({
            type: SHOW,
            photos : data
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const addCol = ({id, url}) => async dispatch => {
    Swal.showLoading()
    try {
        await axios({
            method: 'post',
            url: `/collections/${id}`,
            headers : {
                token: localStorage.getItem('token')
            },
            data: {
                url
            }
        })
        const { data }  = await axios({
            method: 'get',
            url: '/collections',
            headers : {
                token: localStorage.getItem('token')
            }
        })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Success Add To Your Collection',
            showConfirmButton: false,
            timer: 1500
          })
        dispatch ({
            type: ADD,
            photos : data
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const removeCol = (id) => async dispatch => {
    Swal.showLoading()
    try {
        await axios({
            method: 'delete',
            url: `/collections/${id}`,
            headers : {
                token: localStorage.getItem('token')
            }
        })
        const { data }  = await axios({
            method: 'get',
            url: '/collections',
            headers : {
                token: localStorage.getItem('token')
            }
        })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Success Remove From Your Collection',
            showConfirmButton: false,
            timer: 1500
          })
        dispatch ({
            type: REMOVE,
            photos : data
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
        })
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}