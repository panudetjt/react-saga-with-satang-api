import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import symbolTickerReducer from "routes/symbol-ticker/slice";
import rootSaga from 'sagas';

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        symbolTicker: symbolTickerReducer,
    },
    middleware: (getDefaultMiddleware) =>
        [
            ...getDefaultMiddleware({ thunk: false }),
            sagaMiddleware,
        ]
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch