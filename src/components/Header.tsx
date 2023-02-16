import styles from './styles/Header.module.css';
import { Logo } from './Logo';
import { SetStateAction, useEffect, useState } from 'react';

interface HeaderProps {
  useMediaQueries: () => {
    md: boolean,
    lg: boolean,
  }
}

export function Header({ useMediaQueries }: HeaderProps) {
  const { md, lg } = useMediaQueries();

  const [activeSession, setActiveSession] = useState(0);

  const [headerScrolled, setHeaderScrolled] = useState(false);

  function handleActiveSession(buttonIndex: SetStateAction<number>) {
    setActiveSession(buttonIndex)
  }
  // ao dar o scroll inicial na página, o background mudará de transparente para cinza
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0 && headerScrolled === false) {
        setHeaderScrolled(true);
      } else if (window.scrollY === 0 && headerScrolled !== false) { // verificando se o scroll voltou para a posição inicial da página
        setHeaderScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headerScrolled]);

  return (
    <>
      <header className={headerScrolled ? styles.scrolled : ''}>
        <Logo />

        {md &&
          <>
            <div className={styles.content}>
              
              <button type="button" className={activeSession === 0 ? styles.activeButton : ""} onClick={() => handleActiveSession(0)}>Home</button>
              <button type="button" className={activeSession === 1 ? styles.activeButton : ""} onClick={() => handleActiveSession(1)}>Sobre nós</button>
              <button type="button" className={activeSession === 2 ? styles.activeButton : ""} onClick={() => handleActiveSession(2)}>Soluções</button>
              <button type="button" className={activeSession === 3 ? styles.activeButton : ""} onClick={() => handleActiveSession(3)}>Ferramentas</button>
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