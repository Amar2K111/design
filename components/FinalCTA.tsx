export default function FinalCTA() {
  return (
    <section className="bg-brand px-6 py-20">
      <div className="mx-auto flex max-w-content flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-[1.6rem] font-bold leading-tight text-background sm:text-[1.9rem]">
            Déposez votre prochain DCE, voyez ce que Materia en tire.
          </h2>
          <p className="mt-2 text-[15px] text-background/75">
            Premier DCE gratuit, sans carte bancaire.
          </p>
        </div>
        <a href="#hero-cta" className="btn-primary shrink-0">
          Analyser mon premier DCE
        </a>
      </div>
    </section>
  );
}
