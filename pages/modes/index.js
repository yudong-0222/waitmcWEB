import React from 'react';
import { Footer, Navbar } from '../../components';
import Practice from '../../sections/Practice';
import Snd from '../../sections/Snd';

const ModesPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
      <Practice />
      <Snd />
    <Footer />
  </div>
);

export default ModesPage;
