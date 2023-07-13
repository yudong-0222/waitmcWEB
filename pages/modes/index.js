import React from 'react';
import { Footer, Navbar } from '../../components';
import Practice from '../../sections/Practice';
import Snd from '../../sections/Snd';

const ModesPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className='mb-10'>
      <Practice />
    </div>
    <div className='mt-10'>
      <Snd />
    </div>
    <Footer />
  </div>
);

export default ModesPage;
