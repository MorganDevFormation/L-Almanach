/*
les erreurs(exceptions) remontent la chaîne des appels de fonctions qui ont 
conduit à l'erreur.

On peut attraper (catch) une erreur dans une fonction même si elle vient d'une autre
fonction, tant qu'on l'a appelé dans la fonction où se trouve le catch (que se soit direct
ou indirect)

Exemple : 

on a trois fonctions:

=> fonction_A appelle fonction_B
=> fonction_B appelle fonction_C
=> fonction_C provoque une erreur

Ce qui se passe :

A appelle B.

B appelle C.

C provoque une erreur (ValueError).

L’erreur remonte automatiquement de C → B → A.

A possède un try/except, donc c’est là que l’erreur est rattrapée.
*/

function a() {
    try {
    b();
    } catch (error) {
    console.log("Houston, we've got a problem");
    }
}

function b() {
    c();
}

function c() {
    throw new Error("boom ça plante");
}

a();