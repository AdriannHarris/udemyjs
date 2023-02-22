const myCountry = {
    country: 'France',
    capital: 'Paris',
    language: 'french',
    population: 67 ,
    neighbors: ['Germany', 'Italy', 'Belguim']
}
describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`);

},

checkIsIsland: function (){
    this.isisland = this.neighbors.length === 0 ? true : false;
}

myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry)