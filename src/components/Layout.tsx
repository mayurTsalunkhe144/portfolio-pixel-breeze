
import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Initialize theme on component mount
  useEffect(() => {
    // Check if theme exists in localStorage
    const theme = localStorage.getItem('theme');
    // Check user preference
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set dark mode if preference is dark or if OS preference is dark and no theme is set
    if (theme === 'dark' || (!theme && userPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-background text-foreground transition-colors duration-300">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[80vw] h-[50vh] bg-gradient-radial from-blue-500/5 to-transparent opacity-70 blur-3xl dark:from-blue-800/10"></div>
        <div className="absolute bottom-0 left-0 w-[80vw] h-[50vh] bg-gradient-radial from-indigo-500/5 to-transparent opacity-70 blur-3xl dark:from-indigo-900/10"></div>
      </div>
      
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />

      {/* Fixed theme toggle button */}
      <div className="fixed bottom-6 right-6 z-50 glassmorphism dark:bg-gray-800/50 p-2 rounded-full shadow-lg">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Layout;
