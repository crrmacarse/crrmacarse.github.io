import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Navbar, NavbarProps } from 'components/shared/navbar';

// https://redux.js.org/recipes/writing-tests/
// learn more about dive(): https://github.com/airbnb/enzyme/issues/1002
const setup = () => {
  const props = {
    visited: false,
  };

const mockFunc = () => jest.fn();
  const component = <Navbar theme={"default"} isFirstTime={false} toggleTheme={mockFunc} visited={false} />

  const wrapper: ShallowWrapper<NavbarProps> = shallow(component);

  return {
    props,
    wrapper,
  };
};

// @TODO: Play with functions inside here
describe('<Navbar />', () => {
  it('should render self and submcomponents', () => {
    const { wrapper } = setup()

    expect(wrapper.find('#main').text()).toBe('Christian Ryan R. Macarse');
    expect(wrapper.props().visited).not.toBeNull();
    expect(wrapper.props().theme).not.toBeNull();
    expect(wrapper.props().isFirstTime).not.toBeNull();
    expect(wrapper.props().toggleTheme).not.toBeNull();
    // expect(wrapper.props().visited).toBeBoolean();
    // expect(wrapper.props().theme).toBeOneOf(['default', 'dark']);
    // expect(wrapper.props().isFirstTime).toBeBoolean();
  })
});
