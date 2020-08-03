## Test Technique Folhomee

URL Reducer utilisant la stack technologique suivante :

- Express.js (Sequelize ORM) avec Babel
- MySQL
- Next.js (React SSR)

## Comment commencer ?

### Pré-requis

Pour lancer l'application dans les meilleurs conditions, vous devez utiliser :

* Docker (Compose 1.13.0+ et Docker Engine 18)

### Installation
1. Cloner le repository
```sh
git clone git@github.com:breakingrobot/tech-test-folhomee.git
cd tech-test-folhomee
```

2. Copier et remplir les fichiers d'environemment (déjà pré-rempli pour des raisons de test)
```sh
cp .env.example .env
```

3. Démarrer les containeurs
```sh
docker-compose up -d
```

Vous pourrez ensuite tester l'application avec :
* l'API qui sera disponible à l'adresse http://api.test-technique.localhost
* le frontend qui sera disponible à l'adresse http://test-technique.localhost

### Lancement de tests

Il est préférable de lancer les tests depuis le container, afin de réaliser les tests, vous pouvez utiliser les commandes suivantes.
```sh
docker-compose exec back bash
cd /usr/app/
yarn test
```

### Détails des exercices

#### Mise en place de l'architecture
Une heure aura été dédié à la mise en place de l'architecture :
- Création de l'application Express (5 minutes)
- Ajout de Babel et de Nodemon sur Express (10 minutes)
- Ajout de Sequelize (10 minutes)
- Ajout des tests sur Express (5 minutes)
- Mise en place de Next.js avec Styled Component / Grommet (10 minutes)
- Mise en place du Docker-Compose et des environnements (20 minutes)

#### Exercice 1
La réalisation du premier exercice aura pris deux heures :
- Documentation sur les algos possibles (1 heure)
- Réalisation de l'algorithme (Knuth Multiplicative Hash + Base 36):
    - Knuth (25 minutes avec la librairie Long.js)
    - Base36 (5 minutes)
- Réalisation des tests Jest (30 minutes)

### Exercice 2
La réalisation du second exercice aura pris 1h20 :
- Création des différentes routes (10 minutes)
- Ajout d'un système de configuration (5 minutes)
- Intégration de Sequelize dans l'application Express (10 minutes)
- Création du modèle avec système de setter pour le hash de l'URL (10 minutes)
- Création du Service URL avec utilisation du modèle (findAll, find, findOrCreate - 10 minutes)
- Création du controller des URL avec GET/POST, liste, fetch et création d'URL (20 minutes)
- Ajout d'un middleware de pagination, intégration avec les controllers/models Sequelize (10 minutes)
- Ajout d'un middleware de CORS (5 minutes)

### Exercice 3
La réalisation du troisième aura requis 3h :

**La création des composants suivant :**
- Création d'un composant Header (10 minutes)
- Création d'un composant de Card (10 minutes)
- Création d'un composant Styled-Component de Formulaire (5 minutes)
- Ajout d'un composant de Spinner de chargement (5 minutes)

**La création des scènes suivantes**
- Création d'une scène de formulaire pour raccourcir une URL (1 heure)
- Création d'une scène de liste pour afficher les différentes URL raccourcies de manière paginé (45 minutes)

Mais aussi :
- Création de la page Index qui regroupe Header/Formulaire d'URL/Liste d'URL (5 minutes)
- Création d'un fichier de configuration pour lier l'URL de l'API (5 minutes)
- Création d'un fichier de ressources API (5 minutes)
- Ajout d'un thème custom pour Grommet (10 minutes)
- Mise en place d'ESLint (15 minutes)
