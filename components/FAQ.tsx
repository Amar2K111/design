const faqs = [
  {
    q: "Mes documents restent-ils confidentiels ?",
    r: "Oui. Vos DCE et les informations de votre entreprise ne sont ni partagés ni revendus. Ils servent uniquement à produire votre analyse et votre mémoire.",
  },
  {
    q: "Materia s'entraîne-t-il sur mes données ?",
    r: "Non. Vos documents et vos réponses ne sont pas utilisés pour entraîner un modèle destiné à d'autres clients.",
  },
  {
    q: "Peut-on faire confiance à l'IA pour un document qui engage l'entreprise ?",
    r: "Materia extrait, structure et rédige des propositions, mais rien n'est envoyé sans relecture. Chaque information reste reliée à sa source dans le DCE pour que vous puissiez vérifier avant d'exporter.",
  },
  {
    q: "Puis-je exporter en Word ?",
    r: "Oui, l'export se fait en Word ou en PDF, avec votre gabarit si vous en avez un.",
  },
  {
    q: "Quels types de DCE Materia peut-il traiter ?",
    r: "RC, CCTP, CCAP et annexes, pour des marchés de travaux publics comme privés, tous corps d'état.",
  },
  {
    q: "Combien ça coûte ?",
    r: "Trois paliers selon votre volume de mémoires par mois, du prix ramené à l'unité par mémoire. Le premier DCE est analysé gratuitement, sans carte bancaire.",
  },
  {
    q: "En quoi est-ce différent de ChatGPT ?",
    r: "Un assistant généraliste ne connaît ni la structure d'un DCE, ni la logique de notation d'un RC, et ne conserve pas votre bibliothèque d'entreprise d'un marché à l'autre. Materia est construit spécifiquement pour ce processus, avec la traçabilité vers les sources et une base réutilisable.",
  },
  {
    q: "Combien de temps faut-il pour préparer un mémoire technique ?",
    r: "Avec Materia, la synthèse du DCE et un premier plan sont disponibles en quelques minutes. Le temps de rédaction dépend ensuite du nombre de sections à valider et du niveau de détail attendu par le marché.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="max-w-xl">
          <h2 className="font-display text-[2rem] font-bold leading-tight text-foreground sm:text-[2.4rem]">
            Questions fréquentes
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border border-t border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="focus-ring flex cursor-pointer list-none items-start justify-between gap-4 rounded-doc text-[16px] font-semibold text-foreground">
                {f.q}
                <span className="mt-0.5 shrink-0 text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted">
                {f.r}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
