import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Toggler from 'hoc/toggler';

let wrapper: ShallowWrapper;

beforeEach(() => {
    const ComponentToMock = () => <div />;
    const WrappedComponent = Toggler(ComponentToMock)

    wrapper = shallow(<WrappedComponent />)
});

describe('Toggler', () => {
    it('works', () => {
        expect(wrapper.html()).not.toBeNull();
    })

    it('has props', () => {
        expect(wrapper.prop('isOpen')).not.toBeNull();
        expect(wrapper.prop('handleToggle')).not.toBeNull();
    })

    it('it initialize with a isOpen value of false', () => {
        expect(wrapper.prop('isOpen')).toBe(false);
    })

    // it('toggles', () => {
    // })
})
