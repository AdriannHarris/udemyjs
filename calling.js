const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} people, which is about ${percentage}% of the world`;
    console.log(description)
}

describePopulation('Japan', 14)
describePopulation('UK', 1223)
describePopulation('Austrailia', 363)