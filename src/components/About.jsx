import './About.css';

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-container">

        {/* TEXTO PRINCIPAL */}
        <div className="about-header">
          <span className="about-label">Sobre o Clube</span>
          <h2 className="about-title">
            Muito mais que um clube. <span>Um refúgio.</span>
          </h2>
          <p className="about-text">
            O Vila Reserva nasceu com um propósito claro: ser o seu refúgio de bem-estar 
            no coração da cidade. Nós acreditamos que o movimento transforma, e por isso 
            criamos um espaço onde a energia contagiante das quadras de areia se encontra 
            com o foco e a disciplina do treinamento de alta performance.
          </p>
        </div>

        {/* PILARES — ícones SVG minimalistas */}
        <div className="about-pillars">

          {/* Estrutura Premium */}
          <div className="pillar-card">
            <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18" />
              <path d="M5 21V7l7-4 7 4v14" />
              <path d="M9 21v-6h6v6" />
            </svg>
            <h3>Estrutura Premium</h3>
            <p>
              Seja para a resenha no futevôlei de fim de tarde, para aperfeiçoar seu saque 
              no tênis, ou para construir sua melhor versão em nossa academia de ponta — 
              cada metro quadrado do Vila Reserva foi pensado para o seu conforto e evolução.
            </p>
          </div>

          {/* Nosso Compromisso */}
          <div className="pillar-card">
            <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <h3>Nosso Compromisso</h3>
            <p>
              Oferecer um ambiente acolhedor, equipamentos premium e uma comunidade vibrante. 
              Aqui, você foge da rotina, cuida do corpo e recarrega a mente.
            </p>
          </div>

        </div>

        {/* NÚMEROS — texto limpo direto no fundo */}
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">6+</div>
            <div className="stat-label">Modalidades</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Quadras</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">m² de área</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Comunidade</div>
          </div>
        </div>

      </div>
    </section>
  );
}
