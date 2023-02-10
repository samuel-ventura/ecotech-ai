import { InstagramLogo, FacebookLogo, LinkedinLogo } from 'phosphor-react';
import styles from './Footer.module.css';
import { Logo } from './Logo';

export function Footer() {
  return (
    <>
      <footer>
        <div className={styles.infoBusiness}>
          <div>
            <Logo />
          </div>
          <div className={styles.info}>
            <p>© 2023 EcoTech AI Solutions | Todos os direitos reservados</p>
            <div>
              <a href="/"> <InstagramLogo size={30} color="#151515" weight='fill' /> </a>
              <a href="/"> <FacebookLogo size={30} color="#151515" weight='fill' /> </a>
              <a href="/"> <LinkedinLogo size={30} color="#151515" weight='fill' /> </a>
            </div>
          </div>
        </div>
        <div className={styles.pagesDescriptions}>
          <div>
            <p>Sobre</p>
            <span>Missão</span>
            <span>Valores</span>
            <span>Áreas de atuação</span>
          </div>
          <div>
            <p>Soluções</p>
            <span>Solar Spot</span>
            <span>Renew Efficiency</span>
            <span>PowerPlanner AI</span>
            <span>Tecnologias e Ferramentas</span>
          </div>
          <div>
            <p>Suporte</p>
            <span>Depoimentos</span>
            <span>Comunidade</span>
            <span>Central de ajuda</span>
            <span>Dúvidas</span>
          </div>
        </div>
      </footer>
    </>
  )
}