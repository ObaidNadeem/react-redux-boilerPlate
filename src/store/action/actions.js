import * as ACTIONS_TYPES from './action_types'

export const SUCCESS = {
    type: ACTIONS_TYPES.SUCCESS
}

export const FAILURE = {
    type: ACTIONS_TYPES.FAILURE
}

export const success = () => {
    return{
    type: ACTIONS_TYPES.SUCCESS
    }
}

export const failure = () => {
    return{
    type: ACTIONS_TYPES.FAILURE
    }
}

export const user_input = (text) => {
    return{
    type: ACTIONS_TYPES.USER_INPUT,
    payload: text
    }
}