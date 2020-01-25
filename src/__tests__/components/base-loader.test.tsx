import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { create, ReactTestRenderer } from 'react-test-renderer';
import BaseLoader from 'components/shared/loader/base';

let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;

beforeEach(() => {
  wrapper = shallow(<BaseLoader />)
  snapshot = create(<BaseLoader />);
});

describe('<BaseLoader />', () => {
  it('matches the snapshot', () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });

  it('renders', () => { wrapper })
});
