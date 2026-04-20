import './Hero.css';
import HeroBg from '../assets/background.png';

export default function Hero() {
  return (
    <section id="inicio" className="hero">

      {/* BACKGROUND */}
      <div className="hero-bg">
        <img src={HeroBg} alt="Fundo Vila Reserva" />
        <div className="hero-overlay-green"></div>
        <div className="hero-overlay-gradient"></div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="hero-content">
        <h1>
          O seu novo refúgio <span>esportivo.</span>
        </h1>

        <p>
          Muito mais que um clube. Um espaço exclusivo projetado para o seu movimento,
          saúde e bem-estar no coração da cidade.
        </p>

        {/* Botões de Ação */}
        <div className="hero-buttons">
          <button className="btn-primary">Explorar Modalidades</button>
          <button className="btn-secondary">Conhecer Estrutura</button>
        </div>
      </div>

    </section>
  );
}