type Etat = "oui" | "non" | "selon";

const criteres: { label: string; manuel: Etat; ia: Etat; materia: Etat }[] = [
  {
    label: "Lit un DCE complet",
    manuel: "oui",
    ia: "selon",
    materia: "oui",
  },
  {
    label: "Structure selon la grille de notation du RC",
    manuel: "selon",
    ia: "non",
    materia: "oui",
  },
  {
    label: "Bibliothèque entreprise réutilisable",
    manuel: "non",
    ia: "non",
    materia: "oui",
  },
  {
    label: "Traçabilité vers les sources",
    manuel: "oui",
    ia: "non",
    materia: "oui",
  },
  {
    label: "Export Word/PDF avec gabarit",
    manuel: "oui",
    ia: "non",
    materia: "oui",
  },
  {
    label: "Prix public sans démo obligatoire",
    manuel: "oui",
    ia: "oui",
    materia: "oui",
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 text-success"
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

function Etat({ v, check }: { v: Etat; check?: boolean }) {
  if (v === "oui")
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-semibold ${check ? "text-success" : "text-calque/90"}`}
      >
        {check && <CheckIcon />}
        Oui
      </span>
    );
  if (v === "non")
    return <span className="text-calque/70">Non</span>;
  return <span className="text-calque/75">Selon le cas</span>;
}

export default function CategoryComparison() {
  return (
    <section className="bg-calque px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="max-w-xl">
          <h2 className="font-display text-[2rem] font-bold leading-tight text-encre sm:text-[2.4rem]">
            Ce qui change selon la méthode
          </h2>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="surface-dark w-full min-w-[640px] border-collapse overflow-hidden text-[14px]">
            <thead>
              <tr className="border-b border-white/15 text-left">
                <th className="px-5 py-4 font-display text-[13px] font-bold uppercase tracking-wide text-calque/75">
                  &nbsp;
                </th>
                <th className="px-5 py-4 font-display text-[13px] font-bold uppercase tracking-wide text-calque/75">
                  Méthode manuelle actuelle
                </th>
                <th className="px-5 py-4 font-display text-[13px] font-bold uppercase tracking-wide text-calque/75">
                  IA générative généraliste
                </th>
                <th className="px-5 py-4 font-display text-[13px] font-bold uppercase tracking-wide text-blue">
                  Materia
                </th>
              </tr>
            </thead>
            <tbody>
              {criteres.map((c) => (
                <tr key={c.label} className="border-b border-white/15 last:border-b-0">
                  <td className="px-5 py-4 font-medium text-calque">
                    {c.label}
                  </td>
                  <td className="px-5 py-4">
                    <Etat v={c.manuel} />
                  </td>
                  <td className="px-5 py-4">
                    <Etat v={c.ia} />
                  </td>
                  <td className="px-5 py-4">
                    <Etat v={c.materia} check />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
