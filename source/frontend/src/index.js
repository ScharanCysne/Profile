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
    <img src={'../static/images/cover.jpeg'} alt="Logo" style={getStyle()}/>;
    <img src={'../static/images/work.jpg'} alt="Logo" style={{
      ...getStyle(),
      width: window.screen.width,
      position: 'absolute',
      top: '150%',
      left: '0'
    }}/>;
    <img src={'../static/images/education.jpg'} alt="Logo" style={{
      ...getStyle(),
      width: window.screen.width,
      position: 'absolute',
      top: '250%',
      left: '0'
    }}/>;
    <img src={'../static/images/projects.jpg'} alt="Logo" style={{
      ...getStyle(),
      width: window.screen.width,
      position: 'absolute',
      top: '350%',
      left: '0'
    }}/>;
    <img src={'../static/images/skillset.jpg'} alt="Logo" style={{
      ...getStyle(),
      width: window.screen.width,
      position: 'absolute',
      top: '450%',
      left: '0'
    }}/>;
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
