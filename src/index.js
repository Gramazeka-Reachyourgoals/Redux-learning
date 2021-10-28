// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import {createStore} from 'redux'

// reducer - function that takes state and action for change it, as argue
function playlist(state = [], action) {
	if (action.type === 'ADD_TRACK'){
		return [
			...state,
			action.payload
		]
	}
	return state
}

const store = createStore(playlist); // create store
// store is immutable(we always create new version of store, don't change old)

store.subscribe(() => console.log('subscribe', store.getState()))

// dispatch - function that change store
// event(action) with type and payload
store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like teen spirit' })
store.dispatch({ type: 'ADD_TRACK', payload: 'Sky is blue' })