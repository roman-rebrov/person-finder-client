import { all } from 'redux-saga/effects'
import { watcher } from './Workers'

export function* rootWatcher(){
    yield all([
        watcher()
    ])
}