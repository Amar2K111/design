import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ligne bg-calque/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="focus-ring rounded-doc">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#comment-ca-marche"
            className="focus-ring rounded-doc text-[15px] font-medium text-encre-soft transition-colors hover:text-encre"
          >
            Comment ça marche
          </a>
          <a
            href="#fonctionnalites"
            className="focus-ring rounded-doc text-[15px] font-medium text-encre-soft transition-colors hover:text-encre"
          >
            Fonctionnalités
          </a>
          <a
            href="#tarifs"
            className="focus-ring rounded-doc text-[15px] font-medium text-encre-soft transition-colors hover:text-encre"
          >
            Tarifs
          </a>
          <a
            href="#faq"
            className="focus-ring rounded-doc text-[15px] font-medium text-encre-soft transition-colors hover:text-encre"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#connexion"
            className="focus-ring hidden rounded-doc text-[15px] font-medium text-encre-soft transition-colors hover:text-encre sm:inline"
          >
            Connexion
          </a>
          <a
            href="#hero-cta"
            className="focus-ring rounded-doc bg-blue px-4 py-2.5 text-[15px] font-semibold text-calque transition-colors hover:bg-blue-dark"
          >
            Analyser mon DCE
          </a>
        </div>
      </div>
    </header>
  );
}
