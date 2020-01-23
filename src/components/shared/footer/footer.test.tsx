import React from 'react';
import { shallow } from 'enzyme'
import Footer from '.'

const component = shallow(<Footer />);

describe('<Footer />', () => {
    it('renders', () => { component })
})