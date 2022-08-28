import { SocketTicker, Ticker } from 'interfaces/Ticker';
import { EventChannel, Task } from 'redux-saga'
import { put, delay, call, CallEffect, cancelled, CancelledEffect, take, fork, cancel } from 'redux-saga/effects'
import { getMiniTickerStream, getSymbol24hr } from 'services/satang'
import { setTicker, setTickerFromSocket, startFetch, stopFetch } from './slice'

export function* fetch(symbol: string) {
  try {
    while (true) {
      const data: Ticker = yield call(getSymbol24hr, symbol);
      yield put(setTicker(data));
      const fiveSeconds: number = 5000;
      yield delay(fiveSeconds);
    }
  } finally {
    const isCancelled: CancelledEffect = yield cancelled();
    if (isCancelled) {
      console.log('fetch cancelled');
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

export function* fetchWithSocket(symbol: string) {
  const chan: EventChannel<SocketTicker[]> = yield call(getMiniTickerStream);
  try {
    while (true) {
      const data: SocketTicker[] = yield take(chan);
      const ticker = data.find(t => t.s === symbol.toLowerCase());
      if (!ticker) continue;
      yield put(setTickerFromSocket(ticker));
    }
  } finally {
    const isCancelled: EventChannel<boolean> = yield cancelled();
    if (isCancelled) {
      chan.close();
      console.log('socket cancelled');
    }
  }
}

export function* watchFetchWithSocket() {
  while (true) {
    const { payload } = yield take(startFetch);
    const task: Task = yield fork(fetchWithSocket, payload);

    yield take(stopFetch);
    yield cancel(task);
  }
}

export default {
  fetch,
  watchPeriodicFetch,
  fetchWithSocket,
  watchFetchWithSocket,
}