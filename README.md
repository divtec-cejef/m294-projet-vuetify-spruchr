[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/EBdR9AYf)
# 🌐 Mon Projet Vue.js & Vuetify

## 1. 🎨 Présentation du projet

### Concept
- API choisie et pourquoi  
- Public cible  
- Objectifs de l’application  

### Fonctionnalités principales
- Affichage d’une liste d’éléments (via API)
- Recherche 
- Vue détail
- Fonctionnalité interactive (favoris, watchlist)
- Persistance locale (favoris)

### Aperçu visuel
_(Capture d’écran de l’application)_  
`![Screenshot de l’application](img/screenshot.png)`

---

## 2. 📚 Parcours d'apprentissage

### Ressources utilisées
#### Documentation & tutos
- [Vue 3 Docs](https://vuejs.org/guide/introduction.html)
- [Vuetify Docs](https://vuetifyjs.com/en/components/all/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [Public APIs List](https://github.com/public-apis/public-apis)
- Autres ressources...

#### Progression
- Semaine 1 : import de l'API
- Semaine 2 : ajouter du graphique
- Semaine 3 : ajout de la page like, fonction pour rechercher et la fonction de like
- Semaine 4 : ajout de routage par carte individuel

---

## 3. 🛠️ Outils et méthodologie

### Environnement de développement
- **IDE** : WebStorm
- **Versioning** : GitHub
- **Dépendances principales** : Vue 3, Vuetify 3, Pinia, Axios/Fetch
- **Gestion API Keys** : `.env`

### Installation & Run
- Cloner le repo : git clone https://github.com/divtec-cejef/m294-projet-vuetify-spruchr
- Installer : npm install
- Lancer : npm run dev
- Variables d’environnement : 
  VITE_API_BASE_URL=https://api.themoviedb.org/3/
  VITE_API_KEY=YOUR_API_KEY

### Choix techniques
- API sélectionnée :  the movie database
- Justification du choix : je n'avais rien trouver ducoup j'ai choisi une API qui a été fourni par le formateur
- Endpoints utilisés : https://api.themoviedb.org/3/movie/popular
- Limites/quotas connus : 40 requête seconde

### Architecture (Descriptif + schéma simple + data-flow)
- `App.vue` : layout principal  
- `pages/` : pages (liste, détails, favoris)
Outils utiles : Draw.io

---

## 4. 🧪 Tests et validation

### Tests techniques
- ✅ Appels API fonctionnels  
- ✅ Persistance vérifiée après refresh (localStorage)  
- ✅ Navigation entre les vues OK  

### Tests d’UX
- Navigation intuitive  
- Recherche faciles à comprendre  
- Feedback utilisateur (loading, erreurs, vide)

### Tests d’accessibilité
- Contraste couleurs (Vuetify par défaut)  
- Labels et placeholders corrects  
- Navigation clavier possible

### Tests d’erreurs & fallback
- API down → **mock fallback** affiché (fichier local ou données simulées)
- Recherche sans résultat → affichage “Aucun élément trouvé”

---

## 5. 🤖 Usage d’intelligence artificielle

**⚠️ TRANSPARENCE OBLIGATOIRE** : 

### IA utilisée
- **Nom** : ChatGPT / Claude 
- **Version** : GPT-4/GPT-5-mini et Sonnet 4.5
- **Contexte** : Aide ponctuelle / Génération de code / Debugging  

### Utilisation détaillée
**Domaines d'aide :**
- Aide au code général : 50%  
- Aide à la structuration du projet : 20%
- Debugging : 75%  
- Recherche d’idées : 0%  

**Compréhension et adaptation**
- Expliquer ce que fait le code généré  
- Dire comment il a été adapté au projet  

### Parties codées manuellement
- Composants principaux : 50% personnel  
- Store & persistance : 20% personnel  
- Routing & navigation : 20% personnel  
- Tests & validation : 100% personnel  

## 6. 🎯 Bilan personnel

### Réussites et fiertés
- Aspects du projet dont je suis fier : projet en général

### Améliorations possibles
- Ce que j’ajouterais avec plus de temps  : plus de catégorie et peut être les acteurs

---

## 7. 📚 Références & Sources
- Documentation de l’API : [the movie database](https://www.themoviedb.org/)
- Usage de l’IA : voir section ci-dessus  
