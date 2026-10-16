import background from "../assets/background.webp";
import mobileBackground from "../assets/background-mobile.webp";
import Icon from "./Icon";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span /> ESPORTE. NATUREZA. CONEXÃO.
          </p>
          <h1 id="hero-title">
            O seu novo
            <br />
            <span>refúgio</span>
            <br />
            esportivo.
          </h1>
          <p className="hero-description">
            Mais movimento para o corpo.
            <br />
            Mais respiro para a sua rotina.
          </p>
          <div className="hero-buttons">
            <a className="button button-sand" href="#atividades">
              Explorar modalidades <Icon name="arrow" />
            </a>
            <a className="hero-secondary" href="#sobre">
              Conhecer o clube <Icon name="diagonal" />
            </a>
          </div>
          <div className="hero-footnote">
            <span /> Seu tempo. Seu ritmo. Seu lugar.
          </div>
        </div>
        <div className="hero-visual">
          <picture>
            <source media="(max-width: 600px)" srcSet={mobileBackground} />
            <img
              src={background}
              width="2816"
              height="1536"
              fetchPriority="high"
              alt="Vista das quadras de areia e tênis junto ao espaço de convivência do clube"
            />
          </picture>
          <span className="hero-photo-label">BEM-VINDO AO VILA RESERVA</span>
          <div className="hero-image-note">
            <Icon name="leaf" />
            <span>
              O melhor da vida
              <br />
              <strong>acontece em movimento.</strong>
            </span>
          </div>
        </div>
      </section>
      <div className="club-strip">
        <div className="container club-strip-inner">
          <p>
            Uma pausa na rotina.
            <br />
            <strong>Um encontro com você.</strong>
          </p>
          <span>
            <Icon name="court" /> Esporte para todos os ritmos
          </span>
          <span>
            <Icon name="leaf" /> Corpo e mente em equilíbrio
          </span>
          <a href="#atividades" aria-label="Descobrir as modalidades">
            <Icon name="down" />
          </a>
        </div>
      </div>
    </>
  );
}
