import { createStore, combineReducers, applyMiddleware } from 'redux';
import testReducers from './reducers/testReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'

const middleWares = [ReduxThunk]

const combineReducer = combineReducers({
    tests: testReducers,
})

export const store = createStore(
    combineReducer,
    composeWithDevTools(applyMiddleware(...middleWares))

)

