const populations = [14, 1223, 363, 75];
const percentages2 = [];
for (let i = 0; i < populations.length; i++){
    const perc = percentagesOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);