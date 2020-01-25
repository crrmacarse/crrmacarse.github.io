import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Navbar, { NavbarProps } from 'components/shared/navbar';

let wrapper: ShallowWrapper<NavbarProps>;

beforeEach(() => {
  let mockFunc = () => jest.fn();
  const component = <Navbar theme={"default"} toggleTheme={mockFunc} />

  wrapper = shallow(component)
});

// @TODO: Play with functions inside here
describe('<Navbar />', () => {
  it('renders', () => { wrapper });

  it('has props', () => {
    expect(wrapper.prop('theme')).not.toBeNull();
    expect(wrapper.prop('toggleTheme')).not.toBeNull();
  })
});
