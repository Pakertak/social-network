import { authAPI } from "../../api/api";
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: return {
            ...state,
            ...action.payload
        }
        default: return state;
    }
};



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                    ACTIONS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                    THUNKS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                const { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                const message = data.messages.length > 0 ? data.messages[0] : 'Error';
                dispatch(stopSubmit('login', {_error: message}));
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;