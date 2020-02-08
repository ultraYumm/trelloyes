import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const main = document.createElement('main');
    ReactDOM.render(<App />, main);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(main);
  });