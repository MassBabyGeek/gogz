# BTP Excellence - Site Vitrine Professionnel

Site vitrine moderne et responsive pour une entreprise de BTP (construction, rénovation, maçonnerie, gros œuvre).

## 🚀 Technologies

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **TailwindCSS 4** - Framework CSS utility-first
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
├── src/
│   ├── app/                  # App Router Next.js
│   │   ├── layout.tsx        # Layout principal avec SEO
│   │   ├── page.tsx          # Page d'accueil
│   │   └── globals.css       # Styles globaux
│   ├── components/           # Composants réutilisables (Atomic Design)
│   │   ├── Button.tsx        # Bouton avec variantes
│   │   ├── Card.tsx          # Carte avec sous-composants
│   │   ├── Container.tsx     # Wrapper de contenu
│   │   ├── Section.tsx       # Section de page
│   │   ├── Header.tsx        # Navigation principale
│   │   └── Footer.tsx        # Pied de page
│   ├── sections/             # Sections de la page d'accueil
│   │   ├── Hero.tsx          # Bannière principale
│   │   ├── Services.tsx      # Services proposés
│   │   ├── Portfolio.tsx     # Réalisations
│   │   ├── About.tsx         # À propos
│   │   └── Contact.tsx       # Formulaire de contact
│   └── lib/                  # Utilitaires et constantes
│       ├── types.ts          # Types TypeScript
│       ├── utils.ts          # Fonctions utilitaires
│       └── constants.ts      # Données du site
└── public/                   # Fichiers statiques
    └── favicon.svg           # Favicon
```

## 🎨 Principes de développement appliqués

### Clean Code
- Code lisible et bien commenté
- Noms de variables et fonctions explicites
- Fonctions courtes et responsables d'une seule tâche

### DRY (Don't Repeat Yourself)
- Centralisation des données dans `lib/constants.ts`
- Composants réutilisables
- Fonctions utilitaires dans `lib/utils.ts`

### SOLID
- **Single Responsibility** : Chaque composant a une seule responsabilité
- **Open/Closed** : Composants extensibles via props
- **Interface Segregation** : Types TypeScript spécifiques

### KISS (Keep It Simple, Stupid)
- Architecture simple et compréhensible
- Pas de sur-ingénierie
- Solutions directes et efficaces

### Atomic Design
- **Atoms** : Button, Container
- **Molecules** : Card (avec CardHeader, CardTitle, etc.)
- **Organisms** : Section, Header, Footer
- **Templates** : Layout
- **Pages** : page.tsx

## 🎯 Fonctionnalités

### ✅ SEO optimisé
- Metadata dynamiques (title, description, OG, Twitter)
- Structure sémantique HTML5
- Sitemap et robots.txt prêts

### ✅ Responsive Design
- Mobile First
- Breakpoints : sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation mobile avec menu hamburger

### ✅ Accessibilité (WCAG 2.1)
- ARIA labels
- Contrastes respectés
- Navigation au clavier
- Semantic HTML

### ✅ Performance
- Images optimisées (Next.js Image)
- Lazy loading
- Server Components par défaut
- Client Components uniquement si nécessaire

### ✅ Animations
- Framer Motion pour les transitions
- Animations au scroll (whileInView)
- Micro-interactions sur les boutons

## 🎨 Palette de couleurs

```css
--primary: #1e3a8a          /* Bleu foncé professionnel */
--primary-dark: #1e293b     /* Bleu très foncé */
--secondary: #d4af77        /* Beige doré */
--accent: #475569           /* Gris ardoise */
--neutral-light: #f8fafc    /* Gris très clair */
--neutral: #e2e8f0          /* Gris clair */
```

## 📄 Sections du site

### 🏠 Hero
- Bannière plein écran avec image de fond
- Titre accrocheur et CTA
- Statistiques animées
- Indicateur de scroll

### 🔧 Services
- 4 services principaux (Construction, Rénovation, Maçonnerie, Gros œuvre)
- Cartes avec icônes et listes de features
- Hover effects

### 🏗️ Portfolio
- 6 projets avec filtres par catégorie
- Galerie responsive (1/2/3 colonnes)
- Images Unsplash haute qualité
- Animations au changement de filtre

### 👥 À propos
- Présentation de l'entreprise
- Statistiques clés
- Valeurs (Qualité, Fiabilité, Passion)
- Image d'équipe

### 📧 Contact
- Formulaire validé (email, téléphone)
- Informations de contact (adresse, téléphone, email, horaires)
- Feedback utilisateur (succès/erreur)
- Icônes Lucide React

## 🔧 Configuration personnalisable

### Modifier les informations de l'entreprise
Éditez le fichier `src/lib/constants.ts` :

```typescript
export const COMPANY_INFO = {
  name: "Votre Entreprise",
  tagline: "Votre slogan",
  phone: "+33 X XX XX XX XX",
  email: "contact@votre-entreprise.fr",
  address: "Votre adresse",
  // ...
};
```

### Ajouter/Modifier des services
Dans `src/lib/constants.ts`, modifiez le tableau `SERVICES`.

### Ajouter/Modifier des projets
Dans `src/lib/constants.ts`, modifiez le tableau `PROJECTS`.

## 📸 Images

Toutes les images proviennent d'Unsplash (libres de droit) :
- Images de chantiers
- Bâtiments en construction
- Équipes BTP
- Matériaux de construction

Pour personnaliser, remplacez les URLs dans les composants par vos propres images.

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm run build
vercel --prod
```

### Autres plateformes
Le site est compatible avec toutes les plateformes supportant Next.js :
- Netlify
- AWS Amplify
- Digital Ocean
- etc.

## 📝 TODO pour production

- [ ] Remplacer les images Unsplash par vos vraies photos
- [ ] Configurer un backend pour le formulaire de contact
- [ ] Ajouter Google Analytics
- [ ] Configurer le code de vérification Google Search Console
- [ ] Créer un vrai favicon.ico
- [ ] Ajouter un sitemap.xml
- [ ] Configurer les variables d'environnement

## 🤝 Contribution

Ce projet suit les conventions :
- ESLint pour le linting
- Prettier pour le formatage (recommandé)
- Commits conventionnels

## 📄 Licence

Ce projet est un template open-source. Libre d'utilisation pour vos projets.

---

Développé avec ❤️ en Next.js et TailwindCSS
