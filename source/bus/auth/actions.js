//Types
import { types } from './types';

export const authActions = {
    //Sync
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
    //Async
    loginAsync: (credentials) => {
        return {
            type:    types.LOGIN_ASYNC,
            payload: credentials,
        };
    },
    signupAsync: (userData) => {
        return {
            type:    types.SIGNUP_ASYNC,
            payload: userData,
        };
    },
};
