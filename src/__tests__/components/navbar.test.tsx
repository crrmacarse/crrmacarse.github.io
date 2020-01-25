import React from 'react';
import { shallow } from 'enzyme';
import Footer from 'components/shared/footer';

const component = shallow(<Footer />);

describe('<Footer />', () => {
  it('renders', () => { component; });
});
