# Estratégia de Design - Automação Residencial PWM

## Abordagem Selecionada: Futurismo Acessível

### Design Movement
**Futurismo Acessível** — Uma estética que combina tecnologia de ponta com clareza e confiabilidade. Inspira-se em interfaces de controle modernas, painéis de monitoramento sofisticados e design industrial contemporâneo. O objetivo é fazer a tecnologia parecer poderosa, mas nunca intimidadora.

### Core Principles
1. **Confiança através da Clareza**: Cada elemento comunica função de forma imediata. Sem mistério, sem abstrações desnecessárias.
2. **Modernidade Tangível**: Uso estratégico de gradientes, sombras e transições para criar profundidade sem parecer frívolo.
3. **Hierarquia Forte**: Tipografia e espaçamento criam fluxo visual claro que guia o usuário através dos serviços.
4. **Precisão Técnica**: Detalhes refinados — bordas limpas, alinhamentos perfeitos, proporções harmônicas — reforçam a ideia de engenharia de qualidade.

### Color Philosophy
**Laranja + Preto** como identidade de marca:
- **Laranja Primário** (`#FF8C00` - Laranja Escuro): Energia, inovação, ação. Usado em CTAs, destaques e elementos interativos. Representa o poder da automação.
- **Preto Base** (`#0F0F0F`): Sofisticação, confiabilidade, contraste. Fundo principal que faz o laranja brilhar. Reforça a seriedade profissional.
- **Cinza Neutro** (`#E8E8E8`, `#404040`): Suporte visual, separadores, backgrounds secundários. Mantém legibilidade e equilíbrio.
- **Branco Puro** (`#FFFFFF`): Texto sobre fundo escuro, áreas de conteúdo limpo. Máximo contraste para leitura.

**Intenção Emocional**: O laranja transmite otimismo e controle; o preto transmite profundismo e confiança. Juntos, criam uma sensação de "tecnologia que funciona".

### Layout Paradigm
- **Hero Section Assimétrica**: Imagem/gradiente à direita, texto + CTA à esquerda. Cria movimento visual e não é genérica.
- **Grid de Serviços em Cascata**: Três colunas em desktop, mas com cards que variam em altura e posição (não uniformes). Cada card tem um ícone grande, título, descrição e micro-interação.
- **Seção de Recursos com Alternância**: Texto à esquerda, imagem à direita; depois inverte. Mantém o leitor engajado.
- **Footer Minimalista**: Links, contato e branding, sem ruído visual.

### Signature Elements
1. **Ícones Customizados Laranja**: Todos os ícones de serviço (cortina, medidor, IA) em laranja com fundo sutil. Criam consistência visual.
2. **Gradiente Laranja-Preto Sutil**: Usado em backgrounds de seções, borders de cards, e hover states. Nunca dominante, sempre elegante.
3. **Efeito de "Acendimento"**: Ao passar o mouse sobre cards, um brilho laranja suave aparece, sugerindo "ativação" da tecnologia.

### Interaction Philosophy
- **Hover States Significativos**: Cards levantam (box-shadow), texto muda de cor para laranja, ícone cresce ligeiramente.
- **Transições Suaves**: Todas as mudanças de estado usam `ease-out` de 200-300ms. Nada é abrupto.
- **Feedback Visual**: Botões mudam de cor e escala ao clicar, dando sensação de "pressionado".
- **Scroll Animations**: Elementos entram da tela com fade + slide suave ao rolar a página.

### Animation
- **Entrada de Elementos**: Fade + slide de 400ms com `cubic-bezier(0.23, 1, 0.32, 1)` (ease-out forte).
- **Hover em Cards**: Scale 1.02 + shadow expansion em 200ms.
- **Botões**: Scale 0.97 ao `:active`, transição de 160ms.
- **Gradientes Animados**: Fundo com gradiente laranja-preto que se move sutilmente (infinito, 8s).
- **Respeita `prefers-reduced-motion`**: Desabilita animações para usuários que preferem.

### Typography System
- **Display Font**: `Poppins` (bold, 700) para títulos principais e seções. Moderna, geométrica, transmite confiança.
- **Body Font**: `Inter` (regular, 400-500) para corpo de texto. Legível, neutra, profissional.
- **Hierarchy**:
  - H1: `Poppins 700`, 48px (mobile: 36px), cor preta ou branca (conforme fundo)
  - H2: `Poppins 700`, 32px (mobile: 24px)
  - H3: `Poppins 600`, 24px
  - Body: `Inter 400`, 16px
  - Small: `Inter 400`, 14px

### Brand Essence
**Posicionamento**: Automação residencial inteligente que torna a vida mais fácil, segura e eficiente — para quem valoriza tecnologia e conforto.

**Personalidade**: Inovador, Confiável, Acessível.

**Brand Voice**:
- Headlines: Diretos, benefício-focados. Ex: "Sua casa inteligente, no seu controle" (não "Bem-vindo ao nosso site").
- CTAs: Ação clara. Ex: "Solicitar Demonstração" (não "Clique aqui").
- Microcopy: Técnico mas amigável. Ex: "Monitore consumo de água e energia em tempo real" (não "Sistema avançado de telemetria").

### Wordmark & Logo
**Conceito**: Um símbolo gráfico que combina:
- Uma **casa estilizada** (base triangular) com um **ponto/nó laranja** no centro (representando "inteligência" e "controle").
- Sem texto no logo, apenas o símbolo. Deve funcionar em 32px até 512px.
- Versão monocromática em preto e versão em laranja para flexibilidade.

### Signature Brand Color
**Laranja Vibrante** (`#FF8C00`): Cor que é imediatamente reconhecível como "PWM Automação". Usada em:
- Botões primários
- Ícones de serviço
- Destaques de texto
- Borders de elementos ativos
- Gradientes de fundo

---

## Resumo da Implementação
- **Cores**: Laranja (#FF8C00) + Preto (#0F0F0F) + Cinza (#E8E8E8) + Branco (#FFFFFF)
- **Fontes**: Poppins (títulos) + Inter (corpo)
- **Layout**: Assimétrico, moderno, não-genérico
- **Animações**: Suaves, significativas, respeitam preferências do usuário
- **Tom**: Profissional, inovador, acessível
