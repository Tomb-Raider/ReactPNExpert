import {createStore, combineReducers} from 'redux'
import authenticationReducer from './reducers/authentication'
import temporaryReducer from './reducers/temporary'
import drawersReducer from './reducers/drawers'

import {updateWindowSizeAC} from './reducers/windowSize'

const reducers = {
    authentication: authenticationReducer,
    temporary: temporaryReducer,
    drawers: drawersReducer,
}

function tryLoadOldStore() {
    try {
        return JSON.parse(localStorage.getItem('state')) || undefined
    } catch {
        return undefined
    }
}

const store = createStore(combineReducers(reducers), tryLoadOldStore())

function getPersistentContent() {
    let content = { ...store.getState() }
    delete content.temporary
    return content
}

store.subscribe(_ => {
	localStorage.setItem('state', JSON.stringify(getPersistentContent(store.getState())))
})

window.addEventListener('resize', _ => {
    store.dispatch(updateWindowSizeAC(window.innerWidth, window.innerHeight))
})

export default store
