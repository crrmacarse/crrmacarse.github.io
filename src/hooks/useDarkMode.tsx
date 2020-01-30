import { useEffect, useState } from 'react';

type themeProps = 'default' | 'dark'
type themeStateProps = { theme: themeProps, isFirstTime: boolean }

export default () => {
  const [{ theme, isFirstTime }, setTheme] = useState<themeStateProps>({ theme: 'default', isFirstTime: false });

  const handleThemeChange = (newTheme: themeProps, change: boolean = false) => {
    window.localStorage.setItem('theme', newTheme);
    setTheme({ theme: newTheme, isFirstTime: change });
  };

  const toggleTheme: any = () => {
    if (theme === 'default') {
      handleThemeChange('dark');
    } else {
      handleThemeChange('default');
    }
  };

  useEffect(() => {
    const variants = ['default', 'dark'];
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = window.localStorage.getItem('theme');

    if (variants.includes(localTheme)) {
      handleThemeChange(localTheme as themeProps);
    } else if (isDarkMode) {
      handleThemeChange('dark', true);
    } else {
      handleThemeChange('default', true);
    }
  }, []);

  return { theme, isFirstTime, toggleTheme };
};
