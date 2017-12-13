import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

const jsx = (
    <div>
        <AppRouter />
    </div>
);

console.log('app started');

ReactDOM.render(jsx, document.getElementById('app'));
