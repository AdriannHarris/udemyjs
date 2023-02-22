const listOfNeighbors = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbors.length; i++)
for (let x = 0; x < listOfNeighbors[i].length; x++)
console.log(`Neighbor: ${listOfNeighbors[i][x]}`);