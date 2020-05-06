import React from 'react';
import ReactDOM from 'react-dom';
import TestClass from './App'
import './index.css';
import Myclass from './Method'
import Clock from './Clock'
// import App from './App';
// import * as serviceWorker from './serviceWorker';



// var h1= <h1>Hello world</h1>


// ReactDOM.render(
// <TestClass link="www.google.com" linkText="google" />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div>
    {/* <TestClass link="www.google.com" linkText="google"/>
    <TestClass link="www.fb.com" linkText="facebook"/>
     <Myclass /> */}
     <Clock />
  </div>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
