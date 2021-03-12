const AUTHENTICATE = 'AUTHENTICATE'

function authenticateAС(token, firstName, lastName, avatar, location) {
    return {
        type: AUTHENTICATE,
        token: token,
        firstName: firstName,
        lastName: lastName,
        avatar: avatar,
        location: location,
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
