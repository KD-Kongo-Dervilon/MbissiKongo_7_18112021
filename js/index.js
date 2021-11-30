/* eslint-disable no-undef */
const list = new List();

list.hydrate(recipes); // enter data
list.display(list.all); // list display

const ingredientFilter = new FilterByIngredient();
const applianceFilter = new FilterByAppliance();
const ustensilFilter = new FilterByUstensils();

// add the ingredients filter
list.addFilter(ingredientFilter);

// add appliance filter
list.addFilter(applianceFilter);

// add utensils filter
list.addFilter(ustensilFilter);

// filter for input search
list.search = new Search();
list.search.listen();
