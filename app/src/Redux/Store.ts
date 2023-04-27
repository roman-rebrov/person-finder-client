import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleare from 'redux-saga'
import { rootReducer } from './rootReducer';
import { rootWatcher } from '../Saga/index'


const sagaMiddleware = createSagaMiddleare();
const Store = createStore(rootReducer as any,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);

export default Store;