export interface Planet {
  id: string;
  name: string;
  summary: string;
  composition: string;
  atmosphere: string;
  temperature: string;
  rotation: string;
  distance: string;
  diameter: string;
  extra: string[];
  color: string;
  glowColor: string;
}

export const planets: Planet[] = [
  {
    id: "sun",
    name: "Sol",
    summary: "O Sol é o coração do nosso sistema solar, uma enorme bola de plasma quente que fornece energia para toda a vida na Terra. Este gigante estelar contém 99,86% da massa do sistema e gera energia através da fusão nuclear em seu núcleo.",
    composition: "73% hidrogênio, 25% hélio, 2% elementos mais pesados",
    atmosphere: "Corona: plasma extremamente quente atingindo milhões de graus",
    temperature: "Superfície: 5.778K (5.505°C), Núcleo: 15 milhões°C",
    rotation: "25 dias (equador), 35 dias (polos)",
    distance: "149,6 milhões de km da Terra",
    diameter: "1.392.700 km (109 vezes o diâmetro da Terra)",
    extra: ["A fusão nuclear alimenta o Sol", "A luz leva 8 minutos para chegar à Terra", "A superfície tem manchas solares e erupções"],
    color: "#FFD700",
    glowColor: "#FFA500"
  },
  {
    id: "mercury",
    name: "Mercúrio",
    summary: "Mercúrio é o menor planeta e o mais próximo do Sol. Este mundo rochoso experimenta variações extremas de temperatura, de dias escaldantes a noites congelantes devido à falta de atmosfera e rotação lenta.",
    composition: "Grande núcleo de ferro (75% do raio), manto rochoso fino",
    atmosphere: "Exosfera extremamente fina: oxigênio, sódio, hidrogênio",
    temperature: "Dia: 427°C, Noite: -173°C",
    rotation: "59 dias terrestres",
    distance: "58 milhões de km do Sol",
    diameter: "4.879 km (38% do diâmetro da Terra)",
    extra: ["Sem luas ou anéis", "Superfície densamente craterada", "Um dia dura 176 dias terrestres"],
    color: "#8C7853",
    glowColor: "#A0926D"
  },
  {
    id: "venus",
    name: "Vênus",
    summary: "Vênus é gêmea da Terra em tamanho, mas um mundo infernal com efeito estufa descontrolado. Sua atmosfera densa retém calor, tornando-se o planeta mais quente do sistema solar, mais quente que Mercúrio apesar de estar mais longe do Sol.",
    composition: "Rochoso com núcleo de ferro, manto e crosta de silicatos",
    atmosphere: "96% dióxido de carbono, 3,5% nitrogênio, nuvens de ácido sulfúrico",
    temperature: "462°C (mais quente que Mercúrio)",
    rotation: "243 dias terrestres (retrógrado)",
    distance: "108 milhões de km do Sol",
    diameter: "12.104 km (95% do diâmetro da Terra)",
    extra: ["Gira ao contrário", "Dia mais longo que o ano", "Pressão superficial 90x a da Terra"],
    color: "#E6A817",
    glowColor: "#FFB84D"
  },
  {
    id: "earth",
    name: "Terra",
    summary: "A Terra é o único planeta conhecido que abriga vida, com vastos oceanos cobrindo 71% de sua superfície. Nossa pérola azul tem as condições perfeitas para a vida: água líquida, atmosfera protetora e campo magnético que nos protege da radiação nociva.",
    composition: "Núcleo de ferro, manto de silicatos, crosta continental e oceânica",
    atmosphere: "78% nitrogênio, 21% oxigênio, 1% outros gases",
    temperature: "Média: 15°C (variação: -89°C a 58°C)",
    rotation: "24 horas",
    distance: "149,6 milhões de km do Sol (1 UA)",
    diameter: "12.756 km",
    extra: ["Único planeta com vida confirmada", "71% coberto por água", "Campo magnético forte protege a atmosfera"],
    color: "#4A90E2",
    glowColor: "#7BB3F0"
  },
  {
    id: "moon",
    name: "Lua",
    summary: "A Lua da Terra é o quinto maior satélite do sistema solar e desempenha um papel crucial na estabilização da rotação terrestre e na criação das marés. Formada a partir de detritos após um objeto do tamanho de Marte colidir com a Terra primitiva.",
    composition: "Pequeno núcleo de ferro, manto rochoso, planaltos de anortosito",
    atmosphere: "Exosfera extremamente fina com argônio, hélio, neônio",
    temperature: "Dia: 127°C, Noite: -173°C",
    rotation: "27,3 dias terrestres (acoplamento de maré)",
    distance: "384.400 km da Terra",
    diameter: "3.475 km (27% do diâmetro da Terra)",
    extra: ["Causa as marés da Terra", "Sempre mostra a mesma face para a Terra", "Afasta-se da Terra 3,8cm por ano"],
    color: "#C0C0C0",
    glowColor: "#E0E0E0"
  },
  {
    id: "mars",
    name: "Marte",
    summary: "O Planeta Vermelho ganha sua cor do óxido de ferro (ferrugem) em sua superfície. Marte tem o maior vulcão do sistema solar, calotas polares e evidências de antigos rios e lagos, sugerindo que já teve um clima mais quente e úmido.",
    composition: "Núcleo de ferro, rocha vulcânica basáltica, superfície de óxido de ferro",
    atmosphere: "95% dióxido de carbono, 3% nitrogênio, 1,6% argônio",
    temperature: "Média: -80°C (variação: 20°C a -153°C)",
    rotation: "24,6 horas (similar à Terra)",
    distance: "228 milhões de km do Sol",
    diameter: "6.792 km (53% do diâmetro da Terra)",
    extra: ["Duas pequenas luas: Fobos e Deimos", "Maior vulcão: Monte Olimpo", "Evidências de fluxos antigos de água"],
    color: "#CD5C5C",
    glowColor: "#E74C3C"
  },
  {
    id: "jupiter",
    name: "Júpiter",
    summary: "Júpiter é o maior planeta do nosso sistema solar, um gigante gasoso com mais massa que todos os outros planetas juntos. Sua Grande Mancha Vermelha é uma tempestade maior que a Terra que dura há séculos, e atua como um aspirador cósmico, protegendo os planetas internos.",
    composition: "Principalmente hidrogênio e hélio, possível núcleo rochoso",
    atmosphere: "89% hidrogênio, 10% hélio, traços de metano e amônia",
    temperature: "Topo das nuvens: -145°C, Núcleo: 20.000°C",
    rotation: "9,9 horas (mais rápido do sistema solar)",
    distance: "778 milhões de km do Sol",
    diameter: "142.984 km (11 vezes o diâmetro da Terra)",
    extra: ["79 luas confirmadas", "Tempestade Grande Mancha Vermelha", "Protege a Terra de asteroides"],
    color: "#D2691E",
    glowColor: "#F4A460"
  },
  {
    id: "saturn",
    name: "Saturno",
    summary: "Saturno é famoso por seu espetacular sistema de anéis feito de incontáveis partículas de gelo e rocha. Este gigante gasoso é menos denso que a água e tem o sistema de luas mais extenso, incluindo Titã com sua atmosfera densa e lagos de metano líquido.",
    composition: "Hidrogênio e hélio com traços de água, metano, amônia",
    atmosphere: "96% hidrogênio, 3% hélio, traços de outros compostos",
    temperature: "Topo das nuvens: -178°C, Núcleo: 11.700°C",
    rotation: "10,7 horas",
    distance: "1,4 bilhão de km do Sol",
    diameter: "120.536 km (9,5 vezes o diâmetro da Terra)",
    extra: ["Sistema de anéis proeminente", "82 luas confirmadas", "Flutuaria na água"],
    color: "#B8860B",
    glowColor: "#DDD700"
  },
  {
    id: "uranus",
    name: "Urano",
    summary: "Urano é um gigante de gelo que gira de lado, provavelmente devido a uma colisão antiga. Este mundo azul-esverdeado tem um campo magnético único, anéis tênues, e experimenta estações extremas que duram 21 anos terrestres cada devido à sua inclinação incomum.",
    composition: "Gelos de água, metano e amônia sobre um núcleo rochoso",
    atmosphere: "83% hidrogênio, 15% hélio, 2% metano",
    temperature: "Topo das nuvens: -197°C, Núcleo: 5.000°C",
    rotation: "17,2 horas (retrógrado, de lado)",
    distance: "2,9 bilhões de km do Sol",
    diameter: "51.118 km (4 vezes o diâmetro da Terra)",
    extra: ["Gira de lado (inclinação de 98°)", "27 luas conhecidas", "Sistema de anéis tênues descoberto em 1977"],
    color: "#4FD0E3",
    glowColor: "#87CEEB"
  },
  {
    id: "neptune",
    name: "Netuno",
    summary: "Netuno é o planeta mais ventoso com velocidades chegando a 2.100 km/h. Este gigante de gelo azul profundo foi o primeiro planeta descoberto através de previsões matemáticas ao invés de observação, e leva 165 anos terrestres para orbitar o Sol uma vez.",
    composition: "Gelos de água, metano e amônia sobre um núcleo rochoso",
    atmosphere: "80% hidrogênio, 19% hélio, 1% metano",
    temperature: "Topo das nuvens: -200°C, Núcleo: 5.200°C",
    rotation: "16,1 horas",
    distance: "4,5 bilhões de km do Sol",
    diameter: "49.528 km (3,9 vezes o diâmetro da Terra)",
    extra: ["Ventos mais fortes do sistema solar", "14 luas conhecidas incluindo Tritão", "Cor azul profunda do metano"],
    color: "#4169E1",
    glowColor: "#6495ED"
  }
];