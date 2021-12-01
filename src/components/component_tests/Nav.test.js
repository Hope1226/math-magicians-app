import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Nav from '../Nav';

describe('Loads the Nav page', () => {
  it('and matches the snapshot', () => {
    const tree = renderer.create(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
    ).toJSON;
    expect(tree).toMatchSnapshot();
  })
})