import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { create, ReactTestRenderer } from 'react-test-renderer';
import ErrorBoundary from 'providers/error-boundary';

let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;

beforeEach(() => {
  wrapper = shallow(<ErrorBoundary />)
  snapshot = create(<ErrorBoundary />);
});

describe('<ErrorBoundary />', () => {
  it('matches the snapshot', () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  it('renders', () => { wrapper });
});
