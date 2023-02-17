import { ArrowDown } from 'phosphor-react';
import styles from './styles/Hero.module.css';

export function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <video className={styles.video} autoPlay muted loop>
          <source src="/background-hero.mp4" type="video/mp4"/>
        </video>
        <div className={styles.content}>
          <span></span>
          <h1><strong>REVOLUCIONE</strong> A FORMA<br />COMO VOCÊ PRODUZ ENERGIA</h1>
          <p>Desenvolver soluções inovadoras e sustentáveis nunca foi tão fácil<br />com o auxílio da nossa inteligência artificial</p>
          <span></span>
        </div>
        <div className={styles.button}>
          <button type="button" name="Botão para próxima sessão"><ArrowDown size="3.2rem" color="#D9D9D9" weight="regular" /></button>
        </div>
      </div>
    </>
  )
}