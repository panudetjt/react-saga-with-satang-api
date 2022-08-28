import { Task } from 'redux-saga'
import { put, takeEvery, delay, call, select, CallEffect, cancelled, CancelledEffect, take, fork, cancel, TakeEffect } from 'redux-saga/effects'
import { getSymbol24hr } from 'services/satang'
import { setTicker, startFetch, stopFetch } from './slice'

export function* fetch(symbol: string) {
  try {
    while (true) {
      const data: CallEffect = yield call(getSymbol24hr, symbol);
      yield put(setTicker(data));
      const fiveSeconds: number = 5000;
      yield delay(fiveSeconds);
    }
  } finally {
    const isCancelled: CancelledEffect = yield cancelled();
    if (isCancelled) {
      console.log('cancelled');
    }
  }
}

export function* watchPeriodicFetch() {
  while (true) {
    const { payload } = yield take(startFetch);
    const task: Task = yield fork(fetch, payload);
    yield take(stopFetch);
    yield cancel(task);
  }
}

export default {
  fetch,
  watchPeriodicFetch,
}