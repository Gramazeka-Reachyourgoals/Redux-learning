import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

/*
if found redux devtools extension in chrome,
then run it and pass as second argue,
else pass undefined as argue
*/
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // create store
// store is immutable(we always create new version of store, don't change old)

ReactDOM.render(
  <React.StrictMode>
		<Provider store={store}>
    	<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const addTrackButton = document.querySelector('.addTrackButton')
// const trackInput = document.querySelector('.trackInput')
// const list = document.querySelector('.list')

// store.subscribe(() => {
// 	console.log('subscribe', store.getState())

// 	trackInput.value = ''
// 	list.innerHTML = ''
// 	store.getState().forEach(track => {
// 		const li = document.createElement('li')
// 		li.textContent = track
// 		list.appendChild(li)
// 	})
// })

// // dispatch - function that change store
// // event(action) with type and payload
// store.dispatch({ type: 'ADD_TRACK', payload: 'Here is my tracks' })

// addTrackButton.addEventListener('click', () => {
// 	const trackName = trackInput.value
// 	store.dispatch({ type: 'ADD_TRACK', payload: trackName })
// })