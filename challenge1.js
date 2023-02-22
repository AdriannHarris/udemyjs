// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

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
var largerBmi2 = markBmi2 > johnBmi2
console.log(largerBmi2)

// or you could keep the names the same a decompress the code
// and do console.log(markBmi, johnBmi,largerBMi)
// and it would return your values but when you do the second set of data
// comment the first set out