import Brand from "./Brand";
import Icon from "./Icon";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand />
            <p>
              Movimento, natureza e boas conexões.
              <br />
              Um respiro que faz parte da sua rotina.
            </p>
          </div>
          <div className="footer-col">
            <h3>Explore o Vila</h3>
            <a href="#sobre">O clube</a>
            <a href="#bem-estar">Bem-estar</a>
            <a href="#contato">Planeje sua visita</a>
          </div>
          <div className="footer-col">
            <h3>Seu próximo jogo</h3>
            <a href="#futevolei">Futevôlei</a>
            <a href="#beach-tennis">Beach Tennis</a>
            <a href="#tenis">Tênis</a>
            <a href="#pickleball">Pickleball</a>
          </div>
          <a className="footer-back" href="#inicio">
            De volta ao início <Icon name="diagonal" />
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vila Reserva Sports.</p>
          <span>SEU TEMPO. SEU RITMO. SEU LUGAR.</span>
        </div>
      </div>
    </footer>
  );
}
