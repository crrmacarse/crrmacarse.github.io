import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';

const component = shallow(<Home />);

describe('<Home />', () => {
  it('renders', () => { component; });
});
