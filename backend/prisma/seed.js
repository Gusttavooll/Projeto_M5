// prisma/seed.js
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';


const prisma = new PrismaClient();



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function getRandomElement(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

async function main() {
  console.log(`🧹 Limpando banco de dados...`);
  
  await prisma.registroAtividade.deleteMany({});
  await prisma.dica.deleteMany({});
  await prisma.acaoSustentavel.deleteMany({});
  await prisma.usuario.deleteMany({});


  console.log(`🌱 Iniciando seeding...`);


  console.log('👑 Criando usuário ADMIN...');
  const adminPassword = await bcrypt.hash("ADMIN123", 10);
  const admin = await prisma.usuario.create({
    data: {
      nome: "Administrador",
      email: "admin@example.com",
      senha_hash: adminPassword,
      role: "ADMIN",
      idRegistro: "ADMINREG001",
    },
  });
  console.log(`Usuário ADMIN criado com sucesso: ${admin.email}`);


  // --- Criar Usuários (Exemplo: 10 usuários) ---
  const usuariosCriados = [];
  const nomesBase = ["Ana", "Bruno", "Carla", "Daniel", "Eduarda", "Fábio", "Gabriela", "Hugo", "Isabela", "João"];
  console.log('👤 Criando usuários...');
  for (let i = 0; i < 10; i++) {
    const nomeUnico = `${nomesBase[i % nomesBase.length]} Silva ${i}`;
    const emailUnico = `usuario${i + 1}@example.com`;
    const senhaHash = await bcrypt.hash(`senha${i + 1}XYZ`, 10);
    const usuario = await prisma.usuario.create({
      data: {
        nome: nomeUnico,
        email: emailUnico,
        senha_hash: senhaHash,
        idRegistro: `USERREG${String(i + 1).padStart(3, '0')}`,
        pontuacao_total: getRandomInt(0, 500),
        nivel: getRandomInt(1, 10),
      },
    });
    usuariosCriados.push(usuario);
    // Para chegar a 90, você precisaria de um loop maior ou dados mais variados
  }
  console.log(`${usuariosCriados.length} usuários criados.`);


  // --- Criar Ações Sustentáveis (Exemplo: 20 ações) ---
  const acoesCriadas = [];
  const nomesAcoes = [
    "Reciclar Plástico", "Reciclar Vidro", "Compostagem Doméstica", "Usar Transporte Público",
    "Andar de Bicicleta", "Reduzir Consumo de Carne", "Plantar uma Árvore", "Economizar Energia em Casa",
    "Desligar Luzes Não Usadas", "Usar Sacola Retornável", "Evitar Desperdício de Alimentos",
    "Coleta Seletiva", "Doar Roupas Usadas", "Reduzir Uso de Plástico Descartável",
    "Consumir Produtos Locais", "Participar de Limpeza Comunitária", "Educar Sobre Sustentabilidade",
    "Consertar em Vez de Descartar", "Utilizar Garrafa de Água Reutilizável", "Optar por Produtos Ecológicos"
  ];
  const categoriasAcoes = ["Reciclagem", "Mobilidade", "Alimentação", "Biodiversidade", "Energia", "Consumo Consciente", "Comunidade", "Educação"];
  console.log('🌿 Criando ações sustentáveis...');
  for (let i = 0; i < 20; i++) { // Para 90, aumente o loop e a variedade de nomes
    const nomeAcao = i < nomesAcoes.length ? nomesAcoes[i] : `Ação Sustentável Extra ${i - nomesAcoes.length + 1}`;
    const acao = await prisma.acaoSustentavel.create({
      data: {
        nome: nomeAcao,
        descricao: `Descrição detalhada para ${nomeAcao}.`,
        pontos: getRandomInt(5, 30),
        categoria: getRandomElement(categoriasAcoes),
      },
    });
    acoesCriadas.push(acao);
  }
  console.log(`${acoesCriadas.length} ações sustentáveis criadas.`);


  // --- Criar Dicas (Exemplo: 30 dicas) ---
  const dicasCriadas = [];
  const titulosDicas = [
    "5 Maneiras de Reduzir sua Pegada de Carbono", "Guia Rápido para Compostagem", "Benefícios de uma Dieta Plant-Based",
    "Como Montar uma Horta Urbana", "Dicas para Economizar Água em Casa", "Reciclagem Criativa: Ideias para Reutilizar",
    "A Importância das Abelhas para o Ecossistema", "Descarte Correto de Eletrônicos", "Moda Sustentável: O que Você Precisa Saber",
    "Como Fazer Produtos de Limpeza Ecológicos", "Turismo Sustentável: Viaje com Consciência", "Energias Renováveis para sua Casa",
    "Minimalismo e Sustentabilidade", "Impacto do Plástico nos Oceanos", "Crie um Jardim para Polinizadores",
    "Transporte Alternativo nas Cidades", "Alimentação Orgânica: Vantagens", "Como Reduzir o Lixo Plástico",
    "Ações Individuais pelo Clima", "Construções Sustentáveis", "Importância da Água de Reuso",
    "Logística Reversa: Entenda", "Desafios do Saneamento Básico", "Consumo Consciente de Tecnologia",
    "Pegada Hídrica dos Alimentos", "Upcycling: Transforme o Velho em Novo", "Mobilidade Ativa e Saúde",
    "O Papel das Florestas Urbanas", "Impacto Ambiental da Indústria da Moda", "Oceanos Livres de Plástico: Como Ajudar"
  ];
  const categoriasDicas = ["Geral", "Casa", "Alimentação", "Transporte", "Reciclagem", "Energia", "Água", "Conscientização"];
  console.log('💡 Criando dicas...');
  for (let i = 0; i < 30; i++) { // Para 90, aumente o loop e a variedade de títulos
    const tituloDica = i < titulosDicas.length ? titulosDicas[i] : `Dica Extra sobre Sustentabilidade ${i - titulosDicas.length + 1}`;
    const dica = await prisma.dica.create({
      data: {
        titulo: tituloDica,
        conteudo: `Conteúdo elaborado sobre ${tituloDica}, explorando diversos aspectos e fornecendo informações práticas.`,
        categoria_dica: getRandomElement(categoriasDicas),
      },
    });
    dicasCriadas.push(dica);
  }
  console.log(`${dicasCriadas.length} dicas criadas.`);


  // --- Criar Registros de Atividade (Exemplo: 50 registros) ---
  // Conectando usuários aleatórios com ações aleatórias
  const registrosCriados = [];
  const observacoesExemplo = [
    "Feito com sucesso!", "Completei o desafio.", "Muito bom para o planeta.",
    "Aprendi bastante.", "Vou fazer mais vezes.", "Recomendo a todos.",
    "Pequena ação, grande impacto.", "Me senti ótimo fazendo isso."
  ];
  console.log('📝 Criando registros de atividade...');
  if (usuariosCriados.length > 0 && acoesCriadas.length > 0) {
    for (let i = 0; i < 50; i++) { // Para 90, aumente o loop
      const usuarioAleatorio = getRandomElement(usuariosCriados);
      const acaoAleatoria = getRandomElement(acoesCriadas);
      const registro = await prisma.registroAtividade.create({
        data: {
          usuario_id: usuarioAleatorio.id,
          acao_id: acaoAleatoria.id,
          observacao: getRandomElement(observacoesExemplo) + ` (Registro ${i+1})`,
          data_hora: new Date(Date.now() - getRandomInt(0, 30) * 24 * 60 * 60 * 1000), // Data nos últimos 30 dias
        },
      });
      registrosCriados.push(registro);
    }
  }
  console.log(`${registrosCriados.length} registros de atividade criados.`);


  console.log(`✅ Seeding finalizado com sucesso!`);
}


main()
  .catch(async (e) => {
    console.error("❌ Erro durante o processo de seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
