import './Wellness.css';
import GymBg     from '../assets/gym-bg.png';
import PilatesBg from '../assets/pilates-bg.png';
import MassageBg from '../assets/massage-bg.png';

export default function Wellness() {
  return (
    <section id="bem-estar" className="wellness">
      <div className="wellness-container">


        {/* TÍTULO */}
        <p className="wellness-subtitle">Muito além das quadras</p>
        <h2 className="wellness-title">
          Performance & <span>Bem-Estar</span>
        </h2>
        <p className="wellness-desc">
          Estrutura completa para quem busca resultados e sabe que a recuperação faz parte do treino.
        </p>

        {/* GRID */}
        <div className="wellness-grid">

          {/* ACADEMIA */}
          <div className="wellness-card card-top">
            <img src={GymBg} alt="Academia" />
            <div className="card-overlay"></div>
            <span className="card-badge">Academia</span>
            <div className="card-content">
              <h3>Academia Completa</h3>
              <p>Equipamentos biomecânicos de ponta e pesos livres para hipertrofia ou cutting. Foco total no seu treino.</p>
            </div>
          </div>

          {/* PILATES */}
          <div className="wellness-card card-top">
            <img src={PilatesBg} alt="Pilates" />
            <div className="card-overlay"></div>
            <span className="card-badge">Pilates</span>
            <div className="card-content">
              <h3>Pilates</h3>
              <p>Controle, respiração e mobilidade. Fortaleça o core em um ambiente de tranquilidade total.</p>
            </div>
          </div>

          {/* MASSAGEM */}
          <div className="wellness-card card-bottom">
            <img src={MassageBg} alt="Spa e Recuperação" />
            <div className="card-overlay-solid"></div>
            <div className="massage-content">
              <div className="massage-text">
                <p className="spa-label">Spa & Recuperação</p>
                <h3>A recuperação que você merece</h3>
                <p>Massagem terapêutica e relaxante para o seu rest day. Acelere a recuperação muscular e descanse de verdade.</p>
              </div>
              <div className="disclaimer-box">
                <p className="disclaimer-label">⚠ Serviço Avulso</p>
                <p>Cobrado separadamente da mensalidade. Sujeito à consulta prévia e disponibilidade de agenda.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
