// src/app/ecological-tips/page.tsx
import React from 'react';

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
    <div className="min-h-screen bg-green-50 font-sans">
      <div
        className="relative h-96 w-full flex items-center justify-center text-center p-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/floresta-background.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
            Dicas Ecológicas para um Futuro Mais Verde
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl drop-shadow-lg max-w-2xl mx-auto">
            Pequenas ações diárias que fazem uma grande diferença para o nosso planeta. Cada atitude sustentável contribui para a saúde do meio ambiente.
          </p>
        </div>
      </div>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-900 mb-12">
          Transforme Sua Rotina com Hábitos Sustentáveis
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecologicalTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 border border-green-100"
            >
              <div className="text-6xl mb-4 text-green-600" role="img" aria-label={tip.title}>
                {tip.icon}
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">{tip.title}</h3>
              <p className="text-gray-700 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-700 text-white py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Seja a Mudança que Você Quer Ver no Mundo!</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Comece hoje mesmo a adotar práticas mais ecológicas. Compartilhe essas dicas com amigos e familiares e inspire mais pessoas a se juntarem a esse movimento.
        </p>
        <button className="bg-white text-green-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-100 transition-colors duration-300 text-lg">
          Saiba Mais Sobre Sustentabilidade
        </button>
      </section>

      <footer className="bg-green-900 text-white text-center p-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Dicas Ecológicas para o Planeta. Todos os direitos reservados.</p>
        <p className="text-xs mt-2">Feito com amor pelo meio ambiente.</p>
      </footer>
    </div>
  );
};

export default EcologicalTipsPage;