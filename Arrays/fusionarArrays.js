const animals = ['π΄', 'π¦', 'π', 'π°', 'π'];

const newAnimals = ['π¦', 'π±', 'πΆ', 'π '];


//con el spread operator

const farm = [
    ...animals,
    ...newAnimals
]
console.table(farm);

//mΓ©todo concat

const farm2 = animals.concat(newAnimals);
console.log(farm2);

//mutar el array original
const farm3 = animals.push(...newAnimals);
console.log(animals);