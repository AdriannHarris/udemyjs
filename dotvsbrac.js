const myCountry = {
    country: 'France',
    capital: 'Paris',
    language: 'french',
    population: 67,
    neighbors: ['Germany', 'Italy', 'Belguim']
}

console.log(
    `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);