class father{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class child extends father{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + "  " + this.fatherName;
    }
}
const baby = new child("Arnold");
const baby2 = new child("Tom");
console.log(baby.getFullName());
console.log(baby2);