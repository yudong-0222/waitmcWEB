import React from 'react';
import { Footer, Navbar } from '../../components';
import { SmallTitle, TitleText } from '../../components/CustomTexts';
import SndHero from '../../sections/Snd';
import SndSec from '../../sections/SndSec';
import SndThird from '../../sections/SndThird';
import SndFour from '../../sections/SndFour';

const ModesPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <video 
        className="absolute top-0 left-0 w-full object-cover z-[7] h-screen"
        autoPlay
        loop
        muted
        playsInline
        preload='auto'
    >
      <source src="/sndhero1.mp4" type="video/mp4" /> 
    </video>    
    <Navbar />
    {/* <div className="h-screen"> */}
    <SndHero />
    {/* </div> */}
    <SndSec />
    <SndThird />
    <SndFour />
    <Footer />
  </div>
);

export default ModesPage;
