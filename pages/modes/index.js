import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { Navbar, Footer } from '../../components';
import SndHero from '../../sections/Snd';
import SndSec from '../../sections/SndSec';
import SndThird from '../../sections/SndThird';
import SndFour from '../../sections/SndFour';
import SndFive from '../../sections/SndFive';
import SndSix from '../../sections/SndSix';
import SndSeven from '../../sections/SndSeven';

const ModesPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end',
    ],
  });
  return (
    <div className="bg-primary-black">
      <div className="overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full object-cover z-[7] h-screen"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/prelo.png"
        >
          <source src="/sndhero1.mp4" type="video/mp4" />
        </video>
        <Navbar />
        <SndHero />
        <div className="relative">
          <SndSec />
          <SndThird />
        </div>
      </div>
      <div ref={container} className="relative">
        <SndFour scrollYProgress={scrollYProgress} />
        <SndFive scrollYProgress={scrollYProgress} />
      </div>
      <div className="relative overflow-hidden">
        <SndSix />
        <SndSeven />
        <Footer gredient="gradient-02" />
      </div>
    </div>
  );
};

export default ModesPage;
