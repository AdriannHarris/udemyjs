let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBmi = markMass / (markHeight * markHeight);
console.log(markBmi)
let johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi)
var largerBmi = markBmi > johnBmi
console.log(largerBmi)

let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;
let markBmi2 = markMass2 / (markHeight2 * markHeight2);
console.log(markBmi2)
let johnBmi2 = johnMass2 / (markHeight2 * markHeight2);
console.log(johnBmi2)
console.log(markBmi2, johnBmi2)
console.log(markBmi, johnBmi)


if (markBmi2 > johnBmi2) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`)
} else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${$markBMi})!`)
}


