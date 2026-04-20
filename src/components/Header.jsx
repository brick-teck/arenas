import { useState } from 'react';
import './Header.css';
import logo from '../assets/logo_sf.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Atividades', href: '#atividades' },
    { name: 'Bem-Estar', href: '#bem-estar' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },

  ];

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <a href="#" className="header-logo">
          <img src={logo} alt="Vila Reserva Club" />
        </a>

        {/* Navegação Desktop */}
        <nav className="header-nav">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>

        {/* Botão CTA */}
        <button className="header-cta">Agendar Visita</button>

        {/* Botão Hamburguer (Mobile) */}
        <button
          className="header-hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="header-mobile-menu">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          ))}
          <button className="header-mobile-cta">Agendar Visita</button>
        </div>
      )}
    </header>
  );
}