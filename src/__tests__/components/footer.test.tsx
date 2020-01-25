import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import { create, ReactTestRenderer } from 'react-test-renderer';
import Footer from 'components/shared/footer';

let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;

beforeEach(() => {
  const component = <MemoryRouter><Footer /></MemoryRouter>

  wrapper = shallow(component)
  snapshot = create(component);
});

describe('<Footer />', () => {
  it('matches the snapshot', () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  it('renders', () => { wrapper });
});
