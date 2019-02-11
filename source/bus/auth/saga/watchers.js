//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from "../types";

//Workers
import { authenticate, initialize, login, logout, signup } from './workers';

function* watchAuthenticate () {
    yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}

function* watchInitialize () {
    yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}

function* watchLogin () {
    yield takeEvery(types.LOGIN_ASYNC, login);
}

function* watchLogout () {
    yield takeEvery(types.LOGOUT_ASYNC, logout);
}

function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchLogin), call(watchLogout), call(watchAuthenticate), call(watchInitialize)]);
}
