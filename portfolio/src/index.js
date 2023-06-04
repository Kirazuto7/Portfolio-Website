import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppNavbar from './Components/AppNavbar';
import Styles from './App.module.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(window.location.pathname)
/* ("/Portfolio-Website/" || "/Portfolio-Website")*/
root.render(
    <div id="App" className={ (window.location.pathname === ("/")) ? `${Styles.HomepageBackground} ${Styles.App}`  : `${Styles.App}` }>
        <AppNavbar/>
        <App/>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
