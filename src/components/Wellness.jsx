import gym from "../assets/gym-bg.webp";
import pilates from "../assets/pilates-bg.webp";
import massage from "../assets/massage-bg.webp";
import Icon from "./Icon";
import "./Wellness.css";

const services = [
  {
    id: "academia",
    image: gym,
    category: "FORÇA & ENERGIA",
    name: "Academia",
    text: "Mais força para o treino. Mais disposição para tudo o que vem depois.",
    alt: "Espaço de musculação com equipamentos e pesos livres",
  },
  {
    id: "pilates",
    image: pilates,
    category: "CONTROLE & EQUILÍBRIO",
    name: "Pilates",
    text: "Respire, fortaleça e encontre seu equilíbrio. Um movimento de cada vez.",
    alt: "Estúdio de pilates com aparelhos e iluminação natural",
  },
  {
    id: "massagem",
    image: massage,
    category: "PAUSA & RECUPERAÇÃO",
    name: "Massagem",
    text: "Desacelerar também faz parte. Reserve um tempo para cuidar de você.",
    alt: "Ambiente dedicado a massagem e relaxamento",
  },
];
export default function Wellness() {
  return (
    <section
      id="bem-estar"
      className="wellness section-space"
      aria-labelledby="wellness-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MUITO ALÉM DAS QUADRAS</p>
            <h2 id="wellness-title">
              Movimente o corpo.
              <br />
              <span>Recarregue a mente.</span>
            </h2>
          </div>
          <p>
            Performance e bem-estar se encontram
            <br className="desktop-break" /> no mesmo lugar. No seu tempo.
          </p>
        </div>
        <div className="wellness-grid">
          {services.map((service) => (
            <article id={service.id} className="wellness-card" key={service.id}>
              <div className="wellness-image">
                <img
                  src={service.image}
                  width="1024"
                  height="1024"
                  loading="lazy"
                  alt={service.alt}
                />
                <span>{service.category}</span>
              </div>
              <div className="wellness-card-copy">
                <h3>{service.name}</h3>
                <p>{service.text}</p>
                <a
                  href="#contato"
                  className="wellness-link"
                  aria-label={`Saber mais sobre ${service.name.toLowerCase()}`}
                >
                  <Icon name="diagonal" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="wellness-note">
          <Icon name="leaf" /> Massagens são contratadas à parte, mediante
          consulta e disponibilidade de agenda.
        </p>
      </div>
    </section>
  );
}
