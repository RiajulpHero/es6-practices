const ages = [12, 13, 14, 17];
const ages2 = [34, 45, 12, 16];
const ages3 = [23, 56, 67];
const agesAll = ages.concat(ages2).concat([11]).concat(ages3);
const agesAll2 = [...ages, ...ages2, 11, ...ages3];
console.log(agesAll2);


//Find max value:::
const business = 450;
const minister = 300;
const secretary = 340;
const maximum = Math.max(business, minister, secretary);
console.log(maximum);

//Find max from an array:::
const takaPoisa = [450, 300, 340];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);