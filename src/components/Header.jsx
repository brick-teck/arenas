import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";
import Icon from "./Icon";
import "./Header.css";

const links = [
  ["Modalidades", "#atividades"],
  ["Bem-estar", "#bem-estar"],
  ["O clube", "#sobre"],
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggle.current?.focus();
      }
    };
    const query = window.matchMedia("(min-width: 901px)");
    const resize = () => {
      if (query.matches) setIsOpen(false);
    };
    document.addEventListener("keydown", close);
    query.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      query.removeEventListener("change", resize);
    };
  }, [isOpen]);
  return (
    <header className="header">
      <div className="header-container container">
        <Brand />
        <nav className="header-nav" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="button button-pine header-cta" href="#contato">
          Agendar visita <Icon name="arrow" />
        </a>
        <button
          ref={toggle}
          className="header-hamburger"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name={isOpen ? "close" : "menu"} />
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="header-mobile-menu"
        aria-label="Navegação móvel"
        hidden={!isOpen}
      >
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setIsOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="button button-pine"
          href="#contato"
          onClick={() => setIsOpen(false)}
        >
          Agendar visita <Icon name="arrow" />
        </a>
      </nav>
    </header>
  );
}
