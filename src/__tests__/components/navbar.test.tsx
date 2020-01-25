import React from 'react';
import { shallow } from 'enzyme';
import Footer from 'components/shared/footer';

const component = shallow(<Footer />);

describe('<Footer />', () => {
  it('renders', () => { component; });

  // it('renders children when passed in', () => {
  //   const wrapper = shallow((
  //     <div>
  //       <div className="test" />
  //     </div>
  //   ));
  //   expect(wrapper.contains(<div className="unique" />)).toBe(true);
  // });

});
