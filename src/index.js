import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const checkboxes = [
    {
        label: "Select all"
    },
    {
        label: "Item 1"
    },
    {
        label: "Item 2"
    },
    {
        label: "Item 3"
    },
    {
        label: "Item 4"
    }
]
const selectAllCheckbox = checkboxes[0];
ReactDOM.render(<App checkboxes={checkboxes} selectAllCheckbox={selectAllCheckbox}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
