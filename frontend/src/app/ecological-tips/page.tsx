import React from 'react';
import styles from './EcologicalTips.module.css';

const ecologicalTips = [
  {
    title: 'Reduza o Consumo de Água',
    description: 'Tome banhos mais curtos, feche a torneira ao escovar os dentes e conserte vazamentos. A água é um recurso precioso!',
    icon: '💧',
  },
  {
    title: 'Economize Energia Elétrica',
    description: 'Desligue as luzes ao sair de um cômodo, use lâmpadas LED, tire os aparelhos da tomada quando não estiverem em uso. Pequenas ações fazem a diferença.',
    icon: '💡',
  },
  {
    title: 'Recicle Corretamente',
    description: 'Separe seu lixo (plástico, papel, vidro, metal) e descarte-o nos locais apropriados. Ajude a reduzir a quantidade de resíduos em aterros sanitários.',
    icon: '♻️',
  },
  {
    title: 'Use Transportes Sustentáveis',
    description: 'Sempre que possível, prefira caminhar, andar de bicicleta ou usar o transporte público. Reduza a emissão de gases poluentes.',
    icon: '🚲',
  },
  {
    title: 'Consuma de Forma Consciente',
    description: 'Compre produtos duráveis, evite o desperdício de alimentos e apoie empresas com práticas sustentáveis. Pense no impacto do que você consome.',
    icon: '🛒',
  },
  {
    title: 'Plante uma Árvore',
    description: 'As árvores são essenciais para o meio ambiente, produzem oxigênio, absorvem CO2 e ajudam a regular o clima. Contribua para o reflorestamento.',
    icon: '🌳',
  },
  {
    title: 'Apoie Produtos Locais',
    description: 'Compre de produtores e comerciantes locais para reduzir a pegada de carbono do transporte e fortalecer a economia da sua comunidade.',
    icon: '🍎',
  },
  {
    title: 'Reduza o Uso de Plástico',
    description: 'Opte por sacolas reutilizáveis, garrafas de água recarregáveis e evite produtos com excesso de embalagens plásticas. O plástico leva séculos para se decompor.',
    icon: '🥤',
  },
  {
    title: 'Descarte Eletrônicos Corretamente',
    description: 'Não jogue lixo eletrônico no lixo comum. Procure pontos de coleta específicos para descarte de pilhas, baterias e outros eletrônicos.',
    icon: '📱',
  },
];

const EcologicalTipsPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div
        className={styles.heroSection}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Dicas Ecológicas para um Futuro Mais Verde
          </h1>
          <p className={styles.heroDescription}>
            Pequenas ações diárias que fazem uma grande diferença para o nosso planeta. Cada atitude sustentável contribui para a saúde do meio ambiente.
          </p>
        </div>
      </div>
      <section className={styles.tipsSection}>
        <h2 className={styles.tipsTitle}>
          Transforme Sua Rotina com Hábitos Sustentáveis
        </h2>
        <div className={styles.tipsGrid}>
          {ecologicalTips.map((tip, index) => (
            <div
              key={index}
              className={styles.tipCard}
            >
              <div className={styles.tipIcon} role="img" aria-label={tip.title}>
                {tip.icon}
              </div>
              <h3 className={styles.tipTitle}>{tip.title}</h3>
              <p className={styles.tipDescription}>{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Seja a Mudança que Você Quer Ver no Mundo!</h2>
        <p className={styles.ctaDescription}>
          Comece hoje mesmo a adotar práticas mais ecológicas. Compartilhe essas dicas com amigos e familiares e inspire mais pessoas a se juntarem a esse movimento.
        </p>
        <button className={styles.ctaButton}>
          Saiba Mais Sobre Sustentabilidade
        </button>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerTextSmall}>&copy; {new Date().getFullYear()} Dicas Ecológicas para o Planeta. Todos os direitos reservados.</p>
        <p className={styles.footerTextExtraSmall}>Feito com amor pelo meio ambiente.</p>
      </footer>
    </div>
  );
};

export default EcologicalTipsPage;
