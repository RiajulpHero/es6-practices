const hubby = "Elias Kanchon";
// hubby = "Omar Sunny";
console.log(hubby);

const numbers = [45, 47];
numbers[1] = 85;
numbers.push(34);
// numbers = ['Omar sunny', 'Hasan', 'Karim'];
console.log(numbers);

const nayok = {name : 'Shakib Khan', phone : 3449}
nayok['name'] ='Salman Khan';
nayok.name = 'Jhankar Mahbub';
nayok.height = 6 + 'ft';
nayok.language = 'Bangla' +' '+ 'and' +' '+ 'English'
nayok.Gender = 'Male';

nayok['movie name'] = 'dui duniya';  // property name with a space

delete nayok.Gender;
delete nayok.language;

console.log(nayok);


let patientName = 'Rahim Cha Cha';
patientName = 'Fatema khala';
patientName = 'Karim khalu';
patientName = 'Mousumi apu';
console.log(patientName);

let sum = 0;
for (let i = 0; i < 10; i++) {    //let is never leak that means console.log can't be placed outside
      sum = sum + i;
      console.log(i);     
}

summ = 0;
for (var i = 0; i < 45; i++) {
      summ = summ + i;
           
}
console.log(i);