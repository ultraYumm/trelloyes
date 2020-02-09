import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const cards = [{id: 1, title: 'my title', content: 'some content'}]
    const section = document.createElement('div');
   ReactDOM.render(<List cards={cards} />, section);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(section);
  });

  it('renders the UI as expected', () => {
    const cards = [{id: 1, title: 'my title', content: 'some content'}]
    const tree = renderer
      .create(<List cards={cards} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

    