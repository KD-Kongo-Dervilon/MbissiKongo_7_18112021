class FilterByAppliance extends Filters {

    constructor() {
        super('appliance');
    }

    // Recovers device data collection
    collect(recipes) {

        let list = new Set();

        recipes.forEach(recipe => {
            list.add(recipe.appliance.toLowerCase());
        });

        return list;
    }

    // Filter: devices in recipes with selected device dropdown
    filter(recipes) {

        if (this.selected.size === 0) {
            return recipes;
        }

        return recipes.filter(recipe => {
                return !!this.selected.has(recipe.appliance.toLowerCase());
            })
    }
}