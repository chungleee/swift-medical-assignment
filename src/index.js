import "@babel/polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../node_modules/bulma/css/bulma.min.css'
import patientsReducer from './reducers/patientsReducer'
import woundsReducer from './reducers/woundsReducer'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// combine all reducers
const rootReducer = combineReducers({
	patients: patientsReducer,
	woundById: woundsReducer
})

// initial state
const initialState = {}

// array of middleware
const middlewares = [thunk]

// create redux store
const store = createStore(
	rootReducer, 
	initialState, 
	compose(
		applyMiddleware(...middlewares),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'))