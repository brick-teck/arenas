import { useEffect, useRef, useState } from "react";
import futvolei from "../assets/ftv.webp";
import beach from "../assets/beacht.webp";
import pickle from "../assets/pickle.webp";
import tennis from "../assets/tennis.webp";
import Icon from "./Icon";
import "./Activities.css";

const sports = [
  {
    id: "futevolei",
    name: "Futevôlei",
    image: futvolei,
    tag: "PÉ NA AREIA, ENERGIA LÁ EM CIMA",
    description:
      "Da primeira troca de bola à resenha depois do treino. Encontre seu ritmo na areia e faça de cada partida um bom encontro.",
    details: ["Quadras de areia", "Treino e diversão", "Jogo em equipe"],
  },
  {
    id: "beach-tennis",
    name: "Beach Tennis",
    image: beach,
    tag: "UM SAQUE PARA SAIR DA ROTINA",
    description:
      "Raquete na mão e os pés na areia. Uma combinação de técnica, agilidade e bons momentos para você se apaixonar pelo jogo.",
    details: ["Quadras de areia", "Técnica e agilidade", "Partidas em dupla"],
  },
  {
    id: "pickleball",
    name: "Pickleball",
    image: pickle,
    tag: "DESCUBRA SEU PRÓXIMO ESPORTE",
    description:
      "Trocas rápidas e diversão a cada ponto. Experimente uma nova maneira de movimentar o corpo e desafiar seus reflexos.",
    details: ["Jogo dinâmico", "Agilidade e reflexos", "Novas conexões"],
  },
  {
    id: "tenis",
    name: "Tênis",
    image: tennis,
    tag: "FOCO EM CADA PONTO",
    description:
      "Um clássico que sempre tem algo novo a ensinar. Aperfeiçoe seu saque, trabalhe a concentração e aproveite o tempo dentro de quadra.",
    details: [
      "Treino de fundamentos",
      "Técnica e precisão",
      "Seu ritmo de jogo",
    ],
  },
];

function indexFromHash() {
  return Math.max(
    0,
    sports.findIndex((sport) => `#${sport.id}` === window.location.hash),
  );
}

export default function Activities() {
  const [active, setActive] = useState(indexFromHash);
  const tabs = useRef([]);
  const section = useRef(null);
  useEffect(() => {
    const sync = () => {
      const index = sports.findIndex(
        (sport) => `#${sport.id}` === window.location.hash,
      );
      if (index >= 0) {
        setActive(index);
        section.current?.scrollIntoView({ block: "start" });
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const selectSport = (index) => {
    setActive(index);
    window.history.replaceState(null, "", `#${sports[index].id}`);
  };
  const onKeyDown = (event, index) => {
    const keys = {
      ArrowRight: (index + 1) % sports.length,
      ArrowLeft: (index + sports.length - 1) % sports.length,
      Home: 0,
      End: sports.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      selectSport(keys[event.key]);
      tabs.current[keys[event.key]]?.focus();
    }
  };
  const current = sports[active];
  return (
    <section
      ref={section}
      id="atividades"
      className="activities section-space"
      aria-labelledby="activities-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ENCONTRE O SEU JOGO</p>
            <h2 id="activities-title">
              O próximo ponto
              <br />é <span>todo seu.</span>
            </h2>
          </div>
          <p>
            Na areia ou na quadra, sempre existe
            <br className="desktop-break" /> uma nova forma de se movimentar.
          </p>
        </div>
        <div
          className="activities-tabs"
          role="tablist"
          aria-label="Modalidades esportivas"
        >
          {sports.map((sport, index) => (
            <button
              key={sport.id}
              ref={(el) => {
                tabs.current[index] = el;
              }}
              id={`tab-${sport.id}`}
              role="tab"
              aria-selected={active === index}
              aria-controls="sport-panel"
              tabIndex={active === index ? 0 : -1}
              onClick={() => selectSport(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span>{sport.name}</span>
              <Icon name="diagonal" />
            </button>
          ))}
        </div>
        <div
          className="sport-panel"
          id="sport-panel"
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          tabIndex="0"
        >
          <div className="court-stage">
            <div className="court-orbit" aria-hidden="true" />
            <img
              src={current.image}
              width="1920"
              height="1080"
              loading="lazy"
              alt={`Ilustração da quadra de ${current.name}`}
            />
            <span className="court-caption">
              <Icon name="court" /> ESPAÇO PARA O SEU MELHOR JOGO
            </span>
          </div>
          <div className="sport-copy">
            <p className="eyebrow">{current.tag}</p>
            <h3>{current.name}</h3>
            <p>{current.description}</p>
            <ul>
              {current.details.map((detail) => (
                <li key={detail}>
                  <Icon name="check" />
                  {detail}
                </li>
              ))}
            </ul>
            <a className="text-link" href="#contato">
              Quero conhecer <Icon name="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
