import promos from '../../data/promos.json' with { type: 'json' };
const promoController = {
    list(req,res) {

        //console.log(promos); // vérif du type de données //


        res.render('promos', { promos }); // on affiche la liste de toutes les promos
    },

    show(req, res) {

        const id = Number(req.params.id);// conversion faite dans isPositiveInt.js
        const found = promos.find(promo => promo.id === id ); // pour trouver l'id d'une promo

        res.render('promo', { promo: found });
    }
}

    showExample(req, res); {
// on fait une requête SQL pour trouver une seule promo
        const id = Number(req.params.id);// conversion faite dans isPositiveInt.js

        // const query = 'SELECT * FROM promo WHERE id = ' + id;  

// avec WHERE il y aura toujours au moins un résultat selon ce que l'on cherche
// dans notre requête (soit rien si l'id d'une promo n'est pas trouvé, 
// soit une promo si l'id est trouvé)

// !!! Faille de sécurité : on peut-être victime d'une injection SQL
// !!! Faut mettre en place des Requêtes Préparées 

/* ============= Requête Préparée avec PG ================= */

// Syntaxe 1:
        const query = {
            text: 'SELECT * FROM promo WHERE id = $1',
            values: [id],
        };
        const result = await client.query(query);

        //console.log(result.rows[0]);

        const found = result.rows[0];

        res.render('promo', { promo: found });
    };


/* Syntaxe 2 :
    async ShowExample(req, res) {
        const id = Number(req.params.id);

        const query = 'SELECT * FROM promo WHERE id = $1';
        // le $1 est un placeholder : il sera remplacé au moment de l'éxécution de la requête
        // et ne sera pas interpété comme une requête SQL
        const values = [id];
        const result = await client.query(query, values);

        const found = result.rows[0];

        res.render('promo', { promo: found });
    };
*/

export { promoController }