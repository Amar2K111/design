const steps = [
  {
    n: "01",
    titre: "Déposez votre DCE",
    detail: "Importez le RC, CCTP, CCAP et les annexes du marché.",
    accent: false,
  },
  {
    n: "02",
    titre: "Materia décortique le marché",
    detail:
      "Exigences, critères de notation, pondérations et informations clés sont extraits et regroupés.",
    accent: true,
  },
  {
    n: "03",
    titre: "Construisez votre réponse selon le RC",
    detail:
      "Materia prépare un plan de mémoire aligné sur les critères que l'acheteur va évaluer.",
    accent: false,
  },
  {
    n: "04",
    titre: "Finalisez votre mémoire",
    detail:
      "Rédigez avec Materia, vérifiez les informations, puis exportez en Word ou PDF.",
    accent: false,
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="bg-surface px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="max-w-xl">
          <h2 className="font-display text-[2rem] font-bold leading-tight text-foreground sm:text-[2.4rem]">
            Du DCE au mémoire technique en 4 étapes.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">
            Importez votre dossier. Materia extrait ce qui compte, structure
            votre réponse selon le RC et vous accompagne jusqu&rsquo;au
            document final.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className={
                s.accent
                  ? "surface-brand flex flex-col border-2 border-primary p-6 lg:-translate-y-3"
                  : "surface-neutral flex flex-col p-6"
              }
            >
              <span
                className={
                  s.accent
                    ? "font-display text-2xl font-bold text-primary"
                    : "font-display text-2xl font-bold text-muted/50"
                }
              >
                {s.n}
              </span>
              <p
                className={`mt-3 font-display text-[16px] font-bold ${s.accent ? "text-background" : "text-foreground"}`}
              >
                {s.titre}
              </p>
              <p
                className={`mt-2 text-[14px] leading-snug ${s.accent ? "text-background/80" : "text-muted"}`}
              >
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
