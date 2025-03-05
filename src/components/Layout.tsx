
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
      {/* Enhanced background patterns */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[80vw] h-[50vh] bg-gradient-radial from-blue-500/5 to-transparent opacity-70 blur-3xl dark:from-blue-800/20"></div>
        <div className="absolute bottom-0 left-0 w-[80vw] h-[50vh] bg-gradient-radial from-indigo-500/5 to-transparent opacity-70 blur-3xl dark:from-indigo-900/20"></div>
        
        {/* New animated elements */}
        <div className="absolute top-[20%] left-[10%] w-[150px] h-[150px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-800/10 dark:to-pink-900/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-[30%] right-[15%] w-[200px] h-[200px] rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 dark:from-blue-800/10 dark:to-teal-900/10 blur-3xl animate-float opacity-0 sm:opacity-100" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[50%] left-[50%] w-[100px] h-[100px] rounded-full bg-gradient-to-r from-amber-500/10 to-red-500/10 dark:from-amber-800/10 dark:to-red-900/10 blur-3xl animate-float opacity-0 md:opacity-100" style={{ animationDelay: '2.2s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aC02djZoNnYtNnptLTYtNnY2aDZ2LTZoLTZ6bS02IDZoLTZ2Nmg2di02em0wLTZ2NmgtNnYtNmg2em0tNi02djZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aC02djZoNnYtNnptLTYtNnY2aDZ2LTZoLTZ6bS02IDZoLTZ2Nmg2di02em0wLTZ2NmgtNnYtNmg2em0tNi02djZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />

      {/* Fixed theme toggle button with enhanced styling */}
      <div className="fixed bottom-6 right-6 z-50 glassmorphism dark:bg-gray-800/50 p-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Layout;
