import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import NewsLetter from './components/NewsLetter';
import Cards from './components/Cards';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
    </Fragment>
  );
}

export default App;
