# arenas

## Vila Reserva Sports

Landing page em React e Vite para apresentar as modalidades, a estrutura e os espaços de bem-estar do clube.

O visual usa verde pinho, branco mineral e areia, títulos em Barlow Condensed e textos em DM Sans. As fontes são servidas localmente. A identidade e as decisões de interface estão em [DESIGN.md](DESIGN.md).

## Executar

```powershell
npm install
npm run dev
```

Abra http://localhost:3000. Para gerar e conferir a versão de produção:

```powershell
npm run build
npm run preview
```

## Verificação

```powershell
npm run lint
npm test
```

Os testes Playwright usam o Google Chrome instalado. Se necessário, instale o navegador com `npx playwright install chrome`.

A suíte verifica links, modalidades por teclado e hash, menu móvel, validação do formulário, movimento reduzido, carregamento de recursos e ausência de overflow em 320, 390, 768 e 1440px. Axe verifica regras automáticas WCAG A/AA nos estados desktop, menu móvel aberto e formulário com erros. Isso não substitui uma avaliação manual completa de acessibilidade.

As capturas de conferência são geradas em `artifacts/` (ignoradas pelo Git). `premium-ui.json` registra o uso de select nativo, com popup controlado pelo sistema operacional, e os comandos de verificação.

## Formulário demonstrativo

O botão **Conferir minha visita** valida nome, e-mail, telefone com DDD e interesse. Dados válidos geram apenas uma prévia local, com aviso de que nada foi enviado ou agendado. Editar preserva os campos. Não há transmissão nem armazenamento persistente de dados.

Para receber solicitações reais, é necessário integrar um canal de atendimento ou backend e revisar os textos antes de publicar.

## Imagens

As imagens originais foram preservadas em `src/assets/`. A página usa versões WebP: a imagem principal passou de aproximadamente 9,58 MB para 747 KB, e há uma variante de 97 KB para celulares. As imagens abaixo da abertura usam carregamento adiado e dimensões reservadas.
