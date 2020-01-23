import { useEffect, useState } from 'react';

export default () => {
    const[theme, setTheme] = useState('default');

    const handleThemeChange = (theme: string) => {
        window.localStorage.setItem('theme', theme);
        setTheme(theme);
    }

    const toggleTheme: any = () => {
        if(theme === 'default') {
            handleThemeChange('dark')
        } else {
            handleThemeChange('default')
        }
    }

    useEffect(() => {
        const variants = ['default', 'dark'];
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const localTheme = window.localStorage.getItem('theme');

        if(variants.includes(localTheme)) {
            handleThemeChange(localTheme)
        } else {
            isDarkMode ? handleThemeChange('dark') : handleThemeChange('light');
        }
    }, [])

    return [theme, toggleTheme]
};