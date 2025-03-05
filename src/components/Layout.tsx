
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[80vw] h-[50vh] bg-gradient-radial from-blue-500/5 to-transparent opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[80vw] h-[50vh] bg-gradient-radial from-indigo-500/5 to-transparent opacity-70 blur-3xl"></div>
      </div>
      
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
