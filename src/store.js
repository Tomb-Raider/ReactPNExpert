import {createStore, combineReducers} from 'redux'
import authenticationReducer from './reducers/authentication'

const reducers = {
    authentication: authenticationReducer,
}

const store = createStore(combineReducers(reducers))

export default store
