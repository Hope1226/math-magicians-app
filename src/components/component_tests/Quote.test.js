import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('Loads the Quote page', () => {
  it('and matches the snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
