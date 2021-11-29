class FilterByUstensils extends Filters {

    constructor() {
        super('ustensils');
    }

    // Recovers utensils data collection
    collect(recipes) {

        let list = new Set();

        recipes.forEach(recipe => {
            recipe.ustensils.forEach(ust => {
                list.add(ust);
            })
        });
        return list;
    }

    // Filter: appliances in recipes with the selected utensil dropdown
    filter(recipes) {
        
        return recipes.filter(recipe =>  {

            let isSelectable = false;
            let count = 0;

            this.selected.forEach(ust => {
                if(recipe.ustensils.includes(ust)){
                    count++
                }  
            })

            if(count == this.selected.size){
                isSelectable = true;
            }
            return isSelectable;
        })  
    }
}