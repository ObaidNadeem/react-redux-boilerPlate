import * as ACTION_TYPES from '../action/action_types'

const initialState = {
    user_input : ""
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.USER_INPUT:
            return{
                ...state,
                user_input : action.payload
            }
        default:
            return state
        
    }
}

export default userReducer;