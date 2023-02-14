import { InstagramLogo, FacebookLogo, LinkedinLogo } from 'phosphor-react';
import styles from './styles/Footer.module.css';
import { Logo } from './Logo';

export function Footer() {
  return (
    <>
      <footer>
        <div className={styles.infoBusiness}>
          <div className={styles.logo}>
            <Logo />  
          </div>
          <div className={styles.info}>
            <p>2023 EcoTech AI Solutions <br /> Todos os direitos reservados</p>
            <nav>
              <a href="/"> <InstagramLogo size={30} color="#151515" weight='fill' /> </a>
              <a href="/"> <FacebookLogo size={30} color="#151515" weight='fill' /> </a>
              <a href="/"> <LinkedinLogo size={30} color="#151515" weight='fill' /> </a>
            </nav>
          </div>
        </div>
        <nav className={styles.pagesDescriptions}>
          <ul>
            <li><span>Sobre</span></li>
            <li><a href="">Missão</a></li>
            <li><a href="">Valores</a></li>
            <li><a href="">Áreas de atuação</a></li>
          </ul>
          <ul>
            <li><span>Soluções</span></li>
            <li><a href="">Solar Spot</a></li>
            <li><a href="">Renew Efficiency</a></li>
            <li><a href="">PowerPlanner AI</a></li>
            <li><a href="">Tecnologias e Ferramentas</a></li>
          </ul>
          <ul>
            <li><span>Suporte</span></li>
            <li><a href="">Depoimentos</a></li>
            <li><a href="">Comunidade</a></li>
            <li><a href="">Central de ajuda</a></li>
            <li><a href="">Dúvidas</a></li>
          </ul>
        </nav>
      </footer>
    </>
  )
}