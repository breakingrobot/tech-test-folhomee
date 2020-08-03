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
