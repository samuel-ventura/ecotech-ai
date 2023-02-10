import styles from './Logo.module.css';
import logo from '/logo.svg';

export function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <img src={logo} alt="Logo EcoTechAI" />
        <div className={styles.logoName}>
          <span>EcoTech</span>
          <span>AI Solutions</span>
        </div>
      </div>
    </>
  )
}