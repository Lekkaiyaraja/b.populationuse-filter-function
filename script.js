fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filter countries with population less than 200,000
    const countriesWithLessPopulation = data.filter(country => country.population < 200000);

    // Display the list of countries
    console.log("Countries with population less than 2 lakhs:");
    countriesWithLessPopulation.forEach(country => {
      console.log(country.name.common);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
