import { Footer, Navbar } from '../components';
import { About, Explore, GetStarted, Hero, Insights, WhatsNew, StatusPic } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <Explore />
    </div>
    <div className="relative">
      <WhatsNew />
    </div>
    <GetStarted />
    <div className="relative">
      <Insights />
      <StatusPic />
      {/* <Feedback /> */}
      {/* Feedback 暫時先不要好了。 */}
    </div>
    <Footer gredient="gradient-03" />
  </div>
);

export default Home;
