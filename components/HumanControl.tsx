export default function HumanControl() {
  return (
    <section className="border-y border-ligne bg-calque px-6 py-20">
      <div className="mx-auto max-w-content grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-[2rem] font-bold leading-tight text-encre sm:text-[2.4rem]">
            L&rsquo;IA vous aide. Vous gardez le contrôle.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-encre-soft">
            Chaque information extraite renvoie vers son emplacement dans le
            DCE pour que vous puissiez la vérifier avant de l&rsquo;utiliser.
          </p>
          <ul className="mt-6 flex flex-col gap-4">
            <li className="flex gap-3 text-[15px] leading-relaxed text-encre-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-dark" />
              Ancré dans vos données réelles, jamais d&rsquo;invention
            </li>
            <li className="flex gap-3 text-[15px] leading-relaxed text-encre-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-dark" />
              Chaque information reste reliée à sa source dans le DCE
            </li>
            <li className="flex gap-3 text-[15px] leading-relaxed text-encre-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-dark" />
              Vous relisez et validez avant export
            </li>
          </ul>
        </div>

        <div className="surface-dark p-6">
          <p className="font-mono text-[12px] uppercase tracking-wide text-calque/75">
            Extrait : Section 2.3, Moyens humains
          </p>
          <div className="mt-3 space-y-3 text-[14px] leading-relaxed">
            <p className="rounded-doc border border-white/10 bg-navy/40 p-3 text-calque/90">
              L&rsquo;équipe dédiée au chantier comprend un conducteur de
              travaux, deux chefs d&rsquo;équipe VRD et quatre compagnons
              qualifiés, tous mobilisables sous 10 jours ouvrés.{" "}
              <span className="ml-1 inline-block rounded-doc bg-blue/20 px-1.5 py-0.5 text-[11px] font-semibold text-blue">
                Point de vigilance traité
              </span>
            </p>
            <p className="rounded-doc border border-white/10 bg-navy/40 p-3 text-calque/90">
              Le phasage proposé limite la gêne aux riverains en séquençant
              les travaux de voirie hors période scolaire.{" "}
              <span className="ml-1 inline-block rounded-doc bg-blue/20 px-1.5 py-0.5 text-[11px] font-semibold text-blue">
                Optimisé
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
