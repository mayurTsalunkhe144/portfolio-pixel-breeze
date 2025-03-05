
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    // On mount, read the preference from localStorage and set the theme
    const darkModePreference = 
      localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && 
       window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(darkModePreference);
    updateTheme(darkModePreference);
  }, []);

  const updateTheme = (darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    updateTheme(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-foreground hover:bg-secondary transition-colors"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Sun size={20} className="text-yellow-300" />
      ) : (
        <Moon size={20} className="text-blue-600" />
      )}
    </button>
  );
};

export default ThemeToggle;
