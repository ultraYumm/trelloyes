import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const section = document.createElement('section');
    ReactDOM.render(<List />, section);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(section);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List
        key={list.id}
        header={list.header}
        cards={list.cardIds.map(id => store.allCards[id])}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });