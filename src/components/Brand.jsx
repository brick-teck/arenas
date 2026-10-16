import logo from "../assets/logo_sf.png";

export default function Brand() {
  return (
    <a href="#inicio" className="brand" title="Voltar ao início">
      <span className="brand-symbol" aria-hidden="true">
        <img src={logo} width="500" height="500" alt="" />
      </span>
      <span className="brand-type">
        VILA <strong>RESERVA</strong>
        <span>SPORTS & WELLNESS</span>
      </span>
    </a>
  );
}
