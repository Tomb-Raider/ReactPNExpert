const UPDATE_WINDOW_SIZE = 'UPDATE_WINDOW_SIZE'

export function updateWindowSizeAC(width, height) {
    return {
        type: UPDATE_WINDOW_SIZE,
        height: height,
        width: width,
    }
}

const initialState = {
    width: window.innerWidth,
    height: window.innerHeight,
}

export default function windowSizeReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_WINDOW_SIZE:
            return {
                ...state,
                width: action.width,
                height: action.height,
            }
        default:
            return state
    }
}
