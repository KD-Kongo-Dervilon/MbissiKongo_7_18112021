class Filters {

    constructor(type) {
        this.all = new Set();
        this.filtered = new Set();
        this.selected = new Set();
        this.searchValue = '';
        this.type = type;
        this.renderDropdown();
    }

    // build html 
    build()  {
        this.render();
        this.listenForSelection(); 
        this.listenForUnselect();
    }

    // Dropdown: opening
    closeDropdown(){

        document.querySelector('body').addEventListener('click', (e) => {
            let parent = e.target.closest(`.dropdown-wrapper[data-type="${this.type}"]`)

            if (!parent) {
                document.getElementById(`dropdown-${this.type}`).style.width = "8rem";             
                document.getElementById(`menu-${this.type}`).style.display = "none"; 
            }

            this.searchValue = '';
            document.getElementById(`${this.type}`).value = '';
            this.filtered = this.all;
            let tags = document.querySelectorAll(`.list-${this.type}`);

            tags.forEach((tag) => {
                tag.style.display = "block"; 
            })
            document.getElementById(`${this.type}`).focus();
        });
    }

    // TAGS: displays selected tags
    displayTags() {

        let html = '';

        this.selected.forEach(tag =>  {
            html += `<span class="selected-tag-${this.type} tag" data-filter="${tag}">${tag}
                        <i class="far fa-times-circle closed-${this.type}" role="button"></i>
                    </span>
                    `;
        })
        document.getElementById(`tag-${this.type}`).innerHTML = html;
    }

    // Dropdown Input: Written research 
    filterByInput() {

        let tags = document.querySelectorAll(`.list-${this.type}`);

        tags.forEach((tag) => {

            let name = tag.getAttribute("data-filter");

            if (!name.toLowerCase().includes(this.searchValue.toLowerCase())) {
                tag.style.display = "none";
            
            } else {
                tag.style.display = "block";
            }
        }) 
    }

    // Dropdown Input: Written research
    listenForInputSearch() {
        document.getElementById(`${this.type}`).addEventListener("input", (e) => {
            this.searchValue = e.target.value;
            this.filterByInput();
        })
    }

    // Listener Tags: tag selection
    listenForSelection() {

        document.querySelectorAll(`.list-${this.type}`).forEach(tag => { 
            
            tag.addEventListener('click', (e) => {

                let tag = e.target.getAttribute('data-filter');
                this.selected.add(tag);
                this.displayTags();
                list.filtered = this.filter(list.filtered);
                list.build(list.filtered); 
                
            })
        })
    }

    // Listener Tags: close the tag selected by the cross
    listenForUnselect() {

        document.querySelectorAll(`.closed-${this.type}`).forEach(tag => {

            tag.addEventListener('click', (e) => {

                let tag = e.target.parentNode.getAttribute('data-filter');
                this.selected.delete(tag);
                this.displayTags();

                if(this.selected.size === 0) {
                    list.filtered = list.all;
                    list.build(list.all)

                } else {
                    list.filtered = this.filter(list.all);
                    list.build(list.filtered) 
                }
            })
        })
    } 

    // Dropdown: open / close 
    listenToDropdown() {
        this.openDropdown();
        this.closeDropdown();
    }

    //Dropdown: closing
    openDropdown() {

        document.getElementById(`dropdown-${this.type}`).addEventListener('click', () => {

            document.getElementById(`dropdown-${this.type}`).style.width = "26.5rem";           
            document.getElementById(`menu-${this.type}`).style.display = "block"; 
            document.getElementById(`menu-${this.type}`).style.width= "26.5rem";
        });
    }

    // HTML display: list of data in the dropdown 
    render() {

        let html = `<ul class="listUl-${this.type}"> `;

        this.filtered.forEach((tag)=> {
            html += `<li class="list-${this.type}" data-filter="${tag}">${tag}</li>`
        })

        html += '</ul>'
        document.getElementById(`${this.type}-example`).innerHTML = html;  
    }

    // HTML poster: drop-down lists
    renderDropdown() {

        document.getElementById('filters').innerHTML +=
        `<div class="${this.type} dropdown-wrapper" data-type="${this.type}">
            <button id="dropdown-${this.type}">${this.type} <i class="fas fa-chevron-down" role="button" style="margin-left: 7px"></i></button>
            <div id="menu-${this.type}" class="menu-${this.type}">
                <label for="input-${this.type}"></label>
                <input type="search" class="input-${this.type}" id="${this.type}" aria-label="Search through ingredients" placeholder="Rechercher un ingrédient">
                <div>
                <i class="fas fa-chevron-up" id="${this.type}-close" role="button"></i>
                <div id="${this.type}-example"></div>
            </div>
        </div>`
    }
}