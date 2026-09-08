import Logo from "./Logo";

const colonnes = [
  {
    titre: "Produit",
    liens: [
      { label: "Comment ça marche", href: "#comment-ca-marche" },
      { label: "Fonctionnalités", href: "#fonctionnalites" },
      { label: "Tarifs", href: "#tarifs" },
    ],
  },
  {
    titre: "Ressources",
    liens: [
      { label: "FAQ", href: "#faq" },
      { label: "Cas réel : Arzens", href: "#top" },
      { label: "Connexion", href: "#connexion" },
    ],
  },
  {
    titre: "Entreprise",
    liens: [
      { label: "Contact", href: "mailto:contact@materiabtp.info" },
      { label: "Mentions légales", href: "#" },
      { label: "Confidentialité", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-6 py-16 text-calque">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[26ch] text-[14px] leading-relaxed text-calque/75">
              Du DCE au mémoire technique, pour les entreprises du BTP qui
              répondent aux marchés publics.
            </p>
          </div>

          {colonnes.map((col) => (
            <div key={col.titre}>
              <p className="font-display text-[13px] font-bold uppercase tracking-wide text-calque/60">
                {col.titre}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.liens.map((lien) => (
                  <li key={lien.label}>
                    <a
                      href={lien.href}
                      className="focus-ring rounded-doc text-[14px] text-calque/85 transition-colors hover:text-calque"
                    >
                      {lien.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-[13px] text-calque/60">
          © {new Date().getFullYear()} Materia. materiabtp.info
        </div>
      </div>
    </footer>
  );
}
