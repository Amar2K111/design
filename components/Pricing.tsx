const tiers = [
  {
    nom: "Essentiel",
    prix: "250 €",
    periode: "/mois",
    annuel: "ou 2 500 €/an",
    limite: "Jusqu'à 5 mémoires/mois · 2 utilisateurs",
    unitaire: "≈ 50 € / mémoire",
    avant: false,
  },
  {
    nom: "Professionnel",
    prix: "500 €",
    periode: "/mois",
    annuel: "ou 5 000 €/an",
    limite: "Jusqu'à 30 mémoires/mois · 5 utilisateurs",
    unitaire: "≈ 17 € / mémoire",
    avant: true,
  },
  {
    nom: "Volume",
    prix: "1 000 €",
    periode: "/mois",
    annuel: "ou 10 000 €/an",
    limite: "Mémoires et utilisateurs illimités",
    unitaire: null,
    avant: false,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="border-y border-ligne bg-beton px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="max-w-xl">
          <h2 className="font-display text-[2rem] font-bold leading-tight text-encre sm:text-[2.4rem]">
            Des tarifs ramenés au mémoire
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-encre-soft">
            Vous voyez votre synthèse avant de payer, sans carte bancaire.
            L&rsquo;accès actuel est gratuit, en essai sans risque.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.nom}
              className={
                t.avant
                  ? "surface-dark flex flex-col border-2 border-blue p-7 lg:-translate-y-3"
                  : "surface-dark flex flex-col p-7"
              }
            >
              <p className="font-display text-[16px] font-bold text-calque">
                {t.nom}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold text-calque">
                  {t.prix}
                </span>
                <span className="text-[14px] text-calque/75">
                  {t.periode}
                </span>
              </div>
              <p className="mt-1 text-[13px] text-calque/65">
                {t.annuel}
              </p>
              <p className="mt-5 text-[14px] leading-snug text-calque/80">
                {t.limite}
              </p>
              {t.unitaire && (
                <p className="mt-2 font-mono text-[13px] font-medium text-blue">
                  {t.unitaire}
                </p>
              )}
              <a
                href="#hero-cta"
                className={
                  t.avant
                    ? "focus-ring mt-7 rounded-doc bg-blue px-5 py-3 text-center text-[14px] font-semibold text-calque transition-colors hover:bg-blue-dark"
                    : "focus-ring mt-7 rounded-doc border border-white/35 px-5 py-3 text-center text-[14px] font-semibold text-calque transition-colors hover:bg-white/10"
                }
              >
                Analyser mon premier DCE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
