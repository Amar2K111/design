"use client";

import { useMemo, useState } from "react";

function formatEuros(n: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function RoiCalculator() {
  const [appelsParMois, setAppelsParMois] = useState(1);
  const [montantMoyen, setMontantMoyen] = useState(60000);
  const [tauxReussite, setTauxReussite] = useState(20);

  const caAdditionnel = useMemo(() => {
    return appelsParMois * 12 * montantMoyen * (tauxReussite / 100);
  }, [appelsParMois, montantMoyen, tauxReussite]);

  return (
    <section id="roi" className="border-y border-ligne bg-calque px-6 py-20">
      <div className="mx-auto max-w-content">
        <div className="max-w-xl">
          <h2 className="font-display text-[2rem] font-bold leading-tight text-encre sm:text-[2.4rem]">
            Ce qu&rsquo;un appel d&rsquo;offres de plus peut vous rapporter
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="surface-dark flex flex-col gap-8 p-6 sm:p-8">
            <div>
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor="appels"
                  className="text-[14px] font-semibold text-calque"
                >
                  Appels d&rsquo;offres supplémentaires traités / mois
                </label>
                <span className="font-mono text-[15px] font-semibold text-blue">
                  {appelsParMois}
                </span>
              </div>
              <input
                id="appels"
                type="range"
                min={1}
                max={10}
                step={1}
                value={appelsParMois}
                onChange={(e) => setAppelsParMois(Number(e.target.value))}
                className="focus-ring mt-3 w-full accent-blue"
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor="montant"
                  className="text-[14px] font-semibold text-calque"
                >
                  Montant moyen d&rsquo;un marché pour l&rsquo;entreprise
                </label>
                <span className="font-mono text-[15px] font-semibold text-blue">
                  {formatEuros(montantMoyen)}
                </span>
              </div>
              <input
                id="montant"
                type="range"
                min={20000}
                max={150000}
                step={5000}
                value={montantMoyen}
                onChange={(e) => setMontantMoyen(Number(e.target.value))}
                className="focus-ring mt-3 w-full accent-blue"
              />
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor="taux"
                  className="text-[14px] font-semibold text-calque"
                >
                  Taux de réussite estimé
                </label>
                <span className="font-mono text-[15px] font-semibold text-blue">
                  {tauxReussite} %
                </span>
              </div>
              <input
                id="taux"
                type="range"
                min={5}
                max={60}
                step={5}
                value={tauxReussite}
                onChange={(e) => setTauxReussite(Number(e.target.value))}
                className="focus-ring mt-3 w-full accent-blue"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-doc border-2 border-blue bg-navy p-6 py-10 text-center sm:px-10">
            <p className="text-[13px] font-medium uppercase tracking-wide text-calque/75">
              CA additionnel potentiel / an
            </p>
            <p className="mt-3 font-display text-[2.75rem] font-bold leading-none text-calque sm:text-[3.25rem]">
              {formatEuros(caAdditionnel)}
            </p>
            <p className="mt-4 text-[12px] text-calque/65">
              Estimation indicative, à ajuster selon votre activité
            </p>
            <a
              href="#hero-cta"
              className="focus-ring mt-7 inline-block self-center rounded-doc bg-blue px-6 py-3 text-[15px] font-semibold text-calque transition-colors hover:bg-blue-dark"
            >
              Analyser mon premier DCE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
