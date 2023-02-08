import { useEffect, useMemo, useState } from 'react';
import styles from './Header.module.css';
import { Logo } from './Logo';

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
  const md = useMediaQuery("(min-width: 890px)");
  const lg = useMediaQuery("(min-width: 1200px)");

  return { md, lg };
}

export function Header() {
  const { md, lg } = useMediaQueries();

  return (
    <>
      <header>
        <Logo />

        {md &&
          <>
            <div className={styles.content}>
              <button type="button">Home</button>
              <button type="button">Sobre nós</button>
              <button type="button">Soluções</button>
              <button type="button">Ferramentas</button>
            </div>

            <div className={styles.button}>
              <button type="button">Fale conosco</button>
            </div>
          </>
        }
        
      </header>
    </>

  )
}