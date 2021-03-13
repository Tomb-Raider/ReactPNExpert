const AUTHENTICATE = 'AUTHENTICATE'

export function authenticateAС(token, newValues) {
    return {
        ...newValues,
        type: AUTHENTICATE,
        token: token,
    }
}

const initialState = {
    token: null,
    firstName: 'Вероника',
    lastName: 'Малышева',
    avatar: '/accessible/nika.png',
    location: 'Санкт-Петербург',
}

export default function authenticationReducer(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                token: action.token,
                firstName: action.firstName,
                lastName: action.lastName,
                avatar: action.avatar,
                location: action.location,
            }
        default:
            return state
    }
}
