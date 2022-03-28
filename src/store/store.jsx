import { createStore, combineReducers } from 'redux'
import counterReducer from './reducers/counterReducer'
import todosReducer from './reducers/todoReducer'

const allReducers = combineReducers({ counterReducer, todosReducer })

const store = createStore(allReducers)

export { store }
