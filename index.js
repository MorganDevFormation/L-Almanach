/* ============ IMPORT ============= */
import express from 'express';
import { join } from 'node:path';
import 'dotenv/config';
import { router } from './app/routers/router.js';
import { promoRouter } from './app/routers/promoRouter.js';
import { studentRouter } from './app/routers/studentRouter.js';
import { adminRouter } from './app/routers/adminRouter.js';
/* ================================= */

// Branchemnt Express //
const app = express();

//Branchement EJS ( on déclare à Express qu'on va utiliser EJS) //
app.set('views', join(import.meta.dirname, 'app/views')); 
app.set('view engine', 'ejs');

// Branchement pour utiliser les fichiers statics //
app.use(express.static(join(import.meta.dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


/* ================= ROUTES =============== */
app.use(router);
app.use(promoRouter);
app.use(studentRouter);
app.use(adminRouter);


// Démarrage du server //
const port = process.env.PORT || 3000;
const base_url = process.env.BASE_URL || 'http://localhost';

app.listen(port, () => {
    console.log(`server ok sur ${base_url}:${port}`);
})