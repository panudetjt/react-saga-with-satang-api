import { all, fork } from "redux-saga/effects";
import { watchFetchWithSocket, watchPeriodicFetch } from "routes/symbol-ticker/saga";

export default function* rootSaga() {
    yield all([
        fork(watchFetchWithSocket),
    ])
}