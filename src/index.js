import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons'
// we destructure here because we don't specify export default robots in our robots.js file


ReactDOM.render(
  <App /> ,document.getElementById('root')
);

export default App;


