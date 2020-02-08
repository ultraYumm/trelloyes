import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('section');
    ReactDOM.render(<Card />, div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });