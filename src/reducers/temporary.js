import { combineReducers } from "redux"
import windowSizeReducer from "./windowSize"

const temporaryReducer = combineReducers({
    windowSize: windowSizeReducer
})

export default temporaryReducer
