import { Client } from 'pg';

const client = new Client(process.env.PG_URL); // on donne les infos de la bdd à pg

await client.connect(); // on connecte le module à la bdd

export { client }