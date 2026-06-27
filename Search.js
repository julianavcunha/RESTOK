import Roupas from './Class.js';

// 1. Select the input and the PARENT grid container
const searchBar = document.getElementById('search-input');
const searchButton = document.getElementsByClassName('btn');
const gridContainerClass = document.getElementsByClassName('clothes-grid'); 

class SearchManager {
    constructor(dataObjects, containerId) {
        this.dataObjects = dataObjects; // This will hold your 'Roupas' array
        this.container = gridContainerClass; // The target HTML element
        this.searchTerm = '';
    }

    // 2. ONLY updates the value in memory; does not trigger render automatically
    setSearch(term) {
        this.searchTerm = term.toLowerCase().trim();
    }

    // Method to filter the imported array data
    getFilteredRoupas() {
        if (!this.searchTerm) return this.dataObjects;

        return this.dataObjects.filter(roupa => {
            // Adjust these keys ('name', 'category') to match your actual Roupas object keys!
            const matchTamanho = roupa.tamanho?.toLowerCase().includes(this.searchTerm);
            const matchMarca = roupa.marca?.toLowerCase().includes(this.searchTerm);
            const matchPreço = roupa.preço?.toLowerCase().includes(this.searchTerm);
            const matchCor = roupa.cor?.toLowerCase().includes(this.searchTerm); 
            
            return matchTamanho || matchMarca || matchPreço || matchCor;
        });
    }
    
    // 3. This is called explicitly when the button execution runs
    render() {
        const filtered = this.getFilteredRoupas();
        this.container.innerHTML = '';

        if (filtered.length === 0) {
            this.container.innerHTML = `<p class="no-results">Nenhuma roupa encontrada.</p>`;
            return;
        }

        filtered.forEach(roupa => {
            const itemElement = document.createElement('div');
            itemElement.className = 'clothes-grid__item';
            
            itemElement.innerHTML = `
                <img src="${roupa.image || 'placeholder.jpg'}" alt="${roupa.name}">
                <h3>${roupa.name}</h3>
                <p class="price">R$ ${roupa.price?.toFixed(2)}</p>
            `;
            
            this.container.appendChild(itemElement);
        });
    }
}

// 2. Instantiate your class passing your data and the container element ID
const appSearch = new SearchManager(Roupas, gridContainerClass);

// 3. Render all clothes immediately when the page loads
appSearch.render();

// 4. Listen to the search input changes in real-time
searchBar.addEventListener('input', (event) => {
    appSearch.setSearch(event.target.value);
});

// --- Event Listeners ---

// 4. Helper function to capture input values and trigger the search execution
function executeSearch() {
    appSearch.setSearch(searchBar.value);
    appSearch.render();
}

// Trigger search when clicking the button
searchButton.addEventListener('click', executeSearch);

// Trigger search when pressing the "Enter" key while typing in the input box
searchBar.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        executeSearch();
    }
});
