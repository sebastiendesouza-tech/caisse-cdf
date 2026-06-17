# Caisse manifestation - version v9

Version simple HTML/CSS/JavaScript pour GitHub Pages et iPad.

## Nouveautés v9

- Bouton **Bilan** : total espèces, CB, remboursements, total net, ventes par produit.
- Bouton **Commandes** : liste de toutes les commandes et remboursements.
- Gestion des remboursements : une commande n'est jamais supprimée ; le remboursement crée une écriture négative liée à la commande d'origine.
- Export CSV enrichi avec type vente/remboursement et motif.

## Installation GitHub Pages

1. Déposer tous les fichiers à la racine du dépôt GitHub.
2. Aller dans **Settings > Pages**.
3. Choisir la branche `main` et le dossier `/root`.
4. Ouvrir l'URL GitHub Pages sur l'iPad.
5. Dans Safari : Partager > Ajouter à l'écran d'accueil.


## Ajustements ticket compact
- Les catégories Boisson / Plat / Dessert ne sont plus affichées dans la commande ni sur le ticket.
- Le menu est affiché de manière compacte : chaque élément avec sa case, composition en retrait.


## v17
- Sélection du bénévole au moment de valider une commande bénévole.
- Remboursement rapide par produit, sans chercher la commande d’origine.
- Le remboursement rapide crée une écriture négative dans le bilan et le CSV.


## v17
- Correction choix composés : une seule ligne par aliment, avec compteur quand le nombre à choisir est supérieur à 1.
- Les quantités sont conservées pour la commande, le ticket et le suivi de stock.


## v17
- Choix des menus affichés en 2 colonnes par rubrique pour réduire l'ascenseur sur iPad.
- Les compteurs de choix multiples restent sur une seule ligne par aliment.


## v17
- Dans les menus, affichage en 2 colonnes uniquement quand la rubrique contient seulement des produits simples.
- Les rubriques avec un plat composé comme l’assiette gourmande repassent en affichage une colonne pour éviter les bugs de saisie.
