export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-calque px-6 pb-20 pt-16 md:pt-24"
    >
      <div className="mx-auto max-w-content">
        <div className="max-w-3xl">
          <span className="stamp-rotate inline-block rounded-doc border border-blue-dark/20 bg-blue-light px-3 py-1 font-mono text-[13px] font-medium text-blue-dark">
            Pour les entreprises du BTP qui répondent aux marchés publics
          </span>

          <h1 className="mt-6 font-display text-[2rem] font-bold leading-[1.12] tracking-tight text-encre sm:text-[2.65rem]">
            Materia analyse votre DCE, identifie les exigences et critères du
            RC, puis{" "}
            <span className="text-blue underline decoration-blue/40 decoration-[3px] underline-offset-[0.15em]">
              structure votre mémoire en fonction de ce que l&rsquo;acheteur va
              réellement évaluer.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-encre-soft">
            Materia transforme votre dossier en mémoire technique structuré
            selon les exigences et critères du RC, sans passer des heures à
            chercher, copier et restructurer l&rsquo;information.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              id="hero-cta"
              href="#roi"
              className="focus-ring rounded-doc bg-blue px-6 py-3.5 text-center text-[15px] font-semibold text-calque transition-colors hover:bg-blue-dark"
            >
              Analyser mon premier DCE
            </a>
            <a
              href="#preuve"
              className="focus-ring rounded-doc border border-ligne bg-transparent px-6 py-3.5 text-center text-[15px] font-semibold text-encre transition-colors hover:border-encre/30"
            >
              Voir Materia sur un vrai DCE
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-2.5 text-[14px] text-encre-soft sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
              Premier DCE gratuit, sans carte bancaire
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
              Vous voyez votre synthèse avant de rédiger
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
              Sans engagement
            </li>
          </ul>
        </div>

        <div
          className="mt-14 flex items-center gap-3 pl-1 text-[13px] text-encre-soft/70"
          aria-hidden="true"
        >
          <span className="font-mono">01</span>
          <span className="h-px w-10 bg-ligne" />
          <span>Ce que Materia en tire, juste en dessous</span>
        </div>
      </div>
    </section>
  );
}
