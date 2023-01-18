import {
    Fetch_User_Request,
    Fetch_User_Success,
    Fetch_User_Fail
} from './types'
export const reducer = (
    state = {
        loading: false,
        user: {},
        error: ''
    },
    action
) => {
    switch (action.type) {
        case Fetch_User_Request:
            return {
                ...state,
                loading: true
            }
        case Fetch_User_Success:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case Fetch_User_Fail:
            return {
                loading: false,
                user: {},
                error: action.payload
            }
        default: return state
    }
};
