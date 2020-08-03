### Exercice 1 - Choix algorithme

Afin de "hasher" (plutôt obfusquer) l'ID d'une URL enregistrée en base de données de manière déterministe, j'ai associé deux méthodes :

- L'hachage multiplicatif de Knuth (Knuth multiplicative hash)
- L'encodage en Base 36 d'un entier ou chaîne de caractère

#### Knuth multiplicative hash

Un hash multiplicatif qui prend en entrée un entier, le multipliant par un nombre premier suffisament grand et en appliquant une porte AND entre cette multiplication et l'entier représentant la limite des entiers 32-bits (2147483647)

On applique à cette multiplication une porte XOR avec un entier aléatoire de taille similaire au nombre premier, et on retourne le résultat final qui nous donne un entier, qui représente notre hash.

Pour reverse le hash, on applique la même porte XOR sur notre hash, on le multiplie par l'inverse du nombre premier, on applique une porte AND entre cette multiplication et l'entier représentant la limite des entiers 32-bits (2147483647) et on retrouve l'entier de base.

J'ai utilisé ce hash puisqu'il est relativement simple à mettre en oeuvre, donne des résultats déterministes et reversibles, ce qui est nécessaire dans notre cas et évite toute possibilité de collision (testés pour plusieurs millions de hash)  

Pour plus de détails concernant l'algorithme utilisé, voir les références suivantes :
* http://lcm.csa.iisc.ernet.in/dsa/node44.html
* https://classes.engineering.wustl.edu/cse241/handouts/hash-functions.pdf

#### Base 36
>  Base36 est un schéma de codage binaire en texte qui représente des données binaires dans un format de chaîne ASCII en les traduisant en une représentation base-36. Le choix de 36 est pratique car les chiffres peuvent être représentés en utilisant les chiffres arabes 0–9 et les lettres latines A – Z

Dans ce cas, chaque chiffre peut correspondre à un chiffre ou à un caractère latin mais dépend de la taille de la chaine d'entrée.
C'est une obfuscation complémentaire, rudement efficace et déjà très utilisé pour raccourcir des URL.



