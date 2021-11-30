/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
class FilterByAppliance extends Filters {
  constructor() {
    super('appliance');
  }

  // Recovers device data collection
  // eslint-disable-next-line class-methods-use-this
  collect(recipes) {
    const list = new Set();

    recipes.forEach((recipe) => {
      list.add(recipe.appliance.toLowerCase());
    });

    return list;
  }

  // Filter: devices in recipes with selected device dropdown
  filter(recipes) {
    if (this.selected.size === 0) {
      return recipes;
    }

    return recipes.filter((recipe) => !!this.selected.has(recipe.appliance.toLowerCase()));
  }
}
