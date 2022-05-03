import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';

import bulletinSaga from './pages/BulletinBoard/saga';
import bulletinReducer from './pages/BulletinBoard/reducer';

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: combineReducers({
        bulletinReducer,
    }),
    middleware: [
        sagaMiddleware,
    ],
})

sagaMiddleware.run(bulletinSaga)
