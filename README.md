# Association Albatros - Site Web Officiel

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-6-646cff.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6.svg)

Ce projet est le site web officiel de l'**Association Albatros**, une organisation humanitaire basée au Cameroun dédiée à la promotion, la recherche et la vulgarisation de l'aide sociale pour les personnes en situation de précarité extrême ou d'exclusion sociale.

## 🎯 Objectifs du Projet

Le site a été conçu pour briser l'invisibilité des personnes vulnérables à travers :
- Une présentation claire des missions et de la vision de l'association.
- Un espace d'actualités (Blog) pour suivre les actions sur le terrain.
- Un système de collecte de dons pour soutenir les projets.
- Un portail d'adhésion et de contact pour mobiliser les bénévoles et membres.

## 🛠️ Stack Technique

- **Frontend :** [React 19](https://react.dev/) avec [TypeScript](https://www.typescriptlang.org/)
- **Build Tool :** [Vite 6](https://vitejs.dev/)
- **Routage :** [React Router 7](https://reactrouter.com/)
- **Stylisation :** Vanilla CSS (Architecture modulaire par composant)
- **Formulaires :** Intégration [Formspree](https://formspree.io/) pour la gestion des contacts sans backend.

## 🎨 Charte Graphique

Le design respecte l'identité nationale du Cameroun avec une utilisation élégante des couleurs :
- **Vert (#007A5E)** : Espoir et croissance.
- **Rouge (#CE1126)** : Unité et force.
- **Jaune (#FCD116)** : Prospérité.

**Spécificités typographiques :** Pour renforcer le sérieux et le professionnalisme, tous les textes de paragraphes sont justifiés avec césure automatique (`hyphens: auto`).

## 📂 Structure du Projet

```text
src/
├── assets/         # Images et ressources statiques
├── components/     # Composants réutilisables (Header, Footer, etc.)
├── data/           # Données statiques (Articles de blog)
├── layouts/        # Gabarits de pages (MainLayout)
├── pages/          # Composants de pages (Home, About, Missions, etc.)
├── App.tsx         # Configuration des routes
└── index.css       # Styles globaux et variables CSS
```

## 🚀 Installation et Lancement

### Prérequis
- [Node.js](https://nodejs.org/) (Version 18 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet ou extraire l'archive
cd "Site Asso Albatros"

# Installer les dépendances
npm install
```

### Développement
```bash
# Lancer le serveur de développement
npm run dev
```
Le site sera accessible sur `http://localhost:5173`.

### Production
```bash
# Générer le build optimisé
npm run build
```
Les fichiers prêts pour le déploiement seront générés dans le dossier `/dist`.

## 📧 Configuration du Contact

Pour rendre le formulaire de contact opérationnel :
1. Créez un compte sur Formspree.
2. Créez un formulaire et copiez l'ID fourni.
3. Remplacez l'ID dans `src/pages/Contact.tsx` à la ligne `action="https://formspree.io/f/VOTRE_ID"`.

---

**Développé par [FG DEVELOPPEMENT](https://www.fgdeveloppement.com)**
*© 2026 Association Albatros. Tous droits réservés.*
