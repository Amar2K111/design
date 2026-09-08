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
    <section id="tarifs" className="border-y border-border bg-surface px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="max-w-xl">
          <h2 className="font-display text-[2rem] font-bold leading-tight text-foreground sm:text-[2.4rem]">
            Des tarifs ramenés au mémoire
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
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
                  ? "surface-brand flex flex-col border-2 border-primary p-7 lg:-translate-y-3"
                  : "surface-neutral flex flex-col p-7"
              }
            >
              <p
                className={`font-display text-[16px] font-bold ${t.avant ? "text-background" : "text-foreground"}`}
              >
                {t.nom}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`font-display text-3xl font-bold ${t.avant ? "text-background" : "text-foreground"}`}
                >
                  {t.prix}
                </span>
                <span
                  className={`text-[14px] ${t.avant ? "text-background/75" : "text-muted"}`}
                >
                  {t.periode}
                </span>
              </div>
              <p
                className={`mt-1 text-[13px] ${t.avant ? "text-background/65" : "text-muted"}`}
              >
                {t.annuel}
              </p>
              <p
                className={`mt-5 text-[14px] leading-snug ${t.avant ? "text-background/80" : "text-muted"}`}
              >
                {t.limite}
              </p>
              {t.unitaire && (
                <p
                  className={`mt-2 font-mono text-[13px] font-medium ${t.avant ? "text-primary" : "text-muted"}`}
                >
                  {t.unitaire}
                </p>
              )}
              <a
                href="#hero-cta"
                className={
                  t.avant
                    ? "focus-ring mt-7 rounded-doc bg-primary px-5 py-3 text-center text-[14px] font-semibold text-background transition-colors hover:bg-primary-hover active:bg-primary-hover"
                    : "focus-ring mt-7 rounded-doc border border-border px-5 py-3 text-center text-[14px] font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-surface"
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
