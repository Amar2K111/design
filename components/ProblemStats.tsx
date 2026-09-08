const problemes = [
  {
    titre: "Des DCE à décortiquer",
    detail:
      "RC, CCTP, CCAP, annexes… les informations importantes sont dispersées dans plusieurs documents.",
  },
  {
    titre: "Des mémoires à adapter à chaque marché",
    detail:
      "Les critères et exigences changent. Réutiliser l'ancien mémoire sans adaptation expose aux réponses génériques ou incomplètes.",
  },
  {
    titre: "Du temps qualifié mobilisé",
    detail:
      "Gérant, chargé d'affaires ou conducteur de travaux : les personnes capables de répondre correctement sont celles dont le temps coûte cher.",
  },
];

// Les valeurs ci-dessous sont des ordres de grandeur sectoriels génériques.
// À remplacer par des chiffres propres à Materia (données clients, mesures internes) avant mise en ligne.
const stats = [
  {
    valeur: "2 à 4 h",
    label: "pour lire et structurer un DCE à la main",
  },
  {
    valeur: "8 à 20 h",
    label: "pour rédiger un mémoire technique complet (15-20 pages)",
  },
  {
    valeur: "40 à 60 %",
    label: "de la note finale, devant le prix",
  },
];

export default function ProblemStats() {
  return (
    <section className="border-y border-ligne bg-calque px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="max-w-2xl">
          <h2 className="font-display text-[2rem] font-bold leading-tight text-encre sm:text-[2.4rem]">
            À chaque nouvel appel d&rsquo;offres, vous recommencez presque
            tout
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-encre-soft">
            Répondre à un appel d&rsquo;offres ne devrait pas commencer par
            des heures de lecture et de copier-coller. Materia transforme ce
            travail manuel en un processus guidé, du DCE jusqu&rsquo;au
            mémoire technique.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {problemes.map((p) => (
            <div key={p.titre} className="surface-dark p-6">
              <p className="font-display text-[15px] font-bold text-calque">
                {p.titre}
              </p>
              <p className="mt-2 text-[14px] leading-snug text-calque/80">
                {p.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="surface-dark px-6 py-8">
              <p className="font-display text-3xl font-bold text-calque">
                {s.valeur}
              </p>
              <p className="mt-2 text-[14px] leading-snug text-calque/80">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
