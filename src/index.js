import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import {AuthProvider} from './context/AuthProvider';

window.store = store;

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
    
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
