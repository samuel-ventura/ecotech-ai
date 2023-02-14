import styles from './styles/Header.module.css';
import { Logo } from './Logo';

interface HeaderProps {
  useMediaQueries: () => {
    md: boolean,
    lg: boolean,
  };
}

const sessionContentName = [
  'Home',
  'Sobre nós',
  'Soluções',
  'Ferramentas'
]

export function Header({ useMediaQueries }: HeaderProps) {
  const { md, lg } = useMediaQueries();

  return (
    <>
      <header>
        <Logo />

        {md &&
          <>
            <div className={styles.content}>
              {sessionContentName.map((content) => {
                return content === 'Home'
                  ?
                  <button type="button" className={styles.activeButton}>{content}</button>
                  :
                  <button type="button">{content}</button>
              })}
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