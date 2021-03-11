const AUTHENTICATE = 'AUTHENTICATE'

function authenticateAС(firstName, lastName, avatar, location) {
    return {
        type: AUTHENTICATE,
        firstName: firstName,
        lastName: lastName,
        avatar: avatar,
        location: location,
    }
}

const initialState = {
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
                firstName: action.firstName,
                lastName: action.lastName,
                avatar: action.avatar,
                location: action.location,
            }
        default:
            return state
    }
}
