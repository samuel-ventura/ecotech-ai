import { InstagramLogo, FacebookLogo, LinkedinLogo } from 'phosphor-react';
import styles from './styles/Footer.module.css';
import { Logo } from './Logo';

const pagesDescriptionSessions = [
  {
    title: 'Sobre',
    linkList: [
      'Missão',
      'Valores',
      'Áreas de Segurança'
    ]
  },
  {
    title: 'Soluções',
    linkList: [
      'Solar Spot',
      'Renew Efficiency',
      'PowerPlanner AI',
      'Tecnologias e Ferramentas'
    ]
  },
  {
    title: 'Suporte',
    linkList: [
      'Depoimentos',
      'Comunidade',
      'Central de ajuda',
      'Dúvidas'
    ]
  }
]

export function Footer() {
  return (
    <>
      <footer>
        <span></span>
        <div className={styles.infoBusiness}>
          <div className={styles.logo}>
            <Logo />
            <span></span>
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
          {
            pagesDescriptionSessions.map((sessionDescription) => {
              return (
                <ul>
                  <li><span>{sessionDescription.title}</span></li>
                  {
                    sessionDescription.linkList.map(link => {
                      return (
                        <li><a href="">{link}</a></li>
                      )
                    })
                  }
                </ul>
              )
            })
          }
        </nav>
      </footer>
    </>
  )
}