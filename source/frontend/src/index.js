import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import App from './App';

function getStyle(){
  if (screen.height / screen.width >= 982 / 1512)
    return {display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%'}
  else
    return {display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%'}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div></div>
    <img src={'../static/cover.jpeg'} alt="Logo" style={getStyle()}/>;
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
