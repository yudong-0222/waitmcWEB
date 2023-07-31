import React from 'react';
import { Footer, Navbar } from '../../components';
import Staff from '../../sections/Staff';

const Index = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Staff />
    <Footer />
  </div>
);

export default Index;
