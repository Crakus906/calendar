import createSagaMiddleware from 'redux-saga';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer'
import { watchFetchDog } from './sagas/index'
import Dashboard from '../pages/Dashboard'

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watchFetchDog);

export const ConnectApp = connect((state) => {
    console.log(state);
    return state
})(Dashboard);