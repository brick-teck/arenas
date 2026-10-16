const paths = {
  arrow: <path d="M4 12h15M13 5l7 7-7 7" />,
  diagonal: <path d="M5 19 19 5M5 5h14v14" />,
  down: <path d="M12 4v16M5 13l7 7 7-7" />,
  menu: <path d="M3 7h18M3 17h18" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  court: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M12 5v14M3 9h18M3 15h18" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 3C8 2 2 8 5 15c3 7 15 5 15-12Z" />
      <path d="M4 21 15 9" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2m-3-7-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M19 19l-1.5-1.5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 21v-3a6 6 0 0 1 12 0v3M17 5a3 3 0 0 1 0 6M21 21v-3a6 6 0 0 0-3-5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
};

export default function Icon({ name, className = "" }) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
