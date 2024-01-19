import React from 'react';
import { SmallTitle, TitleText } from '../../components';

const ModesPage = () => (
  <div className="bg-primary-black overflow-hidden">
    {/* <Navbar /> */}
    {/* <Practice />
    <Snd /> */}
    <div className="h-screen flex flex-col items-center justify-center">
      <TitleText title={<>🚧 COMING SOON...</>} />
      <a href="/">
        <SmallTitle title={<>[點我回到首頁]</>} />
      </a>
    </div>
    {/* <Footer /> */}
  </div>
);

export default ModesPage;
