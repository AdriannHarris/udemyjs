const neighbors = ['Norway', 'Sweden', 'Russia'];

neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')){
    console.log('Probably not a central European country');
}

neighbors[neighbors.indexOf('Sweden')] = 'Republic of Sweden';
console.log(neighbors);