# MbissiKongo_7_18112021

Lien de la démo :
https://kd-kongo-dervilon.github.io/MbissiKongo_7_18112021/

Algo main

La version main Utilise la méthode for et foreach , et les class , j'import les différents components dans j'ai besoin pour la contruction .

Actuellement la version  algo1 basé sur le desing patern et la plus performante et rapide ,pas de module à importer ou exporter ,juste un extend de la class filter

le nombre de champ minimun requis pour pouvoir déclencher la recherche dans l'input dois être superieure à 3 ou égale à 3

L'application consiste en une page simple, réalisée avec Javascript (vanilla) avec des class et un import des differents components

Sur cette page un moteur de recherche permet de chercher dans une database de 50 recettes (représentée par un fichier JSON) soit via des mots clés (qui vont matcher avec le nom, la description ou la liste d'ingrédient des recettes) soit via un sélecteur d'ingrédients, d'ustensils ou d'appareils.

Organisation du projet

On réceptionne la valeur entrée par l'utilisateur dans l'input .

On Récupere les 50 recettes : que on injecte dans recipesApiResult

Pour chaqu'une des 50 recettes (a ce niveau je peux sois mettre une boucle for , sois un foreach),la  valeur entrée dans l'input est présente dans le nom de recette ou la description  de la recette ou dans les ingredients de la recettes ? si oui on ajoute la recette à un tableau recipesMatched

On récupere le tableau de recipesMatched 

On récupere le tag sélectionné à partir d'un tableau selected

Pour chaqu'une des recettes présente dans recipesMatched
la valeur tag est présente dans les ingredients de la recette ou dans les appareils de recettes ou dans les ustensiles de la recettes ?

Si oui on ajoute la recette à un tableau comprenant les résultat pour les ingredients , les appareils et les ustensiles et on retourne le tout