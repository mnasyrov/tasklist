import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import { withAppProvider } from './app/AppProvider';
import './index.css';

const Root = withAppProvider(App);
ReactDOM.render(<Root />, document.getElementById('root'));
