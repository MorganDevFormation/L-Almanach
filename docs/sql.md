## Ecrire du SQL

Etape 2:

promos par ordre alphabétique :

- SELECT name FROM promo ORDER BY name ASC;

Etudiants par ordre alphabétique :

- SELECT first_name last_name FROM student ORDER BY last_name ASC LIMIT 50;

Etudiants de la promo 135 :

- SELECT * FROM student WHERE promo_id = 135;

Etudiants nom ou prénom ressemble à MAX :

- SELECT first_name last_name FROM student WHERE first_name LIKE '%max%';


ETAPE 3

Insérer l'étudiant "Chuck Norris" dans la table "student"

- INSERT INTO student 
    (first_name, last_name, promo_id) 
  VALUES 
    ('Chuck', 'Norris', 5);


Insérer la promo "César" dans la table "promo"

- INSERT INTO promo
    (id, name)
  VALUES
     ( ('SELECT MAX (id) FROM promo) +1, 'César');

Mise à jour de la promo 5 en changeant son nom

- UPDATE promo
  SET NAME = 'Cleo'
  WHERE id = 5;

Supprimer la promo 123

- DELETE FROM promo WHERE id = 123;
