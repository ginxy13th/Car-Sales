import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer/reducer'
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import App from './App';

const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
, rootElement);
