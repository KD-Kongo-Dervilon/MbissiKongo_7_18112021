class List {

    constructor() {
        this.all = [];
        this.filtered = [];
        this.filters = [];
        this.searchValue = '';
        this.selected = [];
    }

    // Add recipes
    add(recipe) {
        this.all.push(recipe)
    }

    // Add filters // for a single action
    addFilter(filter) {

        this.filters.push(filter);
        filter.listenToDropdown();
        filter.listenForInputSearch();
        
        // pass for the first time
        filter.all = filter.collect(this.all);   
        filter.filtered = filter.all;
        filter.build();
        
    }

    // repeat multiple actions
    // when the list is rebuilt
    build(recipes) {
        list.display(recipes)

        // here that the loop is useful
        this.filters.forEach(filter => {
            filter.filtered = filter.collect(recipes);
            filter.build(recipes);
        })
    }

    // Recipes poster 
    display(recipes) {
        document.getElementById('recipes').innerHTML = "";
        recipes.forEach(recipe => {
            document.getElementById('recipes').innerHTML += recipe.render();
        })
    }

    // Enter the data 
    hydrate(recipes) {
        recipes.forEach((item) => {
            let recipe = new Recipe(item);
            this.all.push(recipe);
        })
        this.filtered = this.all;
    }
}