import { all, fork } from "redux-saga/effects";
import { watchPeriodicFetch } from "routes/symbol-ticker/saga";

export default function* rootSaga() {
    yield all([fork(watchPeriodicFetch)])
}