import { Sun } from 'phosphor-react';
import styles from './styles/Solutions.module.css';

export function Solutions() {
  return (
    <>
      <section className={styles.solutions}>
        <div className={styles.title}>
          <span>O que fazemos</span>
          <h1>PRODUTOS E SOLUÇÕES</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.buttons}>
            <button type="button">Solar Spot</button>
            <button type="button">Renew Efficiency</button>
            <button type="button">PowerPlanner AI</button>
          </div>
          <div className={styles.carrossel}>
            <div className={styles.carrosselImage}>
              
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={styles.description}>
            <Sun size="1.5rem" color="#67C22F" weight="fill" />
            <p>Nossa IA para detecção de energia solar utiliza uma análise temporal avançada para identificar os melhores locais para a produção de energia solar ao longo do ano. Com base em dados climáticos e históricos de produção de energia, essa solução fornece informações precisas sobre a melhor época e localização para a instalação de painéis solares</p>
          </div>
        </div>
      </section>
    </>
  )
}