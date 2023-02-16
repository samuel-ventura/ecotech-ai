import styles from './styles/Header.module.css';
import { Logo } from './Logo';
import { SetStateAction, useState } from 'react';

interface HeaderProps {
  useMediaQueries: () => {
    md: boolean,
    lg: boolean,
  }
}

export function Header({ useMediaQueries }: HeaderProps) {
  const { md, lg } = useMediaQueries();

  const [activeSession, setActiveSession] = useState(0);
  
  function handleActiveSession(buttonIndex: SetStateAction<number>) {
    setActiveSession(buttonIndex)
  }

  return (
    <>
      <header>
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