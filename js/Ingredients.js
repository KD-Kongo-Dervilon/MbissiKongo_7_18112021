/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class FilterByIngredient extends Filters {
  constructor() {
    super('ingredients');
  }

  // Retrieves the ingredients data collection
  collect(recipes) {
    const list = new Set();

    recipes.forEach((recipe) => {
      recipe.ingredients.forEach((item) => {
        list.add(item.ingredient.toLowerCase());
      });
    });
    return list;
  }

  // Filtre : ingredients in recipes with the selected ingredient dropdown

  filter(recipes) {
    if (this.selected.size === 0) {
      return recipes;
    }

    return recipes.filter((recipe) => {
      let isSelectable = false;
      let count = 0;

      this.selected.forEach((ing) => {
        const existingIngredients = recipe.ingredients.map((item) => item.ingredient.toLowerCase());
        if (existingIngredients.includes(ing)) {
          count++;
        }
      });

      if (count == this.selected.size) {
        isSelectable = true;
      }
      return isSelectable;
    });
  }
}
