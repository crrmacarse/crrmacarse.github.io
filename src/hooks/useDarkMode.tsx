import { useEffect, useState } from 'react';

export default () => {
  const [theme, setTheme] = useState('default');

  const handleThemeChange = (newTheme: string) => {
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
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
      handleThemeChange(localTheme);
    } else if (isDarkMode) {
      handleThemeChange('dark');
    } else {
      handleThemeChange('light');
    }
  }, []);

  return [theme, toggleTheme];
};
