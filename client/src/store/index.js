import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

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
    photos1: [],
    photos2: [],
    photos3: [],
    pic: '',
    profilePic: '',
    name: '',
    linkDownload: ''
}

function picture(state = initPicture, action){
    switch (action.type) {
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


const rootReducer = combineReducers({ counter, picture })

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store