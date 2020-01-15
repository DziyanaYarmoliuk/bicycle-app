import {
	applyMiddleware,
	combineReducers,
	compose,
	createStore,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { allReducers } from './reducers'
import { watcherSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
	sagaMiddleware,
]

const store = createStore(
	combineReducers({ ...allReducers }),
	compose(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(watcherSaga)

export {
	store,
}
