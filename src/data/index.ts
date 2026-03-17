import type { NavItem, Project, CaseStudy, ProcessStep, AboutStat } from '@/types'

// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { href: '#work',    en: 'Work',    pt: 'Trabalhos' },
  { href: '#process', en: 'Process', pt: 'Processo' },
  { href: '#about',   en: 'About',   pt: 'Sobre' },
  { href: '#contact', en: 'Contact', pt: 'Contato' },
]

// ── Projects ──────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    tag: 'Sports / Endurance',
    year: '2026',
    visual: 'viz1',
    en: {
      name: 'Ultra Fuel',
      desc: 'An ultra-marathon nutrition planner created with vibe coding, turning sports science into a simple race plan.',
      role: 'Product Designer · AI Builder',
    },
    pt: {
      name: 'Ultra Fuel',
      desc: 'Um planejador de nutrição para ultramaratonas criado com vibe coding, transformando ciência esportiva em um plano simples de prova.',
      role: 'Product Designer · AI Builder',
    },
  },
  {
    id: 'proj2',
    tag: 'Design System',
    year: '2023',
    visual: 'viz2',
    en: {
      name: 'Enterprise Design\nSystem at Scale',
      desc: 'Built and shipped a cross-platform design system serving 6 product teams, reducing design-to-dev handoff time by 60% and aligning brand expression across 3 products.',
      role: 'Design Systems Lead',
    },
    pt: {
      name: 'Design System\nCorporativo em Escala',
      desc: 'Criei e entreguei um design system multiplataforma para 6 times de produto, reduzindo o handoff design-dev em 60% e alinhando a identidade visual em 3 produtos.',
      role: 'Líder de Design System',
    },
  },
  {
    id: 'proj3',
    tag: 'Mobile / E-comm',
    year: '2023',
    visual: 'viz3',
    en: {
      name: 'Mobile Checkout\nConversion',
      desc: 'Rethought a checkout experience for a high-traffic retail app. Reduced checkout steps from 7 to 3, increasing completion rate by 31% within 8 weeks of launch.',
      role: 'Product Designer',
    },
    pt: {
      name: 'Conversão no\nCheckout Mobile',
      desc: 'Repensamos a experiência de checkout de um app de varejo com alto tráfego. Reduzimos as etapas de 7 para 3, aumentando a taxa de conclusão em 31% em 8 semanas.',
      role: 'Designer de Produto',
    },
  },
  {
    id: 'proj4',
    tag: 'Data / Dashboard',
    year: '2022',
    visual: 'viz4',
    en: {
      name: 'Analytics Dashboard\nfor Non-technical Users',
      desc: 'Redesigned a data platform\'s reporting layer for a non-technical audience. Turned dense raw data into clear, actionable insights with zero training required.',
      role: 'Lead Product Designer',
    },
    pt: {
      name: 'Dashboard de Analytics\npara Usuários Não-técnicos',
      desc: 'Redesenhei a camada de relatórios de uma plataforma de dados para um público não-técnico. Transformamos dados brutos em insights claros e acionáveis, sem necessidade de treinamento.',
      role: 'Designer de Produto Sênior',
    },
  },
]

// ── Case Studies ──────────────────────────────────────────────────────────────
export const CASE_STUDIES: Record<string, CaseStudy> = {
  proj1: {
    en: {
      eyebrow: 'Sports / Endurance · 2026',
      title: 'Ultra Fuel — Endurance Nutrition Strategy',
      impact: 'Clear race-day plan · Science-backed strategy · Built in 1 week',
      meta: [
        { label: 'Product',   value: 'App for endurance race nutrition strategy' },
        { label: 'My Role',   value: 'Product Designer · AI Builder' },
        { label: 'Timeline',  value: '1 week' },
        { label: 'Team',      value: 'Solo project · Built with AI-assisted development' },
      ],
      sections: [
        {
          title: 'Problem',
          body: 'In endurance events — especially ultramarathons — athletes need to correctly balance carbs, hydration, and electrolytes to sustain performance for many hours.\n\nMost runners, however, still plan nutrition empirically: counting gels or foods without understanding their real physiological needs. This often leads to underfuelling, dehydration, and performance drops.\n\nThere are almost no tools that help athletes turn sports nutrition recommendations into a clear race strategy before the event.',
        },
        {
          title: 'Discovery',
          body: 'Endurance athletes frequently struggle to calculate how much carbohydrate, fluid, and sodium they need to consume per hour in long races.\n\nMost nutrition plans are based on copying friends or deciding “on the fly” during the race, instead of following a structured plan. This revealed an opportunity to turn sports nutrition guidelines into a simple, personalised race plan that athletes can trust.',
        },
        {
          title: 'Process',
          body: 'To explore the idea quickly, I used a vibe-coding flow that combined product design, AI, and development to turn the concept into a functional MVP.\n\nInstead of separating long design and build phases, I worked in tight loops where idea, interface, and code evolved together — testing the product logic directly in a real prototype.\n\nThe process followed three main steps:\n\n1. Problem and product logic\nI structured the experience around the core need: calculating carbs, hydration, and sodium per hour and transforming these values into a race-day nutrition plan.\n\n2. Fast MVP build\nI used Claude to generate the first version of the app in HTML, CSS, and JavaScript, including the nutrition calculations and the main product flow.\n\n3. Iteration and refinement\nWith the MVP running, I refined the experience inside Cursor, adjusting inputs, calculations, and how the race plan is displayed.\n\nThis flow turned an idea into a working product in a few hours, accelerating experimentation and validation.',
        },
        {
          title: 'Solution',
          body: 'Ultra Fuel converts sports nutrition guidelines into a clear, hour-by-hour plan for endurance races. Athletes enter race duration, intensity and preferred fuels; the app calculates carb, fluid and sodium targets and translates them into concrete actions for race day.',
        },
        {
          title: 'Impact',
          metrics: [
            { val: '1',   sup: 'week', desc: 'From concept to working MVP' },
            { val: '3',   sup: '×',    desc: 'Key variables tracked: carbs, fluids, sodium' },
            { val: '∞',   sup: '',     desc: 'Scenarios to experiment with before race day' },
          ],
          body: 'The project demonstrates how AI-assisted development can compress the distance between idea, interface, and working product — especially for niche tools that traditional product teams often overlook.',
        },
      ],
    },
    pt: {
      eyebrow: 'Sports / Endurance · 2026',
      title: 'Ultra Fuel — Estratégia de Nutrição',
      impact: 'Plano de prova claro · Estratégia baseada em ciência · Construído em 1 semana',
      meta: [
        { label: 'Produto',  value: 'App para estratégia de nutrição em provas de endurance' },
        { label: 'Meu Papel', value: 'Product Designer · AI Builder' },
        { label: 'Duração',  value: '1 semana' },
        { label: 'Time',     value: 'Projeto solo · Construído com desenvolvimento assistido por IA' },
      ],
      sections: [
        {
          title: 'Problema',
          body: 'Em provas de endurance, especialmente ultramaratonas, atletas precisam equilibrar corretamente carboidrato, hidratação e eletrólitos para sustentar o desempenho por várias horas.\n\nApesar disso, a maioria dos corredores planeja sua nutrição de forma empírica — contando géis ou alimentos, sem entender suas necessidades fisiológicas reais.\n\nIsso frequentemente resulta em erros durante a prova, como baixa ingestão de energia, desidratação e queda de performance, agravados pelo fato de que quase não existem ferramentas que ajudem atletas a planejar sua estratégia nutricional antes da corrida.',
        },
        {
          title: 'Descoberta',
          body: 'Atletas de endurance frequentemente têm dificuldade em calcular quanto carboidrato, hidratação e sódio precisam consumir durante provas longas.\n\nA maioria planeja a alimentação de forma empírica — copiando estratégias de outros corredores ou decidindo o que comer durante a prova.\n\nIsso revelou uma oportunidade de criar uma ferramenta que transforme recomendações de nutrição esportiva em um plano simples e personalizado para a corrida.',
        },
        {
          title: 'Processo',
          body: 'Para explorar a ideia rapidamente, utilizei um fluxo de vibe coding, combinando design de produto, IA e desenvolvimento para transformar o conceito em um MVP funcional.\n\nEm vez de separar longas etapas de design e desenvolvimento, trabalhei em ciclos rápidos onde ideia, interface e código evoluíam ao mesmo tempo. Isso permitiu testar a lógica do produto diretamente em um protótipo real.\n\nO processo seguiu três etapas principais:\n\n1. Definição do problema e lógica do produto\nEstruturei a experiência em torno da principal necessidade do atleta: calcular carboidrato, hidratação e sódio por hora e transformar esses valores em um plano de alimentação para a prova.\n\n2. Construção rápida do MVP\nUtilizei o Claude para gerar a primeira versão do aplicativo em HTML, CSS e JavaScript, incluindo a lógica de cálculo nutricional e o fluxo principal do produto.\n\n3. Iteração e refinamento\nCom o MVP funcionando, refinei a experiência e o comportamento da interface utilizando o Cursor, ajustando inputs, cálculos e visualização do plano de prova.\n\nEsse fluxo permitiu transformar uma ideia em um produto funcional em poucas horas, acelerando o processo de experimentação e validação do conceito.',
        },
        {
          title: 'Solução',
          body: 'Criei o Ultra Fuel, um aplicativo que ajuda corredores a planejar a nutrição antes de provas longas. A ferramenta calcula automaticamente carboidrato, hidratação e sódio por hora com base nas características da prova e transforma essas necessidades fisiológicas em um plano simples de alimentação, utilizando alimentos reais como géis, bananas ou isotônicos para orientar o atleta durante toda a corrida.',
        },
        {
          title: 'Impacto',
          metrics: [
            { val: '1',   sup: 'semana', desc: 'Do conceito ao MVP funcional usando vibe coding' },
            { val: '3',   sup: 'variáveis', desc: 'Carboidrato, hidratação e sódio calculados por hora' },
            { val: '∞',   sup: 'cenários', desc: 'Estratégias de nutrição que o atleta pode testar antes da prova' },
          ],
          body: 'O projeto demonstra como o vibe coding pode acelerar drasticamente o ciclo entre ideia, design e produto funcional. Em poucos dias foi possível transformar conhecimento de nutrição esportiva em uma ferramenta prática que ajuda atletas a planejar sua estratégia de prova de forma simples e clara.',
        },
      ],
    },
  },
  proj2: {
    en: {
      eyebrow: 'Design System · 2023',
      title: 'Enterprise Design System at Scale',
      impact: '↓ 60% handoff time · 6 product teams aligned · 3 products unified',
      meta: [
        { label: 'Product',  value: 'Multi-product SaaS Suite' },
        { label: 'My Role',  value: 'Design Systems Lead' },
        { label: 'Timeline', value: '5 months' },
        { label: 'Team',     value: '3 Designers, 4 Engineers, Brand' },
      ],
      sections: [
        {
          title: 'Problem',
          body: 'Six product teams operated with 6 different component libraries. The same button existed in 4 implementations. Brand inconsistency was visible to users and undermining trust. Design-to-dev handoff averaged 3 weeks per feature.',
        },
        {
          title: 'Discovery',
          body: '— Audited 3 live products and catalogued 240+ unique component instances\n— Interviewed 12 engineers: biggest pain — "I never know which component is the right one"\n— Identified 6 component families covering ~85% of existing UI patterns\n— Benchmarked against Shopify Polaris, Radix UI, and Linear\'s internal system',
        },
        {
          title: 'Design Process',
          body: 'Started with tokens — color, spacing, typography — before touching a single component. Built in public, sharing progress weekly. Adoption required the system to be better than what each team already had, not just more official.\n\nCreated a "migration path" document for each team so the switch felt incremental, not disruptive.',
        },
        {
          title: 'Solution',
          body: 'A unified token-based design system with Figma, React, and documentation components built in parallel. Each component ships with accessibility specs, usage guidelines, and anti-patterns. Living documentation updated on each release.',
        },
        {
          title: 'Impact',
          metrics: [
            { val: '60%', sup: '↓', desc: 'Design-to-dev handoff reduction' },
            { val: '6',   sup: '×', desc: 'Product teams on one system' },
            { val: '240+',sup: '',  desc: 'Components standardised' },
          ],
          body: 'The system became a product in itself. New teams are now onboarded to the design system before writing a single line of code.',
        },
      ],
    },
    pt: {
      eyebrow: 'Design System · 2023',
      title: 'Design System Corporativo em Escala',
      impact: '↓ 60% no tempo de handoff · 6 times alinhados · 3 produtos unificados',
      meta: [
        { label: 'Produto',   value: 'Suite SaaS Multi-produto' },
        { label: 'Meu Papel', value: 'Líder de Design System' },
        { label: 'Duração',   value: '5 meses' },
        { label: 'Time',      value: '3 Designers, 4 Engenheiros, Brand' },
      ],
      sections: [
        {
          title: 'Problema',
          body: 'Seis times de produto operavam com 6 bibliotecas diferentes. O mesmo botão existia em 4 implementações. A inconsistência era visível aos usuários. O handoff levava em média 3 semanas por funcionalidade.',
        },
        {
          title: 'Descoberta',
          body: '— Auditei 3 produtos e cataloguei mais de 240 instâncias únicas de componentes\n— Entrevistei 12 engenheiros: maior dor — "Nunca sei qual componente usar"\n— Identifiquei 6 famílias cobrindo ~85% dos padrões de UI existentes\n— Benchmarking com Shopify Polaris, Radix UI e o sistema interno do Linear',
        },
        {
          title: 'Processo de Design',
          body: 'Comecei pelos tokens — cor, espaçamento, tipografia. Construí de forma aberta, compartilhando o progresso semanalmente. A adoção exigia que o sistema fosse melhor, não apenas mais oficial.\n\nCriei um documento de "caminho de migração" para cada time.',
        },
        {
          title: 'Solução',
          body: 'Um design system unificado baseado em tokens com componentes Figma, React e documentação construídos em paralelo. Cada componente é entregue com especificações de acessibilidade e diretrizes de uso.',
        },
        {
          title: 'Impacto',
          metrics: [
            { val: '60%', sup: '↓', desc: 'Redução no handoff design-dev' },
            { val: '6',   sup: '×', desc: 'Times de produto em um sistema' },
            { val: '240+',sup: '',  desc: 'Componentes padronizados' },
          ],
          body: 'O sistema tornou-se um produto em si. Novos times são integrados ao design system antes de escrever uma linha de código.',
        },
      ],
    },
  },
  proj3: {
    en: {
      eyebrow: 'Mobile / E-commerce · 2023',
      title: 'Mobile Checkout Conversion',
      impact: '↑ 31% checkout completion · Steps reduced 7→3 · 8 weeks to launch',
      meta: [
        { label: 'Product',  value: 'Retail Mobile App' },
        { label: 'My Role',  value: 'Product Designer' },
        { label: 'Timeline', value: '8 weeks' },
        { label: 'Team',     value: 'PM, iOS/Android Engineers, Analytics' },
      ],
      sections: [
        {
          title: 'Problem',
          body: 'A high-traffic retail app had a checkout abandonment rate of 68% on mobile — above the 55% industry average. Users were adding items to cart but not completing purchases. Leadership made it a Q2 priority.',
        },
        {
          title: 'Discovery',
          body: '— Session recordings showed users abandoning most on step 4 (address) and step 6 (payment)\n— The flow required 7 screens across 3 "phases" — no sense of progress\n— 30% of payment failures were due to card entry formatting\n— 6 out of 8 interviewed users said: "I didn\'t know how many more steps there were"',
        },
        {
          title: 'Design Process',
          body: 'Mapped every interaction point across the 7-step flow. Found immediate wins: progress clarity, error tone, auto-fill hooks, and inline address validation. The redesign collapsed 7 screens to 3 logical sections on a single scrollable canvas.',
        },
        {
          title: 'Solution',
          body: 'A single-page checkout with accordion sections — delivery, payment, review. Persistent progress bar, inline error resolution, and native payment sheet integration for returning users. The experience is as fast as the user wants it to be.',
        },
        {
          title: 'Impact',
          metrics: [
            { val: '31%', sup: '↑', desc: 'Checkout completion rate' },
            { val: '7→3', sup: '',  desc: 'Steps reduced' },
            { val: '8w',  sup: '',  desc: 'From discovery to launch' },
          ],
          body: 'Shipped in 8 weeks. The improved payment field alone reduced form errors by 44%. This became the foundation for the app\'s next two major releases.',
        },
      ],
    },
    pt: {
      eyebrow: 'Mobile / E-commerce · 2023',
      title: 'Conversão no Checkout Mobile',
      impact: '↑ 31% na taxa de conclusão · Etapas 7→3 · 8 semanas para o lançamento',
      meta: [
        { label: 'Produto',   value: 'App Mobile de Varejo' },
        { label: 'Meu Papel', value: 'Designer de Produto' },
        { label: 'Duração',   value: '8 semanas' },
        { label: 'Time',      value: 'PM, Engenheiros iOS/Android, Analytics' },
      ],
      sections: [
        {
          title: 'Problema',
          body: 'Um app de varejo com alto tráfego tinha taxa de abandono de 68% no mobile — acima da média do setor de 55%. Os usuários adicionavam itens mas não concluíam as compras.',
        },
        {
          title: 'Descoberta',
          body: '— Gravações de sessão mostraram abandono nas etapas 4 (endereço) e 6 (pagamento)\n— O fluxo exigia 7 telas em 3 "fases" separadas — sem noção de progresso\n— 30% das falhas de pagamento eram por formatação do campo do cartão\n— 6 de 8 usuários entrevistados disseram: "Não sabia quantas etapas ainda faltavam"',
        },
        {
          title: 'Processo de Design',
          body: 'Mapeei cada ponto de interação no fluxo de 7 etapas. Encontrei ganhos imediatos: clareza de progresso, tom dos erros, auto-preenchimento e validação de endereço inline. O redesign colapsou 7 telas em 3 seções lógicas.',
        },
        {
          title: 'Solução',
          body: 'Um checkout de página única com seções em accordion — entrega, pagamento, revisão. Barra de progresso persistente, resolução de erros inline e integração nativa do sheet de pagamento para usuários recorrentes.',
        },
        {
          title: 'Impacto',
          metrics: [
            { val: '31%',   sup: '↑', desc: 'Taxa de conclusão do checkout' },
            { val: '7→3',   sup: '',  desc: 'Etapas reduzidas' },
            { val: '8 sem.',sup: '',  desc: 'Da descoberta ao lançamento' },
          ],
          body: 'O campo de pagamento melhorado sozinho reduziu erros em 44%. Isso se tornou a base para as próximas duas versões principais do app.',
        },
      ],
    },
  },
  proj4: {
    en: {
      eyebrow: 'Data / Dashboard · 2022',
      title: 'Analytics Dashboard for Non-technical Users',
      impact: 'Zero training required · ↑ 3.8× weekly active usage · NPS +38pts',
      meta: [
        { label: 'Product',  value: 'B2B Analytics Platform' },
        { label: 'My Role',  value: 'Lead Product Designer' },
        { label: 'Timeline', value: '12 weeks' },
        { label: 'Team',     value: 'PM, 3 Engineers, Data Science' },
      ],
      sections: [
        {
          title: 'Problem',
          body: 'A powerful analytics platform was only used by a fraction of its paying base. Power users loved it. Everyone else opened it once, felt overwhelmed, and never came back. The data was good. The experience was inaccessible.',
        },
        {
          title: 'Discovery',
          body: '— Non-technical users described the interface as "made for someone who already knows what they\'re looking for"\n— The default dashboard showed 40+ data points with no hierarchy\n— Most users\' primary question: "How is my business doing this week?" — the platform couldn\'t answer it on the first screen\n— Benchmarked Mixpanel, Amplitude, and Notion\'s analytics for progressive disclosure strategies',
        },
        {
          title: 'Design Process',
          body: 'Started with the "one question test" — if a non-technical user could only see one number, what would it be? Built the entire hierarchy from that question outward.\n\nKey tension: power users needed depth. Solution: progressive disclosure where complexity is always one click deeper, never in the way.',
        },
        {
          title: 'Solution',
          body: 'A redesigned dashboard with a clear three-tier hierarchy: headline KPIs, trend context, and detailed drill-down. Smart defaults, plain-language labels, and exportable insight summaries that non-technical stakeholders could share without interpretation.',
        },
        {
          title: 'Impact',
          metrics: [
            { val: '3.8×', sup: '',   desc: 'Increase in weekly active users' },
            { val: '+38',  sup: 'pt', desc: 'NPS improvement post-launch' },
            { val: '0',    sup: '',   desc: 'Training sessions required' },
          ],
          body: 'Weekly active usage grew 3.8× in the first 60 days. Support tickets dropped 55%. The redesign became a key selling point in demos for non-technical buyers.',
        },
      ],
    },
    pt: {
      eyebrow: 'Dados / Dashboard · 2022',
      title: 'Dashboard de Analytics para Usuários Não-técnicos',
      impact: 'Zero treinamentos · ↑ 3,8× no uso semanal · NPS +38pts',
      meta: [
        { label: 'Produto',   value: 'Plataforma de Analytics B2B' },
        { label: 'Meu Papel', value: 'Designer de Produto Sênior' },
        { label: 'Duração',   value: '12 semanas' },
        { label: 'Time',      value: 'PM, 3 Engenheiros, Ciência de Dados' },
      ],
      sections: [
        {
          title: 'Problema',
          body: 'Uma poderosa plataforma de analytics era usada por apenas uma pequena fração. Usuários avançados adoravam. Todos os outros abriam uma vez, se sentiam sobrecarregados e nunca mais voltavam.',
        },
        {
          title: 'Descoberta',
          body: '— Não-técnicos descreveram a interface como "feita para quem já sabe o que está procurando"\n— O dashboard padrão mostrava 40+ pontos de dados sem hierarquia\n— Pergunta principal dos usuários: "Como está meu negócio essa semana?" — a plataforma não respondia na primeira tela\n— Benchmarking com Mixpanel, Amplitude e Notion para estratégias de divulgação progressiva',
        },
        {
          title: 'Processo de Design',
          body: 'Comecei com o "teste de uma pergunta" — se um usuário não-técnico pudesse ver apenas um número, qual seria? Construí toda a hierarquia a partir dessa pergunta.\n\nTensão principal: usuários avançados precisavam de profundidade. Solução: divulgação progressiva onde a complexidade está sempre a um clique de distância.',
        },
        {
          title: 'Solução',
          body: 'Um dashboard redesenhado com hierarquia de três níveis: KPIs principais, contexto de tendências e drill-down detalhado. Padrões inteligentes, rótulos em linguagem simples e resumos exportáveis.',
        },
        {
          title: 'Impacto',
          metrics: [
            { val: '3,8×', sup: '',   desc: 'Aumento nos usuários ativos semanais' },
            { val: '+38',  sup: 'pt', desc: 'Melhoria no NPS pós-lançamento' },
            { val: '0',    sup: '',   desc: 'Sessões de treinamento necessárias' },
          ],
          body: 'O uso semanal cresceu 3,8× nos primeiros 60 dias. Tickets de suporte caíram 55%. O redesign tornou-se um ponto de venda chave em demos para compradores não-técnicos.',
        },
      ],
    },
  },
}

// ── Process Steps ─────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    en: {
      title: 'Discover',
      desc: 'I start with context — business goals, user behaviour, and constraints. I ask questions before I sketch anything.',
    },
    pt: {
      title: 'Descobrir',
      desc: 'Começo pelo contexto — objetivos de negócio, comportamento do usuário e restrições. Faço perguntas antes de esboçar qualquer coisa.',
    },
  },
  {
    num: '02',
    en: {
      title: 'Define',
      desc: 'Turning research into a crisp problem statement. If you can\'t say it in one sentence, the problem isn\'t solved yet.',
    },
    pt: {
      title: 'Definir',
      desc: 'Transformar pesquisa em uma definição clara do problema. Se não cabe em uma frase, ainda não está resolvido.',
    },
  },
  {
    num: '03',
    en: {
      title: 'Design',
      desc: 'Exploration, not decoration. I work in high iteration velocity — low fidelity fast, high fidelity only when the idea earns it.',
    },
    pt: {
      title: 'Projetar',
      desc: 'Exploração, não decoração. Trabalho em alta velocidade de iteração — baixa fidelidade rápido, alta fidelidade só quando a ideia merece.',
    },
  },
  {
    num: '04',
    en: {
      title: 'Deliver',
      desc: 'Ship and measure. Design decisions live and die by outcomes. I stay close through implementation to protect the intent.',
    },
    pt: {
      title: 'Entregar',
      desc: 'Entregar e medir. Decisões de design valem pelos resultados. Fico próximo durante a implementação para proteger a intenção.',
    },
  },
]

// ── About stats ───────────────────────────────────────────────────────────────
export const ABOUT_STATS: AboutStat[] = [
  { number: '6', sup: '+', en: 'Years of experience', pt: 'Anos de experiência' },
  { number: '20', sup: '+', en: 'Products shipped',   pt: 'Produtos entregues' },
  { number: '3',           en: 'Industries',          pt: 'Indústrias' },
]
