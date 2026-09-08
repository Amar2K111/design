const extraits = [
  {
    titre: "Critères de notation",
    detail: "Valeur technique 60 % · Prix 30 % · Délai d'exécution 10 %",
    source: "RC, p.4",
  },
  {
    titre: "Exigences CCTP",
    detail: "Voirie en enrobé à froid, réseaux EP à dévoyer, accès PMR obligatoire",
    source: "CCTP, p.11-14",
  },
  {
    titre: "Point de vigilance",
    detail: "Délai de préparation de chantier limité à 10 jours ouvrés",
    source: "RC, p.6",
  },
];

export default function ProofWidget() {
  return (
    <section id="preuve" className="bg-beton px-6 pb-24 pt-4">
      <div className="mx-auto max-w-content">
        <h2 className="font-display text-[2rem] font-bold leading-tight text-encre sm:text-[2.2rem]">
          Ce que Materia extrait de votre DCE
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-encre-soft">
          Critères de notation, exigences CCTP, délais… regroupés et sourcés
          dès l&rsquo;import. Voici à quoi ressemble l&rsquo;analyse sur un
          marché réel.
        </p>

        <div className="surface-dark relative mt-6 p-3 sm:p-6">
          <div className="animate-trace grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-doc border border-white/15 bg-navy/30 p-6">
              <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-4">
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-wide text-calque/75">
                    Marché
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-calque">
                    Aménagement du cœur de village, Arzens (11)
                  </h3>
                </div>
                <span className="flex shrink-0 items-center gap-1.5 rounded-doc bg-success/20 px-2.5 py-1 text-[12px] font-semibold text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Analysé
                </span>
              </div>

              <ul className="mt-4 flex flex-col divide-y divide-white/15">
                {extraits.map((item) => (
                  <li key={item.titre} className="flex flex-col gap-1 py-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[14px] font-semibold text-calque">
                        {item.titre}
                      </span>
                      <span className="shrink-0 rounded-doc border border-white/15 bg-navy/40 px-2 py-0.5 font-mono text-[11px] text-calque/75">
                        {item.source}
                      </span>
                    </div>
                    <p className="text-[14px] leading-snug text-calque/80">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center rounded-doc border border-dashed border-white/25 p-6">
              <div className="flex aspect-[4/3] max-w-sm flex-col items-center justify-center gap-3 self-center rounded-doc border border-white/15 bg-navy/30 px-6 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-calque/40 text-calque/75">
                  ▶
                </span>
                <p className="text-[13px] font-medium text-calque/85">
                  Emplacement vidéo (à intégrer)
                </p>
                <p className="text-[12px] leading-snug text-calque/70">
                  Démonstration : import d&rsquo;un DCE et synthèse des
                  critères, exigences et points de vigilance à l&rsquo;écran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
