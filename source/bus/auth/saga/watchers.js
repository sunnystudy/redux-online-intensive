//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from "../types";

//Workers
import { login } from './workers';
import { signup } from './workers';

function* watchLogin () {
    yield takeEvery(types.LOGIN_ASYNC, login);
}

function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchLogin)]);
}
