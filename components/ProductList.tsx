const items = [
  {
    titre: "Synthèse DCE",
    badge: "Extrait pour vous",
    detail: "Critères, exigences, pondérations, points de vigilance.",
  },
  {
    titre: "Plan de mémoire",
    badge: "Structuré pour vous",
    detail: "Calé sur les rubriques du RC.",
  },
  {
    titre: "Sections méthode et moyens",
    badge: "Rédigées avec vous",
    detail: "À partir de la bibliothèque de votre entreprise.",
  },
  {
    titre: "Bibliothèque entreprise",
    badge: "Réutilisée à chaque marché",
    detail: "Équipes, moyens, certifications, références.",
  },
  {
    titre: "Export final",
    badge: "Prêt à finaliser",
    detail: "Word ou PDF, avec votre gabarit.",
  },
];

export default function ProductList() {
  return (
    <section
      id="fonctionnalites"
      className="border-y border-border bg-background px-6 py-20"
    >
      <div className="mx-auto max-w-content">
        <div className="max-w-xl">
          <h2 className="font-display text-[2rem] font-bold leading-tight text-foreground sm:text-[2.4rem]">
            Ce que produit Materia
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Chaque brique reste sous votre contrôle. Le badge indique le rôle
            de Materia sur chaque élément. Jamais un mémoire fini livré tel
            quel. Renseignez votre entreprise une fois, réutilisez ses
            informations sur chaque marché.
          </p>
        </div>

        <ul className="mt-10 flex flex-col divide-y divide-border border-t border-border">
          {items.map((item, i) => (
            <li
              key={item.titre}
              className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[13px] text-muted/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-[16px] font-bold text-foreground">
                    {item.titre}
                  </p>
                  <p className="mt-0.5 text-[14px] text-muted">
                    {item.detail}
                  </p>
                </div>
              </div>
              <span className="ml-9 w-fit shrink-0 badge-light sm:ml-0">
                {item.badge}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
