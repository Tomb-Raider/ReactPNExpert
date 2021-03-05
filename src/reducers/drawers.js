import {combineReducers} from 'redux'

const OPEN = 'OPEN_'
const CLOSE = 'CLOSE_'
const TOGGLE = 'TOGGLE_'

const LEFT_DRAWER = 'LEFT_DRAWER'
const RIGHT_DRAWER = 'RIGHT_DRAWER'

const initialState = {
    open: window.innerWidth > 1300
}

class DrawerStateManager {
    constructor(side) {
        this.side = side
    }

    openAC = () => {
        return { type: OPEN + this.side }
    }

    closeAC = () => {
        return { type: CLOSE + this.side }
    }

    toggleAC = () => {
        return { type: TOGGLE + this.side }
    }

    reducer = (state = initialState, action) => {
        switch (action.type) {
            case OPEN + this.side:
                return {
                    ...state,
                    open: true,
                }
            case CLOSE + this.side:
                return {
                    ...state,
                    open: false,
                }
            case TOGGLE + this.side:
                return {
                    ...state,
                    open: !state.open,
                }
            default:
                return state
        }
    }
}

export const left_drawer = new DrawerStateManager(LEFT_DRAWER)
export const right_drawer = new DrawerStateManager(RIGHT_DRAWER)

const drawersReducer = combineReducers({
    left: left_drawer.reducer,
    right: right_drawer.reducer,
})

export default drawersReducer
