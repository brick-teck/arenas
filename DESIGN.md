---
version: alpha
name: Vila Reserva Sports
description: Um clube esportivo como pausa na rotina, com a energia das quadras e o acolhimento da natureza.
colors:
  pine: "#173f35"
  pine-hover: "#25594b"
  mineral: "#f7f9f5"
  sand: "#ded4b8"
  ink: "#243e35"
  muted: "#5d6d64"
  soft: "#e9eee6"
  line: "#d4ded2"
  on-pine: "#e0e8dc"
  error: "#a22d24"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
rounded:
  DEFAULT: "4px"
spacing:
  page-max: "1240px"
  section-gap: "104px"
components:
  button:
    height: "52px"
    backgroundColor: "{colors.pine}"
    textColor: "{colors.mineral}"
  field:
    height: "47px"
    backgroundColor: "{colors.mineral}"
    textColor: "{colors.ink}"
---

# Vila Reserva Sports

## Overview

Landing page de marca em português brasileiro. O objetivo é apresentar o clube,
facilitar a descoberta das modalidades e levar ao planejamento de uma visita.
O conteúdo-base vem de `infos_clube.md`. O redesign foi aprovado pelo usuário.

A referência é o encontro entre a sinalização de um clube de raquete e os
materiais do espaço: verde das plantas, areia das quadras e superfícies claras.
A assinatura é a abertura dividida: título condensado em três linhas sobre verde
pinho e a fotografia nítida das quadras ao lado. As outras seções são contidas.
Evitar fundos quase pretos, brilhos neon, cartões de vidro e estatísticas sem fonte.

## Colors

`src/index.css :root` é a fonte canônica dos tokens. As chaves de `colors` acima
espelham exatamente as custom properties homônimas (`colors.pine` → `--pine`,
`colors.on-pine` → `--on-pine`, etc.). Os componentes consomem `var(...)`;
transparências são usadas apenas para divisórias e sobreposições decorativas.

Pinho é a ação principal; mineral e soft alternam superfícies. Areia destaca o
título e a ação na abertura. Muted é texto secundário em superfícies claras;
on-pine é texto secundário sobre pinho. Error sempre acompanha mensagem em texto.
Há um único tema claro com blocos de contraste em pinho, sem troca de tema.

## Typography

Barlow Condensed 600 é a fonte de títulos: caixa alta apenas no hero.
DM Sans 400/500/600 é a fonte de texto, navegação e campos. As fontes são locais,
via Fontsource; não há dependência de Google Fonts durante a visita.
`typography.display` → `--font-display`; `typography.body` → `--font-body`.
Textos corridos usam entrelinha de 1,8 a 1,9. Rótulos e ações usam sentence case.

## Layout

`spacing.page-max` → `--page-max`. Grade de 1240px; margens de 56px em desktop,
24px abaixo de 900px e 20px abaixo de 600px. As seções usam 104/72/60px de respiro.
O cabeçalho fixo ocupa 88px em desktop e 76px em telas menores; as âncoras reservam
110px para que títulos e foco não fiquem escondidos.

O hero e o contato viram uma coluna a 600px. As modalidades mantêm quatro abas,
em duas colunas no celular; seu painel reserva a mesma geometria a cada troca.
Bem-estar usa três colunas em desktop e uma no celular. A seção sobre usa uma
coluna abaixo de 900px. Imagens têm dimensões ou proporções reservadas.

## Elevation & Depth

Superfícies planas e alternância de tons organizam a página. Sem sombras em
cartões estáticos. A navegação móvel é um disclosure não modal abaixo do header,
com sombra discreta e sem empurrar o documento. Fotografia sem desfoque.

## Shapes

`rounded.DEFAULT` → `--radius`: 4px para campos, botões e formulário.
Apenas ações com ícone e a órbita ilustrativa das quadras são circulares.
Linhas finas separam abas e conteúdo. Não arredondar todos os painéis em pílulas.

## Components

Brand e Icon são compartilhados. O emblema original é preservado por uma janela
CSS, acompanhado de uma marca textual legível em header e footer.
As ações de navegação são links reais, com hover, active e foco visível.
Botões primários usam pinho; sobre pinho usam areia.

As abas de modalidades seguem tablist/tab/tabpanel, roving tabindex,
setas esquerda/direita e Home/End. Links do footer selecionam a modalidade
correspondente via hash, inclusive no carregamento direto. O menu móvel informa
seu estado com aria-expanded; Escape fecha e devolve foco ao botão.

Select/Listbox é **native**, conforme `premium-ui.json`: a aparência e a geometria
do popup pertencem ao sistema operacional, favorecendo teclado e uso no celular.
O formulário valida no app, associa erros aos campos e foca o primeiro inválido.
É demonstrativo: conferir mostra uma prévia acessível, sem transmitir ou armazenar
dados e sem prometer que houve envio. Editar mantém os valores preenchidos.
Não há backend, estado de espera simulado ou agendamento real.

Ícones de linha de 1,5px são decorativos e acompanham rótulos acessíveis.
Movimento é restrito a feedback de 200ms e zoom discreto nas imagens. O modo
prefers-reduced-motion desliga animações, transições e rolagem suave.
Scrollbars são globais, visíveis e operáveis; forced-colors mantém cores do sistema.

## Do's and Don'ts

- Preservar a combinação entre títulos expressivos e controles familiares.
- Verificar navegação, formulários, teclado e layout em desktop e celular.
- Reutilizar os tokens de index.css e os componentes compartilhados.
- Não inventar números de quadras, áreas, certificações ou contatos de negócio.
- Não indicar que dados foram enviados sem uma integração real.
- Não introduzir animações contínuas ou conteúdo disponível só no hover.
