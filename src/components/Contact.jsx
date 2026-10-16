import { useRef, useState } from "react";
import Icon from "./Icon";
import "./Contact.css";

const interests = [
  ["futevolei", "Futevôlei"],
  ["beach-tennis", "Beach Tennis"],
  ["tenis", "Tênis"],
  ["pickleball", "Pickleball"],
  ["academia", "Academia"],
  ["pilates", "Pilates"],
  ["massagem", "Massagem"],
  ["geral", "Conhecer o clube"],
];
const fields = [
  {
    name: "nome",
    label: "Nome completo",
    placeholder: "Como podemos chamar você?",
    type: "text",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "E-mail",
    placeholder: "voce@exemplo.com",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "telefone",
    label: "Telefone",
    placeholder: "(11) 98765-4321",
    type: "tel",
    autoComplete: "tel",
  },
];

export default function Contact() {
  const [values, setValues] = useState({
    nome: "",
    email: "",
    telefone: "",
    atividade: "",
  });
  const [errors, setErrors] = useState({});
  const [review, setReview] = useState(false);
  const form = useRef(null);
  const status = useRef(null);
  const change = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
    setReview(false);
  };
  const submit = (event) => {
    event.preventDefault();
    const next = {};
    if (values.nome.trim().length < 2)
      next.nome = "Informe seu nome com pelo menos 2 caracteres.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Informe um e-mail válido, como voce@exemplo.com.";
    if (
      !/^\+?[\d\s().-]+$/.test(values.telefone) ||
      ![10, 11].includes(
        values.telefone.replace(/\D/g, "").replace(/^55(?=\d{10,11}$)/, "")
          .length,
      )
    )
      next.telefone = "Informe um telefone com DDD e 10 ou 11 dígitos.";
    if (!interests.some(([id]) => id === values.atividade))
      next.atividade = "Escolha uma modalidade ou selecione Conhecer o clube.";
    setErrors(next);
    if (Object.keys(next).length) {
      form.current.elements.namedItem(Object.keys(next)[0])?.focus();
      return;
    }
    setReview(true);
    requestAnimationFrame(() => status.current?.focus());
  };
  return (
    <section
      id="contato"
      className="contact section-space"
      aria-labelledby="contact-title"
    >
      <div className="container contact-container">
        <div className="contact-info">
          <p className="eyebrow">SEU PRÓXIMO BOM HÁBITO</p>
          <h2 id="contact-title">
            A sua nova rotina
            <br />
            <span>começa por aqui.</span>
          </h2>
          <p>
            Que tal conhecer o seu próximo lugar favorito? Escolha o que mais
            combina com você e planeje sua visita.
          </p>
          <div className="contact-invitation">
            <Icon name="leaf" />
            <span>
              Traga a vontade de se movimentar.
              <br />
              <strong>O seu espaço está aqui.</strong>
            </span>
          </div>
          <p className="contact-demo-note">
            Este formulário é demonstrativo. Você pode conferir suas
            informações, mas nenhum pedido será enviado ou agendado.
          </p>
        </div>
        <form
          ref={form}
          className="contact-form"
          onSubmit={submit}
          noValidate
          aria-label="Planejar visita"
        >
          <div className="form-heading">
            <span className="eyebrow">VAMOS NOS CONHECER?</span>
            <h3>Planeje sua visita</h3>
            <p>Todos os campos são obrigatórios.</p>
          </div>
          {fields.map(({ label, ...field }) => (
            <div className="form-group" key={field.name}>
              <label htmlFor={field.name}>{label}</label>
              <input
                {...field}
                id={field.name}
                value={values[field.name]}
                onChange={change}
                required
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={
                  errors[field.name] ? `${field.name}-error` : undefined
                }
              />
              <span className="field-error" id={`${field.name}-error`}>
                {errors[field.name] || ""}
              </span>
            </div>
          ))}
          <div className="form-group">
            <label htmlFor="atividade">Tenho interesse em</label>
            <select
              id="atividade"
              name="atividade"
              value={values.atividade}
              onChange={change}
              required
              aria-invalid={Boolean(errors.atividade)}
              aria-describedby={
                errors.atividade ? "atividade-error" : undefined
              }
            >
              <option value="">Selecione uma opção</option>
              {interests.map(([id, name]) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
            <span className="field-error" id="atividade-error">
              {errors.atividade || ""}
            </span>
          </div>
          <button type="submit" className="button button-pine form-submit">
            Conferir minha visita <Icon name="arrow" />
          </button>
          <p className="form-note">Prévia da visita · sem envio de dados</p>
          {review && (
            <div
              ref={status}
              role="status"
              tabIndex="-1"
              className="form-review"
            >
              <Icon name="check" />
              <div>
                <strong>{values.nome.trim()}, confira seu interesse:</strong>
                <p>
                  {interests.find(([id]) => id === values.atividade)?.[1]} ·{" "}
                  {values.email.trim()}
                </p>
                <p>
                  Este pedido não foi enviado. O agendamento ainda não está
                  disponível nesta demonstração.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setReview(false);
                    form.current.elements.namedItem("nome")?.focus();
                  }}
                >
                  Editar informações
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
