const select = document.getElementById('countrySelect');
const display = document.getElementById('display');

async function getCountry(name) {
    // 1. Show Loading Message
    display.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        
        if (!response.ok) throw new Error("Could not find country");

        const data = await response.json();
        const country = data[0]; // Get the first result

        // 2. Render to Page
        display.innerHTML = `
            <div class="info">
                <h3>${country.name.common}</h3>
                <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <p><strong>Borders:</strong> ${country.borders ? country.borders.join(', ') : 'N/A'}</p>
                <p><strong>Currencies:</strong> ${country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
            </div>
            <img src="${country.flags.svg}" alt="Flag">
        `;

    } catch (error) {
        // 3. Show Error Message
        display.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}

// Fetch Bhutan by default on load
getCountry('bhutan');

// Refetch when dropdown changes
select.addEventListener('change', (e) => {
    getCountry(e.target.value);
});