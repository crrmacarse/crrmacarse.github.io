import useDarkMode from 'hooks/useDarkMode';
import { act, renderHook } from '@testing-library/react-hooks'

beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
})

// https://github.com/testing-library/react-hooks-testing-library
describe('useDarkMode', () => {

    it('has defalt value of default', () => {
        const { result: { current } } = renderHook(() => useDarkMode())

        expect(current.theme).toBe("default")
    });

    // it('should toggle', () => {
    //     const { result: { current } } = renderHook(() => useDarkMode())
    //     act(() => { current.toggleTheme() })

    //     expect(current.theme).toBe("dark");
    // });

    // it('changes the theme in localstorage', () => {
    //     const { result: { current } } = renderHook(() => useDarkMode());
    //     act(() => { current.toggleTheme() });

    //     expect(window.sessionStorage.getItem('theme')).toEqual(current.theme)
    // });

    // it('should change', () => {
    //     const { result: { current } } = renderHook(() => useDarkMode())

    //     window.sessionStorage.setItem('theme', 'default');
    //     act(() => current.toggleTheme())

    //     // expect(window.sessionStorage.getItem('theme')).toEqual("dark")
    //     expect(current.theme).toBe("dark");
    // });

});
