
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
