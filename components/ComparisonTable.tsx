function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-success"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const rows = [
  {
    avant: "Ouvrir le RC, CCTP et CCAP un par un",
    apres: "Retrouvez l'essentiel du DCE au même endroit",
  },
  {
    avant: "Chercher les critères et leurs pondérations",
    apres: "Identifiez immédiatement ce qui sera réellement noté",
  },
  {
    avant: "Construire manuellement le plan",
    apres: "Partez d'un plan structuré selon le RC",
  },
  {
    avant: "Fouiller vos anciens dossiers pour retrouver vos informations",
    apres: "Réutilisez les informations validées de votre entreprise",
  },
  {
    avant: "Retourner dans les PDF pour vérifier chaque information",
    apres: "Remontez en un clic jusqu'au passage source",
  },
  {
    avant: "Copier un ancien mémoire et l'adapter",
    apres: "Partez d'une base construite pour ce marché",
  },
];

export default function ComparisonTable() {
  return (
    <section className="bg-beton px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="surface-dark overflow-hidden">
          <div className="grid grid-cols-2 border-b border-white/15">
            <div className="border-r border-white/15 px-5 py-4 sm:px-7">
              <p className="font-display text-[15px] font-bold text-calque/75">
                Aujourd&rsquo;hui
              </p>
            </div>
            <div className="px-5 py-4 sm:px-7">
              <p className="font-display text-[15px] font-bold text-blue">
                Avec Materia
              </p>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-b border-white/15 last:border-b-0"
            >
              <div className="border-r border-white/15 px-5 py-4 text-[14px] leading-snug text-calque/75 sm:px-7 sm:text-[15px]">
                {row.avant}
              </div>
              <div className="flex items-start gap-2 px-5 py-4 text-[14px] leading-snug text-calque sm:px-7 sm:text-[15px]">
                <CheckIcon />
                <span>{row.apres}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-2xl">
          <p className="font-display text-lg font-bold text-encre">
            Là, chaque ligne répond exactement à l&rsquo;autre.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-encre-soft">
            Moins de temps passé à préparer chaque dossier. Plus de capacité
            pour répondre aux marchés qui valent vraiment le coup.
          </p>
        </div>
      </div>
    </section>
  );
}
