import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import webReducer from './web/web.slice'
import createSagaMiddleware from 'redux-saga'
import rootSagas from './sagas'

const rootReducer = {
  web: webReducer
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware]

const store = configureStore({
  reducer: rootReducer,
  middleware
})

sagaMiddleware.run(rootSagas)

export default store