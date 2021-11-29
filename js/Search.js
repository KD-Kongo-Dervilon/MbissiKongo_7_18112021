class Search {

    constructor(recipes) {
        this.searchValue = '';
        this.renderMessage();
    }

    // Message disappears 
    hideMessage() {
        document.getElementById('message').style.display = 'none';
        document.getElementById('recipes').style.display = 'flex';
    }

    // Listener on Input search
    listen() {

        document.getElementById('searchBar').addEventListener('input', (e) => {

            list.filtered = list.all;
            this.searchValue = e.target.value.toLowerCase();

            if(this.searchValue.length >= 3) {
                this.hideMessage()
                list.filtered = this.search();
            } 

            list.build(list.filtered)

            if(list.filtered.length === 0) {
                this.showMessage();
            }

            if(this.searchValue == '') {
                list.filtered = list.all;
                this.hideMessage();
            } 
        })
    }

    // Construction of the Html Message
    renderMessage() {

        document.getElementById('message').innerHTML +=
        `
            <h2>Aucune recette ne correspond à votre critère...</h2>
            <p>Vous pouvez chercher d'autres mots-clés comme «<span>tarte aux pommes</span>», «<span>poisson</span>», <br />ou découvrez de nouvelles recettes à l'aide de nos
                <span>filtres de recherche</span>.
            </p>
            <img src="img/sad.jpg" alt="Enfant triste à table qui ne veut pas manger ses légumes.">
        `
    }

    // Parameter of the search by character string
    search() {

        let items = [];

        list.filtered.forEach(recipe => {

            //search term in the title
            if(recipe.name.toLowerCase().indexOf(this.searchValue) >= 0) {
                items.push(recipe);
                return; 
            }

            //search term in utensils
            recipe.ustensils.forEach(ustensil => {
                if(ustensil.indexOf(this.searchValue) >= 0) {
                    items.push(recipe);
                    return;
                }
            })

            //search term in device
            if(recipe.appliance.toLowerCase().indexOf(this.searchValue) >= 0) {
                items.push(recipe);
                return; 
            }
            
            //search term in description
            if(recipe.description.indexOf(this.searchValue) >= 0) {
                items.push(recipe);
                return; 
            }
        
        
            // search term in ingredients
            recipe.ingredients.forEach(ingredient => {
                
                if(ingredient.ingredient.indexOf(this.searchValue) >= 0) {
                    items.push(recipe);
                    return;
                }
            })
        })
        return items;
    }

    // Message is displayed
    showMessage() {
        document.getElementById('message').style.display = 'flex';
        document.getElementById('recipes').style.display = 'none';
    }
}