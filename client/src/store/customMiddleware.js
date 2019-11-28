const customMiddleware = store => next => action => {
    if(typeof action === 'function'){
        action(store.dispatch)
    }
    else {
        next(action)
    }
}

export default customMiddleware