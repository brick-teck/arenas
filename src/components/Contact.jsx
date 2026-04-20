import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    atividade: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado, ${formData.nome}! Entraremos em contato em breve.`);
  };

  return (
    <section id="contato" className="contact">
      <div className="contact-container">

        {/* LADO ESQUERDO — texto + infos */}
        <div className="contact-info">
          <span className="contact-label">Contato</span>
          <h2 className="contact-title">
            Pronto para começar sua <span>evolução?</span>
          </h2>
          <p className="contact-desc">
            Preencha o formulário e nossa equipe entrará em contato para agendar
            sua visita ao Vila Reserva Sports.
          </p>

          <div className="contact-items">
            {/* Telefone */}
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="contact-item-text">(11) 99999-9999</span>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </div>
              <span className="contact-item-text">contato@vilareserva.com.br</span>
            </div>

            {/* Localização */}
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="contact-item-text">São Paulo, SP</span>
            </div>
          </div>
        </div>

        {/* LADO DIREITO — formulário */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="atividade">Interesse</label>
            <select
              id="atividade"
              name="atividade"
              value={formData.atividade}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Selecione uma atividade</option>
              <option value="futevolei">Futevôlei</option>
              <option value="beach-tennis">Beach Tennis</option>
              <option value="tenis">Tênis</option>
              <option value="pickleball">Pickleball</option>
              <option value="academia">Academia</option>
              <option value="pilates">Pilates</option>
              <option value="massagem">Massagem</option>
              <option value="geral">Conhecer o clube</option>
            </select>
          </div>

          <button type="submit" className="form-submit">
            Enviar Mensagem
          </button>

        </form>

      </div>
    </section>
  );
}
