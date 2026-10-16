import photo from "../assets/background.webp";
import Icon from "./Icon";
import "./About.css";

export default function About() {
  return (
    <section
      id="sobre"
      className="about section-space"
      aria-labelledby="about-title"
    >
      <div className="container about-container">
        <div className="about-photo">
          <img
            src={photo}
            width="2816"
            height="1536"
            loading="lazy"
            alt="Quadras e áreas de convivência do Vila Reserva"
          />
          <div className="about-photo-caption">
            <Icon name="sun" />
            <span>
              Seu ponto de encontro
              <br />
              <strong>com uma rotina mais leve.</strong>
            </span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">NOSSO JEITO DE SER</p>
          <h2 id="about-title">
            Mais que um clube.
            <br />
            <span>Um lugar para ficar.</span>
          </h2>
          <p>
            O Vila Reserva nasceu de uma ideia simples: o movimento transforma.
            E fica ainda melhor quando vem acompanhado de natureza, acolhimento
            e boas conexões.
          </p>
          <p>
            Da energia das quadras à pausa depois do treino, cada espaço é um
            convite para sair do automático e aproveitar o seu tempo.
          </p>
          <div className="about-values">
            <div>
              <Icon name="court" />
              <h3>Espaço para evoluir</h3>
              <p>
                Estrutura pensada para o seu conforto e para cada nova
                conquista.
              </p>
            </div>
            <div>
              <Icon name="people" />
              <h3>Gente que se conecta</h3>
              <p>
                Uma comunidade para dividir o jogo, a conversa e os bons
                momentos.
              </p>
            </div>
          </div>
          <a className="text-link" href="#contato">
            Venha viver o Vila <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
