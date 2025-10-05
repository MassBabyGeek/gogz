# 🎨 Design System BTP Luxe

Design system premium pour site vitrine BTP haut de gamme - Thème sombre et élégant.

## 🌙 Philosophie de design

**Luxe par la simplicité maîtrisée**
- Espace négatif généreux
- Contraste et profondeur
- Animations subtiles et lentes
- Hiérarchie typographique claire
- Alignements précis

## 🎨 Palette de couleurs

### Fonds (Noir bleuté)
```css
--background:           #0A0F1C  /* Noir bleuté profond */
--background-secondary: #121826  /* Fond secondaire */
--background-elevated:  #1A2332  /* Éléments surélevés */
```

### Accents (Bleus premium)
```css
--primary:       #1E3A8A  /* Bleu royal */
--primary-light: #38BDF8  /* Bleu clair lumineux */
--primary-dark:  #0F1E47  /* Bleu très foncé */
```

### Luxe (Doré champagne)
```css
--gold:      #C5A572  /* Doré champagne */
--gold-dark: #A68B5B  /* Doré foncé */
```

### Texte
```css
--foreground:           #F8FAFC  /* Texte principal */
--foreground-secondary: #94A3B8  /* Texte secondaire */
--foreground-muted:     #64748B  /* Texte atténué */
```

### Bordures
```css
--border:       #1E293B  /* Bordure standard */
--border-light: #334155  /* Bordure claire */
```

## 🔤 Typographie

### Fonts
- **Titres** : Playfair Display (serif élégante)
- **Corps** : Inter (sans-serif moderne)

### Utilisation
```tsx
// Titres premium avec Playfair Display
<h1 className="font-[family-name:var(--font-playfair)]">

// Corps de texte avec Inter
<p className="font-[family-name:var(--font-inter)]">

// Effet luxe (gradient doré)
<h1 className="title-luxury">
```

### Échelle typographique
- **Hero** : 3-4rem (48-64px)
- **H1** : 2.5-3rem (40-48px)
- **H2** : 2-2.5rem (32-40px)
- **H3** : 1.5-2rem (24-32px)
- **Body** : 1rem (16px)
- **Small** : 0.875rem (14px)

## 📏 Spacing (échelle 1.5)

```css
--spacing-xs:  0.5rem    /* 8px */
--spacing-sm:  0.75rem   /* 12px */
--spacing-md:  1rem      /* 16px */
--spacing-lg:  1.5rem    /* 24px */
--spacing-xl:  2.25rem   /* 36px */
--spacing-2xl: 3.375rem  /* 54px */
--spacing-3xl: 5rem      /* 80px */
```

## 🔘 Border Radius

```css
--radius-sm:  0.375rem  /* 6px - Petits éléments */
--radius-md:  0.5rem    /* 8px - Boutons */
--radius-lg:  0.75rem   /* 12px - Cartes */
--radius-xl:  1rem      /* 16px - Grandes cartes */
--radius-2xl: 1.5rem    /* 24px - Conteneurs */
```

## ⏱️ Transitions

```css
--transition-fast: 200ms ease-in-out  /* Micro-interactions */
--transition-base: 300ms ease-in-out  /* Standard */
--transition-slow: 500ms ease-in-out  /* Animations lentes */
```

**Règle d'or** : Transitions lentes et fluides (300-500ms) pour sensation premium.

## 🌫️ Glassmorphism

### Effet Glass standard
```tsx
<div className="glass">
  /* Fond flou léger avec bordure subtile */
</div>
```

### Effet Glass prononcé
```tsx
<div className="glass-strong">
  /* Fond flou intense */
</div>
```

### CSS Custom
```css
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## ✨ Effets visuels

### Lueur au hover
```tsx
<button className="glow-on-hover">
  /* Lueur bleue au survol */
</button>
```

### Séparateur élégant
```tsx
<div className="elegant-divider" />
/* Ligne dégradée subtile */
```

### Titre luxe (gradient doré)
```tsx
<h1 className="title-luxury">
  Excellence BTP
</h1>
```

## 🎭 Shadows (ombres premium)

```css
--shadow-sm:   0 2px 8px rgba(0, 0, 0, 0.3)    /* Petite */
--shadow-md:   0 4px 16px rgba(0, 0, 0, 0.4)   /* Moyenne */
--shadow-lg:   0 8px 32px rgba(0, 0, 0, 0.5)   /* Grande */
--shadow-glow: 0 0 20px rgba(56, 189, 248, 0.3) /* Lueur */
```

## 🖼️ Imagerie

### Overlays recommandés
```tsx
{/* Overlay sombre pour lisibilité */}
<div className="absolute inset-0 bg-black/50" />

{/* Gradient subtil */}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
```

### Sources d'images
- **Unsplash** : Photos de chantiers nocturnes, architecture
- **Pexels** : Matériaux, machines, constructions

### Optimisation
```tsx
import Image from "next/image";

<Image
  src="..."
  alt="..."
  loading="lazy"
  quality={90}
  className="object-cover"
/>
```

## 🎯 Composants

### Button (variantes)
```tsx
<Button variant="primary">   {/* Bleu royal */}
<Button variant="secondary"> {/* Transparent glass */}
<Button variant="gold">      {/* Doré champagne */}
```

### Card
```tsx
<Card className="glass hover:shadow-glow">
  <CardContent>...</CardContent>
</Card>
```

## 📱 Responsive

### Breakpoints Tailwind
```css
sm:  640px   /* Tablette */
md:  768px   /* Tablette large */
lg:  1024px  /* Desktop */
xl:  1280px  /* Grand écran */
2xl: 1536px  /* Très grand écran */
```

### Mobile First
Toujours concevoir pour mobile d'abord, puis ajouter les breakpoints.

## ♿ Accessibilité

### Contraste
- **AA minimum** : 4.5:1 pour texte normal
- **AAA idéal** : 7:1 pour texte normal

### ARIA
```tsx
<button aria-label="Demander un devis">
<nav aria-label="Navigation principale">
```

## 🎬 Animations (Framer Motion)

### Principes
- **Lentes** : 500-800ms
- **Ease** : `ease-in-out` ou `cubic-bezier`
- **Subtiles** : opacity, y (translate)

### Exemple
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

## 🎨 Textures et détails

### Grain de fond
Déjà intégré dans `globals.css` via SVG data-url.

### Gradient radial
```css
background: radial-gradient(
  circle at top left,
  #0B1120 0%,
  #020617 80%
);
```

## 📝 Bonnes pratiques

### ✅ À faire
- Espacements généreux (80-120px entre sections)
- Animations lentes et fluides
- Contraste AA/AAA
- Images optimisées (Next Image)
- Glassmorphism léger

### ❌ À éviter
- Noir pur (#000) → préférer noir bleuté
- Animations rapides (<200ms)
- Surcharge visuelle
- Trop de couleurs
- Texte sur fond complexe sans overlay

## 🚀 Utilisation dans le code

### Couleurs TailwindCSS
```tsx
bg-background            /* #0A0F1C */
bg-background-secondary  /* #121826 */
bg-primary              /* #1E3A8A */
text-foreground         /* #F8FAFC */
text-foreground-secondary /* #94A3B8 */
border-border-light     /* #334155 */
```

### Variables CSS custom
```css
background: var(--background);
color: var(--foreground);
border-color: var(--border);
```

---

## 🎯 Checklist qualité

- [ ] Fond sombre (noir bleuté)
- [ ] Font display (Playfair) sur titres
- [ ] Font sans (Inter) sur corps
- [ ] Espacements harmonieux
- [ ] Glassmorphism subtil
- [ ] Transitions 300-500ms
- [ ] Contraste AA minimum
- [ ] Images avec overlay
- [ ] Grain texture activé
- [ ] Scrollbar personnalisée

**Design par l'excellence et la rigueur** 🏗️✨
