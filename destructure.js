const person = {name : "Jack William", age : 23, job : "facebook", phone : 34879067, gfName : "Emma Watson", address : "kochu khet", friends : ["Tom Hancks", "Tom Cruise", "Tom Yarn"]}

// const gfName = person.gfName;
// const name = person.name;

const {gfName, phone, address, salary, job} = person;
console.log(gfName, phone, salary, job);
console.log(gfName, phone, salary, job);

const friends = ["Shakib Khan", "Salman Khan", "Shahrukh Khan", "Aamir Khan", "Imran Khan"];
const [firstFriend, nxtFriend, ...restFriends] = friends;
console.log(firstFriend, nxtFriend);
console.log(restFriends);

//Nested object
const complexObject = {
    name : "abc",
    info :{
        address : 'Kola bagan',
        leader : 'Lion Khan'
    }
}

const {leader} = complexObject.info;
console.log(leader);


