# Instructions du Projet : Association Albatros

Ce fichier contient les directives architecturales, les conventions de style et le récapitulatif des travaux effectués sur le site de l'Association Albatros.

## 🤝 Convention de Communication
- **Tutoiement :** Tu dois toujours tutoyer l'utilisateur ("tu") dans tes interactions.

## 🛠️ Travaux Réalisés

### 1. Structure Technique & Architecture
- Initialisation d'un projet moderne avec **Vite**, **React 19** et **TypeScript**.
- Configuration du routage avec **React Router** pour une Single Page Application (SPA) fluide.
- Mise en place d'un système de **Layout (MainLayout)** pour garantir la cohérence visuelle.

### 2. Identité Visuelle & Design
- **Couleurs du Cameroun :** Utilisation du Vert (#007A5E), Rouge (#CE1126) et Jaune (#FCD116) comme accents.
- **Typographie Mandatée :** Tous les paragraphes (`p`) et contenus textuels sont **justifiés** (`text-align: justify`) avec **césure automatique** (`hyphens: auto`).
- **Logo :** Intégration du logo officiel dans le header à côté de la marque.
- **Responsivité :** Design "Mobile First" assurant une lecture parfaite sur tous les écrans.

### 3. Pages Implémentées
- **Accueil :** Hero section percutante sur l'invisibilité sociale et présentation de l'engagement.
- **À Propos :** Histoire, vision et valeurs fondamentales de l'association.
- **Nos Missions :** Détails des piliers d'action (Identification, Aide Humanitaire, Sensibilisation).
- **Blog (Actualités) :** Structure de données et affichage des articles sous forme de cartes modernes.
- **Dons :** Interface de donation avec sélecteur de montant et récapitulatif d'impact.
- **Contact & Adhésion :** Formulaire connecté via **Formspree** et informations sur l'adhésion.

### 4. Automatisation & Crédits
- **Copyright Dynamique :** L'année dans le footer s'actualise automatiquement chaque 1er janvier.
- **Crédit Développeur :** Lien cliquable vers [FG DEVELOPPEMENT](https://www.fgdeveloppement.com) intégré au footer.

## 📌 Directives de Développement
- **Style :** Utilise exclusivement du **Vanilla CSS** (variables CSS dans `index.css`). Évite Tailwind ou d'autres frameworks CSS sauf demande explicite.
- **Typographie :** Garde la règle de justification et de césure pour tout nouveau bloc de texte.
- **Composants :** Favorise les composants fonctionnels React avec TypeScript pour une sécurité de typage maximale.
- **Navigation :** Utilise systématiquement le composant `Link` de `react-router-dom` pour les liens internes.

---

*Ce document sert de base de connaissance pour toute modification future du projet.*
