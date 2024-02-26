import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ScrollUp from './ScrollUp';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [activeLink, setActiveLink] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener("scroll",handleScroll);
    };

  },[]);

  return (
    <div className="App">
      <Header activeLink={activeLink} />
      <Main scrollY={scrollY} setScrollY={setScrollY} setActiveLink={setActiveLink} />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
