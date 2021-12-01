import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Loads the home page', () => {
  it('and matches the snapshot', () => {
    const tree = renderer.create(<Home />).toJSON;
    expect(tree).toMatchSnapshot();
  })
})