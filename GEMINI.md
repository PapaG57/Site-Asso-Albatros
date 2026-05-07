# Instructions du Projet : Association Albatros

Ce fichier contient les directives architecturales, les conventions de style et le récapitulatif des travaux effectués sur le site de l'Association Albatros.

## 🤝 Convention de Communication
- **Tutoiement :** Tu dois toujours tutoyer l'utilisateur ("tu") dans tes interactions.

## 🛠️ Travaux Réalisés

### 1. Structure Technique & Architecture
- Initialisation d'un projet moderne avec **Vite**, **React 19** et **TypeScript**.
- Configuration du routage avec **React Router** pour une Single Page Application (SPA) fluide.
- Mise en place d'un système de **Layout (MainLayout)** pour garantir la cohérence visuelle.

### 2. Identité Visuelle & Design (Refonte Mai 2026)
- **Design Institutionnel :** Passage à une esthétique plus solennelle basée sur un fond vert dominant (#007A5E).
- **Header :** Fond vert, texte blanc, navigation alignée à droite avec barre de prestige sombre.
- **Hero :** Mise en page avec image encadrée et légende sur bandeau anthracite.
- **Grille de Services :** Implémentation d'une section à 4 colonnes sur fond vert avec icônes circulaires.
- **Typographie :** Titres en majuscules avec espacement des lettres (`letter-spacing: 1px`).
- **Convention Mandatée :** Tous les paragraphes (`p`) sont **justifiés** avec **césure automatique**.

### 3. Pages Implémentées
- **Accueil :** Nouvelle structure Hero + Grille de services institutionnelle.
- **À Propos :** Histoire, vision et valeurs fondamentales de l'association.
- **Nos Missions :** Détails des piliers d'action (Identification, Aide Humanitaire, Sensibilisation).
- **Blog (Actualités) :** Structure de données et affichage des articles sous forme de cartes modernes.
- **Dons :** Interface de donation avec sélecteur de montant et récapitulatif d'impact.
- **Contact & Adhésion :** Formulaire connecté via **Formspree** et informations sur l'adhésion.

### 4. Automatisation & Crédits
- **Footer :** Refonte complète avec alignement rigoureux des colonnes, menus (Contact et Liens Rapides) harmonisés, icônes standardisées et intégration d'un lien email (`mailto`) fonctionnel.
- **Modale Carte :** Implémentation d'une fenêtre modale interactive pour la localisation (Village de Songloulou), accessible via un bouton "carte" avec info-bulle personnalisée dans le footer.
- **Copyright Dynamique :** L'année dans le footer s'actualise automatiquement chaque 1er janvier.
- **Crédit Développeur :** Lien cliquable vers [FG DEVELOPPEMENT](https://www.fgdeveloppement.com) intégré au footer.
- **Localisation Officielle :** Village de Songloulou, région du Littoral, département de la Sanaga-Maritime, Cameroun.

## 📌 Directives de Développement
- **Style :** Utilise exclusivement du **Vanilla CSS** (variables CSS dans `index.css`).
- **Cohérence Visuelle :** Maintenir le nouveau style institutionnel (fond vert pour les sections principales, titres en majuscules).
- **Typographie :** Garde la règle de justification et de césure pour tout nouveau bloc de texte.
- **Navigation :** Utilise systématiquement le composant `Link` de `react-router-dom` pour les liens internes.

---

*Ce document sert de base de connaissance pour toute modification future du projet.*
