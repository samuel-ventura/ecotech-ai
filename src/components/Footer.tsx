import { InstagramLogo, FacebookLogo, LinkedinLogo } from 'phosphor-react';
import styles from './Footer.module.css';
import { Logo } from './Logo';

// refatorar toda a estrutura dos links do footer

export function Footer() {
  return (
    <>
      <footer>
        <div className={styles.infoBusiness}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.info}>
            <p>2023 EcoTech AI Solutions <br/> Todos os direitos reservados</p>
            <div>
              <a href="/"> <InstagramLogo size={30} color="#151515" weight='fill' /> </a>
              <a href="/"> <FacebookLogo size={30} color="#151515" weight='fill' /> </a>
              <a href="/"> <LinkedinLogo size={30} color="#151515" weight='fill' /> </a>
            </div>
          </div>
        </div>
        <div className={styles.pagesDescriptions}>
          <div>
            <a href="/">Sobre</a>
            <a href="">Missão</a>
            <a href="">Valores</a>
            <a href="">Áreas de atuação</a>
          </div>
          <div>
            <a href="">Soluções</a>
            <a href="">Solar Spot</a>
            <a href="">Renew Efficiency</a>
            <a href="">PowerPlanner AI</a>
            <a href="">Tecnologias e Ferramentas</a>
          </div>
          <div>
            <a href="">Suporte</a>
            <a href="">Depoimentos</a>
            <a href="">Comunidade</a>
            <a href="">Central de ajuda</a>
            <a href="">Dúvidas</a>
          </div>
        </div>
      </footer>
    </>
  )
}