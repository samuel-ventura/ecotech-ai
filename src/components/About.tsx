import { ListChecks, Star, Target } from 'phosphor-react';
import styles from './styles/About.module.css';

export function About() {
  return (
    <>
      <section>
        <div className={styles.about}>
          <div className={styles.title}>
            <span>A empresa</span>
            <h1>SOBRE NÓS</h1>
          </div>
          <div className={styles.aboutCompany}>
            <div>
              <Target size="5.5rem" color="#67C22F" weight="bold" />
              <h2>Missão</h2>
              <p>Contribuir para um futuro mais verde e sustentável,utilizando a tecnologia de inteligência artificial para tornar a produção e o consumo de energia mais eficiente</p>
            </div>
            <span className={styles.span1}></span>
            <div>
            <Star size="5.5rem" color="#67C22F" weight="fill" />
              <h2>Valores</h2>
              <p>Acreditamos na importância de preservar o meio ambiente e na responsabilidade de cada um em contribuir para esse objetivo. Valorizamos a inovação, a colaboração e a transparência em todas as nossas ações</p>
            </div>
            <span className={styles.span2}></span>
            <div>
            <ListChecks size="5.5rem" color="#67C22F" weight="fill" />
              <h2>Áreas de atuação</h2>
              <p>Nossa equipe de especialistas em inteligência artificial trabalha para desenvolver soluções para a área de energia, incluindo a otimização da produção de energia renovável, o gerenciamento de redes elétricas inteligentes e a implementação de soluções de eficiência energética</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}