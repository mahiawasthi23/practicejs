const countryList = document.getElementById('country-list');
const searchInput = document.getElementById('search');
const suggestions = document.getElementById('suggestions');
const loadMoreButton = document.getElementById('load-more');
const favoritesList = document.getElementById('favorite-list');
const languageFilter = document.getElementById('language-filter');
const regionFilter = document.getElementById('region-filter');
const countryDetails = document.getElementById('country-details');

let currentPage = 1;
const pageSize = 10;
let countries = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let filteredCountries = []; // New variable to hold filtered countries

// Fetch countries from API
async function fetchCountries() {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    countries = await response.json();
    populateLanguageFilter();
    filteredCountries = countries; // Initialize filtered countries
    displayCountries(currentPage); // Display countries on initial load
}

// Populate language filter dropdown
function populateLanguageFilter() {
    const languages = new Set();
    countries.forEach(country => {
        if (country.languages) {
            Object.values(country.languages).forEach(lang => languages.add(lang));
        }
    });
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.innerText = lang;
        languageFilter.appendChild(option);
    });
}

// Display countries in cards with optional filtered list
function displayCountries(page, countriesToDisplay = filteredCountries) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCountries = countriesToDisplay.slice(startIndex, endIndex);

    paginatedCountries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'country-card';
        const isFavorite = favorites.includes(country.name.common);
        card.innerHTML = `
            <img src="${country.flags.png}" alt="${country.name.common} flag" />
            <h3>${country.name.common}</h3>
            <button class="favorite-icon" onclick="toggleFavorite('${country.name.common}', this.querySelector('i'))">
                <i class="fas fa-heart" style="color: ${isFavorite ? 'red' : 'white'};" data-country="${country.name.common}"></i>
                Add to Favrite
            </button>
        `;
        card.onclick = () => showDetails(country);
        countryList.appendChild(card);
    });

    loadMoreButton.style.display = endIndex >= countriesToDisplay.length ? 'none' : 'block';
}

// Show details of a selected country
function showDetails(country) {
    countryDetails.innerHTML = `
        <div>
            <h2>${country.name.common}</h2>
            <p><strong>Top Level Domain:</strong> ${country.tld ? country.tld[0] : 'N/A'}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Population:</strong> ${country.population}</p>
            <p><strong>Area:</strong> ${country.area} km²</p>
            <p><strong>Languages:</strong> ${Object.values(country.languages || {}).join(', ')}</p>
            <button onclick="goBack()">Back</button>
        </div>
    `;
    countryDetails.style.display = 'block';
}

function goBack() {
    countryDetails.style.display = 'none';
}

// Apply filters and display results
function applyFiltersAndDisplay() {
    const query = searchInput.value.toLowerCase();
    const selectedLanguage = languageFilter.value;
    const selectedRegion = regionFilter.value;

    // Start with all countries
    filteredCountries = countries;

    // Apply search filter to show countries that start with the query
    if (query) {
        filteredCountries = filteredCountries.filter(country =>
            country.name.common.toLowerCase().startsWith(query)
        );
    }

    // Apply one of the filters (language or region) if selected
    if (selectedLanguage) {
        filteredCountries = filteredCountries.filter(country =>
            country.languages && Object.values(country.languages).includes(selectedLanguage)
        );
        regionFilter.value = ""; // Clear the region filter if language is selected
    } else if (selectedRegion) {
        filteredCountries = filteredCountries.filter(country => country.region === selectedRegion);
        languageFilter.value = ""; // Clear the language filter if region is selected
    }

    // Clear the existing display if it's the first page load or when filters are changed
    currentPage = 1; // Reset to the first page
    countryList.innerHTML = ''; // Clear previous countries
    displayCountries(currentPage, filteredCountries); // Display first page of filtered countries
}

// Show suggestions dropdown based on search input
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    if (!query) {
        suggestions.innerHTML = '';
        return;
    }
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().startsWith(query)
    ).slice(0, 5); // Limit to 5 suggestions

    suggestions.innerHTML = filteredCountries.map(country => `
        <div class="suggestion-item" onclick="showAllMatchingCountries('${query}')">
            ${country.name.common}
        </div>
    `).join('');

    if (filteredCountries.length > 0) {
        suggestions.innerHTML += `<div class="suggestion-item view-all" onclick="showAllMatchingCountries('${query}')">
            View all results for "${query}"
        </div>`;
    }
});

// Show all matching countries when "View All" is clicked or if a specific country is clicked
function showAllMatchingCountries(query) {
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().startsWith(query)
    );
    countryList.innerHTML = ''; // Clear the list for new query results
    displayCountries(1, filteredCountries);
    currentPage = 1;
    suggestions.innerHTML = ''; // Clear suggestions
}

// Toggle favorite countries
function toggleFavorite(countryName, iconElement = null) {
    // Add or remove the country from favorites
    if (favorites.includes(countryName)) {
        favorites = favorites.filter(fav => fav !== countryName);
        if (iconElement) iconElement.style.color = 'white';
    } else {
        if(favorites.length >= 5) {
            alert("You can only add up to 5 favorite countries.");
            return;
        }
        favorites.push(countryName);
        if (iconElement) iconElement.style.color = 'red';
    }

    // Update favorites in local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesList(); // Refresh the favorites list display
    updateCardFavoriteIcon(countryName); // Update the card section heart icon color
}

// Update the color of the heart icon in the main card section
function updateCardFavoriteIcon(countryName) {
    const icons = document.querySelectorAll(`.country-card .fas.fa-heart[data-country="${countryName}"]`);
    icons.forEach(icon => {
        icon.style.color = favorites.includes(countryName) ? 'red' : 'white';
    });
}

// Update the favorites list display
function updateFavoritesList() {
    favoritesList.innerHTML = ''; // Clear the current favorites list
    favorites.forEach(countryName => {
        const country = countries.find(c => c.name.common === countryName);
        if (country) {
            const card = document.createElement('div');
            card.className = 'country-card';
            card.innerHTML = `
                <img src="${country.flags.png}" alt="${country.name.common} flag" />
                <h3>${country.name.common}</h3>
                <button class="favorite-icon" onclick="toggleFavorite('${country.name.common}', this.querySelector('i'))">
                    <i class="fas fa-heart" style="color: red;" data-country="${country.name.common}"></i>
                </button>
            `;
            // Click to show country details
            card.onclick = () => showDetails(country);

            // Remove from favorites button
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Remove';
            removeButton.onclick = (event) => {
                event.stopPropagation(); // Prevent triggering the card click
                toggleFavorite(countryName); // Call toggleFavorite to remove
                updateFavoritesList(); // Refresh the list
            };

            card.appendChild(removeButton);
            favoritesList.appendChild(card);
        }
    });
}

// Load more countries
loadMoreButton.addEventListener('click', () => {
    currentPage++;
    displayCountries(currentPage, filteredCountries); // Ensure we display the next page of filtered countries
});

// Event listeners for filters and search
searchInput.addEventListener('input', applyFiltersAndDisplay);
languageFilter.addEventListener('change', applyFiltersAndDisplay);
regionFilter.addEventListener('change', applyFiltersAndDisplay);

// Initial fetch
fetchCountries();
