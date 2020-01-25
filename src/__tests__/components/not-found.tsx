import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { create, ReactTestRenderer } from 'react-test-renderer';
import NotFound from 'routes/not-found';

let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;

beforeEach(() => {
  wrapper = shallow(<NotFound />)
  snapshot = create(<NotFound />);
});

describe('<NotFound />', () => {
  it('matches the snapshot', () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  it('renders', () => { wrapper });
});
