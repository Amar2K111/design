# Materia — site marketing

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000. `npm run build` pour la version de
production (nécessite un accès internet la première fois, pour
récupérer les polices Google Fonts via `next/font`).

## Direction visuelle

Palette ancrée dans le vocabulaire des documents de marché et du
chantier plutôt que dans les codes SaaS génériques :
- `beton` #EDEBE6 — fond, papier
- `calque` #FAFAF7 — cartes, panneaux
- `encre` #1C1F1B — texte, footer
- `marche` #C1341C — accent unique (CTA, chiffres clés) — rouge de
  tampon administratif
- `acier` #2D4356 — traçabilité, éléments secondaires
- `chantier` #E8A93B — surlignage ponctuel (points de vigilance)

Typographies : Archivo (titres, display), Source Sans 3 (texte
courant), IBM Plex Mono (données extraites/tracées uniquement —
sources, références de page, valeurs de la calculette).

## À remplacer avant mise en ligne

- **`components/ProblemStats.tsx`** — les trois chiffres (2 à 4 h,
  8 à 20 h, 40 à 60 %) sont des ordres de grandeur sectoriels
  génériques, marqués en commentaire dans le fichier. À remplacer
  par des données mesurées côté Materia dès que disponibles.
- **`components/RoiCalculator.tsx`** — les valeurs par défaut de la
  calculette (1 appel/mois, 60 000 €, 20 % de réussite) et les
  bornes des sliders sont celles données dans le brief ; à ajuster
  si l'expérience terrain montre d'autres ordres de grandeur plus
  crédibles pour la cible.
- **`components/FAQ.tsx`** — les réponses ont été rédigées pour ce
  brief (le contenu FAQ actuel de materiabtp.info n'était pas
  accessible depuis cet environnement) ; à comparer et fusionner
  avec les réponses déjà en ligne avant publication.
- **`components/ProofWidget.tsx`** — emplacement vidéo en
  placeholder, à intégrer par le client (import DCE → extraction →
  validation du plan → export, en un seul enchaînement).
- **Tarifs** (`components/Pricing.tsx`) — 250 €/500 €/1000 € par
  mois repris tels quels du brief.
- Mentions légales et lien Confidentialité dans le footer pointent
  vers `#` — à brancher sur de vraies pages.
