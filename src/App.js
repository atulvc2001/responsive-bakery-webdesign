import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ScrollUp from './ScrollUp';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import ScrollRevealCompo from './ScrollRevealCompo';

function App() {

  const [activeLink, setActiveLink] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      handleScroll();
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [handleScroll]);

  return (
    <div className="App">
      <ScrollRevealCompo />
      <Header activeLink={activeLink} />
      <Main scrollY={scrollY} setScrollY={setScrollY} setActiveLink={setActiveLink} />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
