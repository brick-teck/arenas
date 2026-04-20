import { useState } from 'react';
import './Activities.css';

import BgFutvolei    from '../assets/fundoftv.png';
import BgBeachTennis from '../assets/fundobeacht.png';
import BgPickle      from '../assets/fundopickle.png';
import BgTennis      from '../assets/fundotennis.png';

import QuadraFutvolei    from '../assets/ftv.png';
import QuadraBeachTennis from '../assets/beacht.png';
import QuadraPickle      from '../assets/pickle.png';
import QuadraTennis      from '../assets/tennis.png';

export default function Activities() {
  const [active, setActive] = useState(0);

  const sports = [
    {
      id: 0,
      name: 'Futevôlei',
      bg: BgFutvolei,
      model: QuadraFutvolei,
      description: 'Quadras profissionais de areia com estrutura completa para treinos e campeonatos.',
      info: [
        { icon: '🏖️', label: 'Areia Premium', value: 'Tratamento profissional' },
        { icon: '🕸️', label: 'Rede Oficial',  value: 'Regulamentação CBFv' },
        { icon: '💡', label: 'Iluminação',    value: 'LED de alta potência' },
      ],
    },
    {
      id: 1,
      name: 'Beach Tennis',
      bg: BgBeachTennis,
      model: QuadraBeachTennis,
      description: 'Quadras de areia com equipamentos oficiais para a modalidade que mais cresce no Brasil.',
      info: [
        { icon: '🏖️', label: 'Areia Nivelada', value: 'Preparo profissional' },
        { icon: '🎾', label: 'Rede Official',   value: 'Padrão ITF' },
        { icon: '📐', label: 'Demarcação',      value: 'Medidas oficiais' },
      ],
    },
    {
      id: 2,
      name: 'Pickleball',
      bg: BgPickle,
      model: QuadraPickle,
      description: 'O esporte que conquista o Brasil com quadras modernas e piso antiderrapante premium.',
      info: [
        { icon: '🟦', label: 'Piso',         value: 'Antiderrapante premium' },
        { icon: '🕸️', label: 'Rede',         value: 'Regulamentada USA Pickleball' },
        { icon: '📐', label: 'Zoneamento',   value: 'Cozinha e serviço oficiais' },
      ],
    },
    {
      id: 3,
      name: 'Tênis',
      bg: BgTennis,
      model: QuadraTennis,
      description: 'Quadras de saibro com drenagem profissional e iluminação para jogos noturnos.',
      info: [
        { icon: '🟤', label: 'Saibro',       value: 'Drenagem profissional' },
        { icon: '🕸️', label: 'Rede & Postes', value: 'Padrão ATP/WTA' },
        { icon: '💡', label: 'Iluminação',   value: 'Noturna de alta eficiência' },
      ],
    },
  ];

  const current = sports[active];

  return (
    <section id="atividades" className="activities">

      {/* BACKGROUND DINÂMICO */}
      <div className="activities-bg" key={`bg-${active}`}>
        <img src={current.bg} alt="Fundo" />
        <div className="activities-overlay"></div>
      </div>

      {/* TÍTULO */}
      <div className="activities-header">
        <h2>Nossas <span>Quadras</span></h2>

        {/* ABAS */}
        <div className="activities-tabs">
          {sports.map((sport, index) => (
            <button
              key={sport.id}
              onClick={() => setActive(index)}
              className={`tab-btn ${active === index ? 'tab-btn--active' : ''}`}
            >
              {sport.name}
            </button>
          ))}
        </div>
      </div>

      {/* QUADRA EM DESTAQUE */}
      <div className="activities-court" key={`court-${active}`}>
        <img
          src={current.model}
          alt={`Quadra de ${current.name}`}
          className="court-img"
        />
      </div>

      {/* DESCRIÇÃO + CARDS DE INFO */}
      <div className="activities-details" key={`details-${active}`}>
        <p className="activities-description">{current.description}</p>

        <div className="info-cards">
          {current.info.map((item, i) => (
            <div key={i} className="info-card">
              <span className="info-icon">{item.icon}</span>
              <div>
                <div className="info-label">{item.label}</div>
                <div className="info-value">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
