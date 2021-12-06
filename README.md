# MbissiKongo_7_18112021

Lien de la démo :
https://kd-kongo-dervilon.github.io/MbissiKongo_7_18112021/

Algo main

La version main Utilise la méthode for et foreach , et les class , j'import  et export les différents components dans j'ai besoin pour la contruction .

Actuellement la version  algo1 basé sur le desing patern et la plus performante et rapide ,pas de module à importer ou exporter ,juste un extend de la class filter

le nombre de champ minimun requis pour pouvoir déclencher la recherche dans l'input dois être superieure à 2 ou égale à 2

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

// Je commence par récupere le tableau jason des ingredients ,je créer un dossier provider/recipesData.js

Je créele dossiers Utilities ,avec les classes DataLogics qui contiendras la logique de ma recherche et Utils.

class Utils
la recherche dois être superieure à 2 

static normalizeText(text); transforme le text en minuscule

static upperText(text); transforme le text en Majuscule
clear la section, et le clear le filtre

static sortByTitle(array); Rassemble tous ingredients ,appareils et ustensils ,et les tries par ordre alphabetique .

class DataLogic 
static getAllIngredients(ing); obtenir tous les ingrédients pour les faire apparaître par défaut, avant de rechercher

static getAllAppliances(app); obtenir tous les appareils pour les faire apparaître par défaut, avant de rechercher

static getAllUstensils(ust); obtenir tous les ustensiles pour les faire apparaître par défaut, avant de chercher

// Je crée le dossier search search avec le fichier Search.js

class Search 
j'importe la classe DataLogic et Utils
static searchMainInput(value) qui contient le tableau recipesMatched retourner

static searchInputFilters(collection, value); recherche par entrée d'ingrédients/appareils/ustensiles

static searchByInTags recherche par tags pour les ingrédients

static searchByAppTags recherche par tags pour les appareils

static searchByUstTags rechercher par tags des ustensiles

// Je crée le dossiers Filters ,avec les fichiers Appliances, Ingredients ,Ustensils.

class appliances
static init(appliances,recipes)
static fillAppliances(appliances); afficher les appareils dans la zone appareils selon les recettes affichées dans la section 'recettes'

static searchInput(appliances); permet de rechercher les appareils en entrée parmi les appareils présents dans les recettes affichées

static filterTags(recipes); filtre le tableau/ indexOf

// Je crée page , qui contient les components suivants 
Messages: class Messages 
static BuilResulMessageWitchResult(recipes); affiche le message avec le nombre de recettes correspondant à la recherche

static BuildResultMessageWitchNoResult(); affiche le message indiquant à l'utilisateur qu'aucune recette ne correspond à la recherche

static displayMessage(); affiche le message contenant le nombre de recettes

static hideMessage(); disparaître le message contenant le nombre de recettes

Button class Buttons 
static launcButton (btn, open, closen hiddePart);
lance le dropdown et le ferme

DomService class DomService; ce qui s'affiche au niveau du dooms

static buildResult(collections); construire la section contenant les recettes à afficher

static buildRecipe(collection); construire chaque recette

static creatArticlesElt(collection); créer l'article qui contiendra les informations de chaque recette

Tags class Badges
static buildTags(elt, tag); affiche un badge contenant l'étiquette de l'ingrédient/de l'appareil/de l'ustensile que l'utilisateur a sélectionné

static fillTag(elt, tag); remplir la balise sélectionnée

static hideTag(elt); retirer l'étiquette et remplacer les boutons ingrédient/appareil/ustensile

static pushDownButtonsFilter()
appuyez sur les boutons ingrédient/appareil/ustensile

static pushUpButtonsFilter()
appuyez sur les boutons ingrédient/appareil/ustensile

Builder class Builder
static init()
Construire une section avec toutes les recettes avant la recherche
Logique des ingrédients
Ingredients.init(DataLogic.getAllIngredients(recipesApiResult),recipesApiResult);
Logique des appareils
Appliances.init(DataLogic.getAllAppliances(recipesApiResult), recipesApiResult);
Logique des ustensiles
Ustensils.init(DataLogic.getAllUstensils(recipesApiResult), recipesApiResult);

static initSearch(result)
Créer une section après la recherche
Logique des ingrédients
Ingredients.init(result.ingredients, resultrecipesMatched;
Logique des appareils
Appliances.init(result.ingredients, result.recipesMatched;
Logique des ustensiles
Ustensils.init(result.ingredients, result.recipesMatched);

app.js
importation de Builder,Message , et search et Utils
Construire par défaut sans recherche
Builder.init();
Construire avec l'entrée de recherche
Réinitialiser la construction
Utils.clearRecipesSection();
Builder.init();

Le project ne comporte aucune dependance 

Architectures des algos