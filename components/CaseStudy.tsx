export default function CaseStudy() {
  return (
    <section className="bg-beton px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="surface-dark p-7 sm:p-10">
          <p className="font-mono text-[12px] uppercase tracking-wide text-calque/75">
            Cas réel : Lot 1, Voirie et aménagements
          </p>
          <h2 className="mt-2 font-display text-[1.75rem] font-bold leading-tight text-calque sm:text-[2.1rem]">
            Aménagement du cœur de village, Arzens (11)
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-doc border border-white/10 bg-navy/40 p-5">
              <p className="font-display text-[15px] font-bold text-calque">
                Synthèse DCE
              </p>
              <p className="mt-1.5 text-[14px] leading-snug text-calque/80">
                Critères de notation, exigences CCTP et points sensibles
                identifiés dès l&rsquo;import.
              </p>
            </div>
            <div className="rounded-doc border border-white/10 bg-navy/40 p-5">
              <p className="font-display text-[15px] font-bold text-calque">
                Plan calé sur le RC
              </p>
              <p className="mt-1.5 text-[14px] leading-snug text-calque/80">
                Les rubriques du mémoire suivent directement la grille de
                notation de l&rsquo;acheteur.
              </p>
            </div>
            <div className="rounded-doc border border-white/10 bg-navy/40 p-5">
              <p className="font-display text-[15px] font-bold text-calque">
                Bibliothèque réutilisée
              </p>
              <p className="mt-1.5 text-[14px] leading-snug text-calque/80">
                Références et méthodes de l&rsquo;entreprise reprises depuis
                les marchés précédents.
              </p>
            </div>
            <div className="rounded-doc border border-white/10 bg-navy/40 p-5">
              <p className="font-display text-[15px] font-bold text-calque">
                Sections rédigées avec l&rsquo;IA
              </p>
              <p className="mt-1.5 text-[14px] leading-snug text-calque/80">
                Méthode et moyens rédigés à partir du DCE et de la
                bibliothèque, puis relus par l&rsquo;entreprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
