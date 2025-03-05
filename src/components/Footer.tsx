
import React from 'react';
import portfolioData from '@/data/portfolio';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} {portfolioData.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {portfolioData.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <span className="sr-only">{link.name}</span>
                <svg width="20" height="20" fill="currentColor">
                  <use xlinkHref={`#${link.icon.toLowerCase()}`} />
                </svg>
              </a>
            ))}
          </div>
          
          <div className="mt-6 md:mt-0">
            <a
              href="#home"
              className="inline-flex items-center justify-center p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
