import './Footer.css';
import Logo from '../assets/logo_sf.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* TOPO */}
        <div className="footer-top">

          {/* Marca */}
          <div className="footer-brand">
            <img src={Logo} alt="Vila Reserva Sports" className="footer-logo" />
            <p>
              Seu refúgio esportivo no coração da cidade. Movimento, saúde e comunidade em um só lugar.
            </p>
          </div>

          {/* Navegação */}
          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#atividades">Atividades</a></li>
              <li><a href="#bem-estar">Bem-Estar</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          {/* Modalidades */}
          <div className="footer-col">
            <h4>Modalidades</h4>
            <ul>
              <li><a href="#atividades">Futevôlei</a></li>
              <li><a href="#atividades">Beach Tennis</a></li>
              <li><a href="#atividades">Tênis</a></li>
              <li><a href="#atividades">Pickleball</a></li>
            </ul>
          </div>

          {/* Bem-Estar */}
          <div className="footer-col">
            <h4>Bem-Estar</h4>
            <ul>
              <li><a href="#academia">Academia</a></li>
              <li><a href="#pilates">Pilates</a></li>
              <li><a href="#massagem">Massagem</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2025 <span>Vila Reserva Sports</span>. Todos os direitos reservados.
          </p>

          <div className="footer-socials">
            {/* Instagram */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.29-1.24l-.3-.18-2.87.85.85-2.87-.18-.3A8 8 0 1112 20z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
