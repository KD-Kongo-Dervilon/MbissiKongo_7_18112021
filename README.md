# MbissiKongo_7_18112021

Les petits plats 

lien de la démo :https://kd-kongo-dervilon.github.io/MbissiKongo_7_18112021/

Alog1 

La version alog1 utilise les méthodes de l'object array(foreach, filter,map) , elle et entierement basée sur le desing patern ,ça fais que l'algorythme et évolutif et plus performant .

Actuellement la version basé sur le desing patern et la  plus performante et rapide ,pas de module à importer ou exporter ,juste un extend de la class filter .

le nombre de  champ minimun requis pour pouvoir déclencher la recherche dans l'input dois être superieure à 3 ou égale à 3

L'application consiste en une page simple, réalisée avec Javascript (vanilla) avec des class et un extend de la classe filter. 

Sur cette page un moteur de recherche 
permet de chercher dans une database de 50 recettes (représentée par un fichier JSON) soit via des mots clés (qui vont matcher avec le nom, la description ou la liste d'ingrédient des recettes) soit via un sélecteur d'ingrédients, d'ustensils ou d'appareils.

Organisation du projet

j'ai commencé par créer une class Filters ,que j'extenderais par la suite , cette classe comprend notament ,

class Filters
la fonction build() qui pour but de construile html
(render(), listenForSelection(), listenForUnselect())

la fonction CloseDropdown() comme son nom l'indique permet de fermer le dropdown ,avec un display none

la fonction displayTags() affiche les tags séléctionnées

filterByInput() permet une recherche écrite dans le dropdown input 

listenForInputSearch() on écoute la recherche dans l'input
et on joue filterByInput()

listenForSelection() on écoute les selections du tags et en filtre avec filter 

listenForUnselect() on écoute les selections pour  fermer le tag selectionné par la croix 

listenToDropdown() permet 'louverture et fermeture du dropdown , ils regroupent en lui la fonction openDropdown(), closeDropdown().

la fonction openDropdown() permet l'ouverture du dropdown.

la fonction render() affiche le html et la liste des datas dans le dropdown

la fonction renderDropdown()  affiche le html dans le dropdown

J'ai créer ensuite Ingredients.js ,Appliance.js, Ustensils.js, j'etends la class Filters avec extends Filters ,je crée une fonction constructor() avec le mot clé super ,afin d'appeller ou d'acceder à des fonctions définies sur l'objet parent.

class FilterByIngredients extends Filters
class FilterByAppliance extends Filters
class FilterByUstensils extends Filters

Je crée la fonction collect(recipes) avec le parametre recipes, le but étant de récuperer la collecte de donée ingredients, j'utilise la methode forEach.

Je crée la fonction Filter(recipes) avec le parametre recipes ,filter me permet de filter les ingredients dans les recettes ,l'ingredients séléctionné dans le dropdown, j'utilise la methode foreach avec un map et includes, ceci s'applique au trois ,Appliances.js, Ingredients.js, Ustensils.js

class Search
Je crée la class Search ,avec la fonction hideMessage() ,fais disparaitre le message ,avec none et flex

listen() écoute la recherche sur l'input ,celui dois être superieure  ou égale >= 3, il regroupent la fonction hideMessage(), et showMessage()

renderMessage() construction du message Html ,au cas ou aucune recherche n'aboutit.

search() paramètre de la recherche par chaine de caractéres , j'utilise la methode foreach ,et indexOf ,pour le terme recherché dans le titre 

pour le terme recherché dans Ustensils , j'utilise foreach ,indexOf >= 0

pour le terme recherché dans l'appareil ,j'utilise indexOf >=0

pour le terme recherché dans ingredients ,la méthode foreach  et indexOf 

showMessage() permet d'l'affichage du message ,avec flex ou none 

class Recipe 
render() permet l'affiche ontenu html des recettes
renderIngredients() contenu html des recettes ,avec la methode foreach , hasOwnProperty

class List
add(recipe) avec le parametre recipe, ajoute la recettes
addFilter(filter) avec le parametre filter,appelle divers fonction, listendTodropdown(), listenForInputSearch(),build()
buidl(recipes) avec le parametres recipes ,repasse les actions multiples quand la liste se reconstruit,avec la methode foreach
display(recipes) avec le parametre recipes ,et la méthode foreach , affiche les recettes
hydrate(recipes) avec le parametre recipes ,la méthode foreach ,introduit les données 

index 
let list = new list on appelle une nouvelle list
list.hydrate(recipes) on introduits les données 
list.display(list.all); on affiche la liste

On appelle un nouveau FilterByIngredient,FilterByAppliance,FilterByUstensils

let ingredientFilter = new FilterByIngredients()
let ingredientFilter = new FilterByIngredients()
let ingredientFilter = new FilterByIngredients()

On ajoute le filtre ingredients
list.addFilter(ingredientFilter);

On ajoute le filtre appliance
list.addFilter(applianceFilter); 

On ajoute le filtre ustensils
list.addFilter(ustensilFilter); 

On appelle une nouvelle search
list.search = new Search();

On filtre pour la recherche input
list.search.listen();

Installation
ce projet ne comporte aucune dependance 

Le projet Les Petits Plats est une projet d'application web entièrement développé en Javascript Vanilla
J'utilise l'outil eslint  c'est un outils pour le langage de programmation Javascript ,écris en Node.js
    Il permet d’identifier les bugs à l’écriture plutôt qu’au runtime, avec donc un gain de temps ;
    Il montre directement où sont les erreurs de syntaxes, ce qui évite de passer du temps sur des erreurs d’inattention (comme un « = » à la place d’un « == » dans un if) ;
    ESLint permet aussi d’uniformiser la codebase, surtout si plusieurs développeurs travaillent sur le même projet (c’est-à-dire avoir des règles syntaxiques uniques).
    Une bonne lisibilité du code, que ça soit par vous-même, plus tard, ou par vos collègues ;
    Une meilleure maintenabilité, notamment grâce à cette lisibilité améliorée ;
    Une meilleure gestion des ressources et performances, et donc un produit plus qualitatif.

mise en place pour installer eslint
npm init 
npm install eslint --save-dev
a la suite il vous poseras des questions 
how would you like to use Eslint ? style
what type of modules does your project use ? common.js
which framework does your project use ? none
Does your project use typeScript ? No
where does your code run ? browser
how would you like to define a style for your project ? guide 
which style guide do you want to follow? airbnb
what format do you want your config file to be in ? Javascript
would you like to install them now with npm ?

Architectures des algos
<img width="1051" alt="Capture d’écran 2021-12-03 à 11 48 44" src="https://user-images.githubusercontent.com/82412416/144590474-fa2a1f5e-9292-4d99-945f-3dd1a9b28352.png">
<img width="1046" alt="Capture d’écran 2021-12-03 à 11 49 28" src="https://user-images.githubusercontent.com/82412416/144590483-e5ccb825-3696-4957-bbb8-e3c161f41bd8.png"><img width="1093" alt="Capture d’écran 2021-12-03 à 11 50 00" src="https://user-images.githubusercontent.com/82412416/144590495-86cf9827-c79a-4a74-896a-11e57c1a3bfa.png">



<img width="439" alt="Capture d’écran 2021-12-03 à 11 46 57" src="https://user-images.githubusercontent.com/82412416/144590061-e5522953-9461-4af5-ba66-0473b15dc3a8.png">



