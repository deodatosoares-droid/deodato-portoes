import { ServiceItem, FanpagePost, ReviewItem, GalleryPhoto } from '../types';

export const COMPANY_INFO = {
  name: 'DEODATO PORTÕES',
  slogan: 'Especialistas em Conserto, Manutenção e Instalação de Portões Automáticos',
  highlight: 'ATENDIMENTO EM PRAIA GRANDE – SP',
  region: 'Praia Grande e Toda a Baixada Santista',
  phone1: {
    raw: '5513991484520',
    display: '(13) 99148-4520',
    label: 'WhatsApp Praia Grande',
    waUrl: 'https://wa.me/5513991484520',
  },
  phone2: {
    raw: '5511981092963',
    display: '(11) 98109-2963',
    label: 'WhatsApp Suporte & Plantão',
    waUrl: 'https://wa.me/5511981092963',
  },
  hours: 'Segunda a Sábado: 07:30 às 19:00 | Plantão de Emergência aos Domingos e Feriados',
  address: 'Praia Grande – SP (Atendimento móvel em residências, condomínios e comércios)',
  yearsOfExperience: 15,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'conserto-portoes',
    title: 'Conserto de Portões Automáticos e Manuais',
    shortDesc: 'Diagnóstico rápido e reparo de portões basculantes, deslizantes e pivotantes travados ou emperrados.',
    fullDesc: 'Atendimento emergencial para portões caídos, fora do trilho, que não fecham ou travam no meio do percurso. Restauração do equilíbrio e movimentação suave para garantir a segurança da sua casa.',
    category: 'conserto',
    image: '/images/hero_gate.jpg',
    highlights: [
      'Alinhamento e balanceamento estrutural',
      'Desemperramento imediato no mesmo dia',
      'Atendimento residencial e condominial',
      'Garantia de segurança e funcionamento suave'
    ],
    ctaText: 'Solicitar Conserto Urgente'
  },
  {
    id: 'instalacao-substituicao-motores',
    title: 'Instalação e Substituição de Motores',
    shortDesc: 'Instalação de kits de automação modernos, rápidos e silenciosos com potência sob medida para o peso do seu portão.',
    fullDesc: 'Dimensionamos o motor exato conforme o fluxo e peso do portão (1/4 HP, 1/3 HP, 1/2 HP ou motores industriais de alta velocidade TSI). Fiação embutida e fixação de alta durabilidade resistente à maresia.',
    category: 'motores',
    image: '/images/motor_installation.jpg',
    highlights: [
      'Abertura super rápida de 4 a 6 segundos',
      'Motores monofásicos e trifásicos com inversor',
      'Cremalheiras industriais e residenciais reforçadas',
      'Instalação limpa com teste completo de fim de curso'
    ],
    ctaText: 'Cotar Novo Motor'
  },
  {
    id: 'motores-marcas-lideres',
    title: 'Motores PPA, Garen TSI, KDZ, Nice e Rossi',
    shortDesc: 'Trabalhamos com as marcas mais confiáveis do mercado nacional, com estoque de peças e assistência técnica.',
    fullDesc: 'Especialistas técnicos certificados nas linhas PPA Jet Flex, Garen TSI / KDZ Fit, Nice Peccinin e Rossi Dzi. Peças originais de fábrica para assegurar vida útil prolongada sem improvisos.',
    category: 'motores',
    image: '/images/motor_installation.jpg',
    brands: ['PPA', 'Garen TSI', 'KDZ', 'Nice', 'Rossi'],
    highlights: [
      'Estoque com motores originais lacrados',
      'Modelos rápidos para evitar assaltos na entrada',
      'Garantia de fábrica e mão de obra qualificada',
      'Configuração precisa de torque e desaceleração'
    ],
    ctaText: 'Ver Opções de Marcas'
  },
  {
    id: 'substituicao-centrais-eletronicas',
    title: 'Substituição de Centrais Eletrônicas',
    shortDesc: 'Troca e reprogramação de placas de comando danificadas por curto, raios, maresia ou surtos de tensão elétrica.',
    fullDesc: 'Centrais com memória digital, proteção contra picos de energia, ajuste de embreagem eletrônica, parada suave e entrada para fotocélula e trava. Diagnóstico de bancada e substituição ágil no local.',
    category: 'eletronica',
    image: '/images/electronic_board.jpg',
    highlights: [
      'Centrais convencionais e inversoras de frequência',
      'Verniz especial protetor contra maresia da praia',
      'Regulagem precisa de freio e rampa de aceleração',
      'Receptor de alta sensibilidade para alcance ampliado'
    ],
    ctaText: 'Trocar Placa Queimada'
  },
  {
    id: 'programacao-controles-remotos',
    title: 'Programação de Controles Remotos',
    shortDesc: 'Codificação, clonagem e configuração de novos controles com frequência 433,92 MHz (código fixo e rolling code).',
    fullDesc: 'Fornecemos e programamos controles tipo chaveiro, veiculares (TX Car no farol alto do carro) e cópias adicionais para toda a família ou condomínio com criptografia de segurança.',
    category: 'eletronica',
    image: '/images/remote_accessories.jpg',
    highlights: [
      'Configuração imediata na sua residência',
      'Controles ergonômicos e resistentes a quedas',
      'Instalação de TX Car (abre piscando o farol)',
      'Apagamento seguro de controles perdidos da memória'
    ],
    ctaText: 'Pedir Novos Controles'
  },
  {
    id: 'troca-cabos-roldanas-eixos',
    title: 'Troca de Cabos de Aço, Roldanas, Eixos e Trilhos',
    shortDesc: 'Substituição preventiva e corretiva de cabos desfiados, roldanas gastas, trilhos tortos e rolamentos com folga.',
    fullDesc: 'Em regiões litorâneas como Praia Grande, o salitre corrói cabos e rolamentos. Usamos cabos de aço galvanizado ou inox de alta resistência e roldanas com rolamentos blindados para durabilidade máxima.',
    category: 'hardware',
    image: '/images/hardware_pulleys.jpg',
    highlights: [
      'Cabos de aço de alta resistência à tração',
      'Roldanas reforçadas com rolamentos blindados',
      'Alinhamento milimétrico de trilhos e cantoneiras',
      'Evita que o portão despenque ou entorte'
    ],
    ctaText: 'Trocar Cabos e Peças'
  },
  {
    id: 'travas-eletromagneticas',
    title: 'Instalação de Travas Eletromagnéticas',
    shortDesc: 'Segurança reforçada: travamento automático que impede que o portão seja forçado ou arrombado por alavancas.',
    fullDesc: 'Travas elétricas acionadas simultaneamente com o motor. Ao enviar o comando pelo controle, a trava destrava uma fração de segundo antes de o motor puxar o portão, garantindo travamento inviolável.',
    category: 'acessorios',
    image: '/images/remote_accessories.jpg',
    highlights: [
      'Pino de aço reforçado com chave de destrave manual',
      'Módulo temporizador para proteção da bobina',
      'Compatível com portões basculantes e deslizantes',
      'Máxima proteção para casas de veraneio e residências'
    ],
    ctaText: 'Instalar Trava de Segurança'
  },
  {
    id: 'luzes-sinalizacao-fotocelulas',
    title: 'Luzes de Sinalização e Fotocélulas',
    shortDesc: 'Sinalizadores audiovisuais de saída de garagem e fotocélulas anti-esmagamento para proteção de pedestres e carros.',
    fullDesc: 'Atenda às normas de segurança condominial e municipal de Praia Grande com sinalizador LED piscante e sensor de presença infravermelho que impede o fechamento do portão caso haja carro, criança ou animal no vão.',
    category: 'acessorios',
    image: '/images/hero_gate.jpg',
    highlights: [
      'Sensor infravermelho anti-esmagamento',
      'Sinalizador visual LED de alto brilho para pedestres',
      'Evita colisões acidentais com a lataria do carro',
      'Instalação conforme exigências de condomínios'
    ],
    ctaText: 'Instalar Sensores e Sinalizador'
  },
  {
    id: 'lubrificacao-manutencao-preventiva',
    title: 'Lubrificação e Manutenção Preventiva',
    shortDesc: 'Revisão completa periódica para evitar quebras repentinas e dobrar a vida útil do seu conjunto mecânico e motor.',
    fullDesc: 'Aplicação de graxa de alta aderência nos eixos, reaperto geral de parafusos e tirantes, regulagem dos fins de curso, verificação de folgas e higienização das centrais contra insetos e umidade marinha.',
    category: 'conserto',
    image: '/images/hardware_pulleys.jpg',
    highlights: [
      'Graxa marítima especial que repele água e sal',
      'Ajuste fino de fim de curso e desaceleração',
      'Redução drástica de ruídos ao abrir e fechar',
      'Economia de até 70% comparado a reparos de urgência'
    ],
    ctaText: 'Agendar Manutenção Preventiva'
  },
  {
    id: 'pequenos-servicos-serralheria-solda',
    title: 'Pequenos Serviços de Serralheria e Solda',
    shortDesc: 'Reforços estruturais, fixação de suportes, solda elétrica de pontos trincados e reparos no quadro do portão.',
    fullDesc: 'Equipamento portátil de solda para realização de reparos rápidos sem precisar retirar o portão do local: reforço de braços de tração, solda em suportes de motor, fixação de chapas e correção de empenamento.',
    category: 'serralheria',
    image: '/images/hero_gate.jpg',
    highlights: [
      'Máquina de solda elétrica portátil para atendimento em domicílio',
      'Reforço de chapas e pontos de fixação do motor',
      'Ajuste de batentes e fechaduras mecânicas',
      'Acabamento com fundo anticorrosivo'
    ],
    ctaText: 'Solicitar Reparo de Solda'
  }
];

export const FANPAGE_POSTS: FanpagePost[] = [
  {
    id: 'post-1',
    author: 'DEODATO PORTÕES',
    avatar: '/images/hero_gate.jpg',
    date: 'Hoje às 09:15',
    title: '🚨 Manutenção Urgente em Portão Basculante: Troca de Cabos e Roldanas na Aviação',
    content: 'Hoje pela manhã atendemos um chamado de emergência no bairro Aviação aqui em Praia Grande. O cliente percebeu que um dos cabos de aço começou a desfiar e o portão estava descendo torto. \n\n⚠️ Atenção moradores da Baixada Santista: com a maresia constante, cabos de aço sem manutenção podem arrebentar de repente e entortar toda a folha do portão, além do risco de acidentes! Trocamos os dois cabos por cabos galvanizados reforçados e instalamos roldanas novas com rolamento blindado. O portão voltou a subir suave e equilibrado.',
    tags: ['#PraiaGrande', '#BairroAviacao', '#PortaoBasculante', '#ManutencaoUrgente', '#DeodatoPortoes'],
    image: '/images/hardware_pulleys.jpg',
    likes: 47,
    commentsCount: 3,
    sharesCount: 14,
    pinned: true,
    serviceCategory: 'Manutenção de Cabos e Roldanas',
    whatsappMessage: 'Olá! Vi a publicação de vocês sobre a troca de cabos de aço na Aviação e gostaria de agendar uma revisão no meu portão em Praia Grande.',
    commentsList: [
      {
        id: 'c1-1',
        author: 'Roberto Mendonça',
        location: 'Aviação · Praia Grande',
        text: 'Vocês me atenderam hoje de manhã! Serviço nota 10, chegaram em 30 minutos e o portão ficou perfeito. Obrigado Deodato!',
        timeAgo: 'Há 2 horas',
        reply: {
          author: 'DEODATO PORTÕES',
          text: 'Muito obrigado pela confiança, Sr. Roberto! Qualquer necessidade estamos sempre à disposição no WhatsApp (13) 99148-4520.',
          timeAgo: 'Há 1 hora'
        }
      },
      {
        id: 'c1-2',
        author: 'Cláudia Silveira',
        location: 'Guilhermina',
        text: 'Boa tarde, o meu portão está fazendo um estalo forte quando começa a subir. Vocês conseguem vir dar uma olhada amanhã?',
        timeAgo: 'Há 3 horas',
        reply: {
          author: 'DEODATO PORTÕES',
          text: 'Olá, D. Cláudia! Com certeza, pode ser desgaste na roldana ou cabo desfiando. Já estamos te chamando no WhatsApp para combinar o melhor horário!',
          timeAgo: 'Há 2 horas'
        }
      }
    ]
  },
  {
    id: 'post-2',
    author: 'DEODATO PORTÕES',
    avatar: '/images/hero_gate.jpg',
    date: 'Ontem às 16:40',
    title: '⚡ Motor Super Rápido Instalado: Mais Segurança e Agilidade no Canto do Forte',
    content: 'Mais uma instalação de sucesso no Canto do Forte! O cliente tinha um motor antigo que demorava mais de 18 segundos para abrir. Em locais residenciais, cada segundo parado na rua é um risco.\n\nSubstituímos pelo novo motor com abertura em menos de 5 segundos, parada suave inteligente e cremalheiras de alta densidade. O cliente agora entra na garagem sem esperar na calçada! Precisando de motor rápido em Praia Grande? Fale com a DEODATO PORTÕES!',
    tags: ['#CantoDoForte', '#MotorRapido', '#PPAJetFlex', '#GarenTSI', '#SegurancaResidencial'],
    image: '/images/motor_installation.jpg',
    likes: 62,
    commentsCount: 2,
    sharesCount: 19,
    serviceCategory: 'Instalação de Motores',
    whatsappMessage: 'Olá! Vi a postagem do motor rápido no Canto do Forte. Gostaria de um orçamento para colocar um motor super rápido no meu portão.',
    commentsList: [
      {
        id: 'c2-1',
        author: 'Marcelo Rossi',
        location: 'Canto do Forte',
        text: 'Esse motor rápido é outra vida! Não fico mais parado na rua esperando abrir. Recomendo muito o trabalho do Deodato.',
        timeAgo: 'Ontem',
        reply: {
          author: 'DEODATO PORTÕES',
          text: 'Segurança em primeiro lugar, Marcelo! Ficou excelente a instalação.',
          timeAgo: 'Ontem'
        }
      },
      {
        id: 'c2-2',
        author: 'Juliana Pires',
        location: 'Boqueirão',
        text: 'Qual o valor aproximado para trocar um motor antigo por um desse modelo rápido?',
        timeAgo: 'Ontem',
        reply: {
          author: 'DEODATO PORTÕES',
          text: 'Olá Juliana! Depende do peso e tamanho do portão. Clica no nosso botão do WhatsApp (13) 99148-4520 que passamos a cotação exata sem compromisso!',
          timeAgo: 'Ontem'
        }
      }
    ]
  },
  {
    id: 'post-3',
    author: 'DEODATO PORTÕES',
    avatar: '/images/hero_gate.jpg',
    date: '3 de Novembro às 11:20',
    title: '🔧 Troca de Central Eletrônica Danificada por Surto Elétrico no Boqueirão',
    content: 'Após a tempestade com raios do último fim de semana no Boqueirão, a placa de comando deste portão de condomínio entrou em curto. A central antiga não possuía varistores de proteção adequados.\n\nFizemos a troca no local por uma central moderna bivolt automática, com rampa de desaceleração e placa envernizada contra a umidade da praia. Reprogramamos todos os 18 controles remotos dos moradores em menos de 40 minutos.',
    tags: ['#Boqueirao', '#CentralEletronica', '#PlacaDePortao', '#SuporteTecnico', '#PraiaGrandeSP'],
    image: '/images/electronic_board.jpg',
    likes: 38,
    commentsCount: 2,
    sharesCount: 8,
    serviceCategory: 'Centrais Eletrônicas',
    whatsappMessage: 'Olá! Meu portão parou de funcionar e acho que a placa queimou. Vocês atendem no Boqueirão para verificar?',
    commentsList: [
      {
        id: 'c3-1',
        author: 'Síndico Fernando',
        location: 'Edifício Solar Boqueirão',
        text: 'Salvaram o condomínio no domingo! Todos os moradores elogiaram a rapidez.',
        timeAgo: '3 dias atrás',
        reply: {
          author: 'DEODATO PORTÕES',
          text: 'Estamos sempre de plantão para emergências de condomínios em Praia Grande!',
          timeAgo: '3 dias atrás'
        }
      }
    ]
  },
  {
    id: 'post-4',
    author: 'DEODATO PORTÕES',
    avatar: '/images/hero_gate.jpg',
    date: '1 de Novembro às 14:05',
    title: '🔒 Trava Eletromagnética: Proteção Indispensável Para Casas de Praia',
    content: 'Dica de segurança importante para quem tem casa ou casa de veraneio em Praia Grande: o motor sozinho apenas empurra o portão, mas não impede que seja forçado por fora com uma alavanca.\n\nA trava eletromagnética é um pino de aço maciço que trava automaticamente assim que o portão fecha e destrava eletronicamente quando você aciona o controle remoto. Instalamos hoje duas travas de reforço em uma residência na Guilhermina. Durma com tranquilidade!',
    tags: ['#Segurança', '#TravaEletrica', '#Guilhermina', '#CasaDePraia', '#DeodatoPortoes'],
    image: '/images/remote_accessories.jpg',
    likes: 54,
    commentsCount: 2,
    sharesCount: 16,
    serviceCategory: 'Travas Eletromagnéticas',
    whatsappMessage: 'Olá! Gostaria de saber o valor para instalar trava eletromagnética no meu portão em Praia Grande.',
    commentsList: [
      {
        id: 'c4-1',
        author: 'Eduardo Braga',
        location: 'Vila Caiçara',
        text: 'Tenho casa de veraneio na Caiçara e coloquei a trava com vocês ano passado. Dá muita paz de espírito quando volto pra SP.',
        timeAgo: '5 dias atrás',
        reply: {
          author: 'DEODATO PORTÕES',
          text: 'Com certeza Eduardo, para casa de temporada a trava reforçada é indispensável!',
          timeAgo: '5 dias atrás'
        }
      }
    ]
  },
  {
    id: 'post-5',
    author: 'DEODATO PORTÕES',
    avatar: '/images/hero_gate.jpg',
    date: '28 de Outubro às 10:30',
    title: '🏡 Portão Deslizando Suave: Alinhamento Estrutural e Solda Especializada na Vila Tupi',
    content: 'Serviço completo realizado na Vila Tupi: portão deslizante de 4 metros estava raspando no piso devido ao afundamento do trilho inferior e corrosão na base. \n\nRealizamos reforço com solda elétrica nos pontos de apoio, substituição de guias superiores com roletes de nylon que não fazem ruído e calibração de embreagem do motor. Movimentação 100% silenciosa e sem esforço!',
    tags: ['#VilaTupi', '#Serralheria', '#SoldaEletrica', '#PortaoDeslizante', '#PraiaGrande'],
    image: '/images/hero_gate.jpg',
    likes: 41,
    commentsCount: 1,
    sharesCount: 12,
    serviceCategory: 'Serralheria e Solda',
    whatsappMessage: 'Olá! Meu portão está raspando no chão e fazendo barulho na Vila Tupi. Vocês podem fazer uma visita técnica?',
    commentsList: [
      {
        id: 'c5-1',
        author: 'Valdemir Souza',
        location: 'Vila Tupi',
        text: 'O portão parou de raspar no chão e agora fecha sem fazer nenhum barulho. Ótimo custo-benefício.',
        timeAgo: '1 semana atrás',
        reply: {
          author: 'DEODATO PORTÕES',
          text: 'Valeu Valdemir! Ficamos felizes em ajudar.',
          timeAgo: '1 semana atrás'
        }
      }
    ]
  },
  {
    id: 'post-6',
    author: 'DEODATO PORTÕES',
    avatar: '/images/hero_gate.jpg',
    date: '25 de Outubro às 15:50',
    title: '📡 Novos Controles Codificados & Sensor Fotocélula Anti-Esmagamento no Ocian',
    content: 'Família protegida! No bairro Cidade Ocian, instalamos hoje o kit de fotocélulas de segurança infravermelho. Se o portão estiver fechando e passar uma criança, cachorro ou o carro, o feixe é interrompido e o portão reabre imediatamente no mesmo instante!\n\nAlém disso, entregamos e codificamos 4 controles novos de longo alcance com bateria de longa duração. Segurança e comodidade para a família toda.',
    tags: ['#CidadeOcian', '#Fotocelula', '#AntiEsmagamento', '#ControlesRemotos', '#PraiaGrande'],
    image: '/images/remote_accessories.jpg',
    likes: 49,
    commentsCount: 1,
    sharesCount: 15,
    serviceCategory: 'Acessórios e Fotocélula',
    whatsappMessage: 'Olá! Quero instalar sensor anti-esmagamento no meu portão e codificar mais 2 controles.',
    commentsList: [
      {
        id: 'c6-1',
        author: 'Patrícia Neves',
        location: 'Cidade Ocian',
        text: 'Tenho dois cachorros e ficava com medo do portão fechar neles. A fotocélula funciona perfeitamente, recomendo!',
        timeAgo: '2 semanas atrás',
        reply: {
          author: 'DEODATO PORTÕES',
          text: 'Segurança da família e dos pets não tem preço! Obrigado Patrícia.',
          timeAgo: '2 semanas atrás'
        }
      }
    ]
  }
];

export const GOOGLE_REVIEWS_INITIAL: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Carlos Alberto Mendes',
    location: 'Canto do Forte · Praia Grande/SP',
    rating: 5,
    date: 'Há 3 dias',
    service: 'Instalação de Motor Rápido Garen TSI',
    comment: 'Excelente profissional! O motor antigo demorava quase 20 segundos pra abrir. O Deodato instalou o motor rápido que abre em 5 segundos. Pontual, honesto e preço muito justo. Recomendo de olhos fechados.',
    verified: true,
    source: 'google'
  },
  {
    id: 'rev-2',
    author: 'Renata Vasconcelos',
    location: 'Boqueirão · Praia Grande/SP',
    rating: 5,
    date: 'Há 1 semana',
    service: 'Conserto de Cabo de Aço Rompido',
    comment: 'O cabo de aço do meu portão basculante rompeu de manhã e meu carro ficou preso dentro da garagem. Liguei pro Deodato no WhatsApp e em menos de 40 minutos o técnico já estava aqui trocando os dois cabos e as roldanas. Salvou meu dia!',
    verified: true,
    source: 'google'
  },
  {
    id: 'rev-3',
    author: 'Jorge Luis Silveira',
    location: 'Guilhermina · Praia Grande/SP',
    rating: 5,
    date: 'Há 2 semanas',
    service: 'Troca de Placa e Instalação de Trava Elétrica',
    comment: 'Com a tempestade de raios a central queimou. Fizeram a substituição por uma placa bivolt resistente à maresia e instalaram a trava eletromagnética. Atendimento transparente, testou tudo na minha frente.',
    verified: true,
    source: 'google'
  },
  {
    id: 'rev-4',
    author: 'Mariana Duarte',
    location: 'Aviação · Praia Grande/SP',
    rating: 5,
    date: 'Há 3 semanas',
    service: 'Manutenção Preventiva e Lubrificação',
    comment: 'Portão estava rangendo muito por causa do salitre da praia. Fizeram alinhamento e lubrificação com graxa marítima. O portão está silencioso como novo.',
    verified: true,
    source: 'google'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Portão Deslizante Moderno com Acabamento Alumínio',
    category: 'portoes',
    image: '/images/hero_gate.jpg',
    description: 'Instalação completa e automação com abertura rápida em residência litorânea na Praia Grande.',
    tag: 'Instalação Residencial'
  },
  {
    id: 'gal-2',
    title: 'Motor de Alta Potência Instalado com Cremalheira Industrial',
    category: 'motores',
    image: '/images/motor_installation.jpg',
    description: 'Kit de automação de alto rendimento com suporte galvanizado reforçado contra maresia.',
    tag: 'Motores Rápidos'
  },
  {
    id: 'gal-3',
    title: 'Central Eletrônica de Comando com Proteção Antissurto',
    category: 'centrais',
    image: '/images/electronic_board.jpg',
    description: 'Substituição de placa de comando com receptor 433MHz e rampa suave de desaceleração.',
    tag: 'Placas e Centrais'
  },
  {
    id: 'gal-4',
    title: 'Sistema de Cabos de Aço e Roldanas com Rolamento Blindado',
    category: 'hardware',
    image: '/images/hardware_pulleys.jpg',
    description: 'Manutenção preventiva e corretiva em conjunto basculante de tração pesada.',
    tag: 'Cabos & Roldanas'
  },
  {
    id: 'gal-5',
    title: 'Controles Remotos Codificados e Trava Eletromagnética',
    category: 'acessorios',
    image: '/images/remote_accessories.jpg',
    description: 'Acessórios de alta tecnologia para máxima segurança e praticidade do usuário.',
    tag: 'Segurança & Controles'
  },
  {
    id: 'gal-6',
    title: 'Revisão Mecânica Preventiva e Lubrificação Marítima',
    category: 'hardware',
    image: '/images/hardware_pulleys.jpg',
    description: 'Revisão periódica de eixos e tirantes para evitar corrosão acelerada pelo salitre.',
    tag: 'Manutenção Preventiva'
  }
];

export const NEIGHBORHOODS_PRAIA_GRANDE = [
  'Canto do Forte',
  'Boqueirão',
  'Guilhermina',
  'Aviação',
  'Vila Tupi',
  'Cidade Ocian',
  'Vila Mirim',
  'Maracanã',
  'Vila Caiçara',
  'Jardim Real',
  'Balneário Flórida',
  'Solemar',
  'Quietude',
  'Vila Antártica',
  'Glória',
  'Sítio do Campo',
  'Anhanguera',
  'Nova Mirim'
];

export const FAQS = [
  {
    question: 'Qual o tempo médio de atendimento para emergências em Praia Grande?',
    answer: 'Atendemos com máxima agilidade em toda a cidade de Praia Grande. Para situações emergenciais (como portão caído, travado com o carro dentro ou fora da garagem), buscamos chegar ao local o mais rápido possível no mesmo dia.'
  },
  {
    question: 'Vocês dão garantia nos serviços e nas peças instaladas?',
    answer: 'Sim! Todos os nossos serviços contam com garantia formal de mão de obra e os motores e centrais eletrônicas contam com garantia integral de fábrica das marcas PPA, Garen, Nice, Rossi e KDZ.'
  },
  {
    question: 'Como a maresia de Praia Grande afeta o portão automático?',
    answer: 'O salitre presente no ar litorâneo acelera a oxidação de cabos de aço, soldas, roldanas e circuitos eletrônicos. Por isso, a DEODATO PORTÕES utiliza cabos galvanizados reforçados, graxa marítima especial que repele umidade e centrais envernizadas com maior proteção.'
  },
  {
    question: 'Vocês instalam motor novo ou apenas consertam o que já existe?',
    answer: 'Fazemos os dois! Se o seu motor ainda tiver vida útil, fazemos o reparo econômico, troca de capacitores, engrenagens ou placas. Se for inviável o conserto, instalamos um novo motor de alta velocidade com as melhores condições.'
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Facilitamos o pagamento via Pix, cartões de crédito e débito com parcelamento no cartão para instalações de motores e serviços completos.'
  }
];
