import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import customMiddleware from './customMiddleware'

const initCount = {
    count: 0
}

function counter(state = initCount, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 }
      case 'DECREMENT':
        return { count: state.count - 1 }
      default:
        return state
    }
}

const initPicture = {
    bgImage: {
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR0MSXI_hwdeKRskkXc20kuHaPm_hAOvGGqtdwsjcsEE_qUxnu")`
    },
    photos1: [],
    photos2: [],
    photos3: [],
    pic: '',
    profilePic: '',
    name: '',
    linkDownload: '',
}

function picture(state = initPicture, action){
    switch (action.type) {
        case 'GET_BG':
            return {
                ...state,
                bgImage: action.bgImage
            }
        case 'GET_PHOTOS':
            return {
                ...state,
                photos1: action.photos.slice(0,10),
                photos2: action.photos.slice(10,20),
                photos3: action.photos.slice(20,30)
            }
        case 'GET_ONE_PHOTO':
            return {
                ...state,
                pic: action.pic,
                profilePic: action.profilePic,
                name: action.name,
                linkDownload: action.linkDownload
            }
        default:
            return state
    }
}

const initUsers = {
    isLogin : false
}

function users( state = initUsers, action ){
    switch (action.type) {
        case 'LOGIN':
            if(action.token)
            localStorage.setItem('token', action.token)
            return {
                ...state,
                isLogin: true
            }
        case 'IS_LOGIN':
                return {
                    ...state,
                    isLogin: true
                }
        case 'LOGOUT':
            localStorage.removeItem('token')
            return {
                ...state,
                isLogin: false
            }
        default:
            return state
    }
}

const initCollection = {
    photos: [],
}

function collection ( state = initCollection, action ){
    switch (action.type) {
        case 'SHOW':
            return {
                ...state,
                photos: action.photos
            }
        case 'ADD':
            return {
                ...state,
                photos: action.photos
            }
        case 'REMOVE':
            return {
                ...state,
                photos: action.photos
            }
    
        default:
            return state
    }
}

const rootReducer = combineReducers({ counter, picture, users, collection })

const store = createStore(rootReducer, applyMiddleware(customMiddleware))

export default store