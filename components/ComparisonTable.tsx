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
    <section className="bg-surface px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="surface-brand overflow-hidden">
          <div className="grid grid-cols-2 border-b border-white/15">
            <div className="border-r border-white/15 px-5 py-5 sm:px-8 sm:py-6">
              <p className="font-display text-[14px] font-bold uppercase tracking-wide text-background/55 sm:text-[15px]">
                Aujourd&rsquo;hui
              </p>
            </div>
            <div className="bg-white/[0.08] px-5 py-5 sm:px-8 sm:py-6">
              <p className="font-display text-[15px] font-bold text-background sm:text-[16px]">
                Avec Materia
              </p>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-b border-white/15 last:border-b-0"
            >
              <div className="border-r border-white/15 px-5 py-5 text-[14px] leading-relaxed text-background/60 sm:px-8 sm:py-5 sm:text-[15px]">
                {row.avant}
              </div>
              <div className="flex items-start gap-2.5 bg-white/[0.04] px-5 py-5 text-[14px] leading-relaxed text-background sm:px-8 sm:py-5 sm:text-[15px]">
                <CheckIcon />
                <span>{row.apres}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl">
          <p className="font-display text-lg font-bold text-foreground">
            Là, chaque ligne répond exactement à l&rsquo;autre.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            Moins de temps passé à préparer chaque dossier. Plus de capacité
            pour répondre aux marchés qui valent vraiment le coup.
          </p>
        </div>
      </div>
    </section>
  );
}
