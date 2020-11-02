import * as ACTION_TYPES from '../action/action_types'

const initialState = {
    stateprop1 : false,
   
}

const stateReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.SUCCESS:
            return {
                ...state,
                stateprop1 : true
            }
        case ACTION_TYPES.FAILURE: 
            return {
                ...state,
                stateprop1 : false
            }
  
        default:
            return state
        
    }
}

export default stateReducer;