import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';

import './global.css'
import styles from './App.module.css';
import { useEffect, useMemo, useState } from "react";


function useMediaQuery(query: string) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
}

function useMediaQueries() {
  const md = useMediaQuery("(min-width: 920px)");
  const lg = useMediaQuery("(min-width: 1200px)");

  return { md, lg };
}

function App() {
  return (
    <>
      <Header useMediaQueries={useMediaQueries} ></Header>
      <Hero></Hero>
      <Footer />
    </>
  )
}

export default App
