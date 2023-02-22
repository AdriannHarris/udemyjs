function describeCountry(country, population, capitalCity){
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const descJapan = describeCountry('Japan', '125 million', 'Tokyo' )

const descUnited = describeCountry('United Kingdom', '67 million' , 'London')

const descAustrailia = describeCountry('Austrailia', '25 million', 'Canberra' )

console.log(descJapan, descUnited, descAustrailia)
