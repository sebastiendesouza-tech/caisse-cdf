# Caisse manifestation simple

Application de caisse simple pour iPad, en HTML/CSS/JavaScript.

## Installation avec GitHub Pages

1. Créer un dépôt GitHub nommé `caisse-manifestation`.
2. Envoyer tous les fichiers de ce dossier dans le dépôt.
3. Aller dans `Settings` > `Pages`.
4. Dans `Build and deployment`, choisir :
   - Source : `Deploy from a branch`
   - Branch : `main`
   - Folder : `/root`
5. Cliquer sur `Save`.
6. Ouvrir l'adresse GitHub Pages générée.

## Sur iPad

1. Ouvrir l'adresse dans Safari.
2. Appuyer sur Partager.
3. Choisir `Ajouter à l'écran d'accueil`.

## Modifier les produits

Dans l'application, cliquer sur `Paramètres`.
Format d'une ligne :

```text
Catégorie;Nom du produit;Prix
```

Exemple :

```text
Boissons avec alcool;Bière;3
Restauration;Plat;10
Gobelets;Consigne gobelet;1
```

## Ticket A6

Le ticket contient :

```text
Commande n° 0001
quantité - nom - cases à cocher - prix
Paiement
Total
```

L'impression A6 est gérée par le CSS dans `style.css`.
