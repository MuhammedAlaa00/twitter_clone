import { getDoc } from "firebase/firestore";
import {
    Fetch_User_Request,
    Fetch_User_Success,
    Fetch_User_Fail
} from './types'
const fetchUserRequest = () => {
    return {
        type: Fetch_User_Request
    }
}
const fetchUserSuccess = (user) => {
    return {
        type: Fetch_User_Success,
        payload: user
    }
}
const fetchUserFailure = (error) => {
    return {
        type: Fetch_User_Fail,
        payload: error
    }
}
export const FetchUsers = (dispatch, id) => {
    if (!id) dispatch(fetchUserRequest)
    else {
        getDoc(id).then(res => {
            return dispatch(fetchUserSuccess(res.data()))
        }).catch(err => {
            return dispatch(fetchUserFailure(err))
        })
    }
}