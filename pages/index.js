import {
  Hero,
  About,
  Subscriptions,
  Brands,
  AppFeatures,
  Feedback,
} from '../sections';
import { Navbar } from '../components';

const Home = () => (
  <div className="relative z-0 bg-black-gradient overflow-x-hidden">
    <Navbar />
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero />
    </div>
    <About />
    <AppFeatures />
    <Subscriptions />
    <Brands />
    <Feedback />
  </div>
);

export default Home;
