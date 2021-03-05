import {createStore, combineReducers} from 'redux'
import authenticationReducer from './reducers/authentication'
import drawersReducer from './reducers/drawers'

const reducers = {
    authentication: authenticationReducer,
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

store.subscribe(_ => {
	localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store
