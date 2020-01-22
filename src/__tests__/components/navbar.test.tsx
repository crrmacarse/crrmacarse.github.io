import React from 'react';
import { shallow } from 'enzyme'
import Navbar from 'components/shared/navbar'

const component = shallow(<Navbar />);

describe('<Navbar />', () => {
    it('renders', () => component)
})