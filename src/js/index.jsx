import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './rootStore';

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);










// Original Code.


// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './app';
// import store from './rootStore';

// render(
//   <Provider store={ store }>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
