import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function counterRedurce(state={value: 0}, action){
    switch(action.type){
        case 'increment':
         return {value: state.value+1}
        case 'decrement':
         return {value: state.value-1}
        default:
            return state
    }
}

let store = createStore(counterRedurce)

store.subscribe(()=>console.log(store.getState()))

store.dispatch({type:'increment'})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
