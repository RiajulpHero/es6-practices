class Student{
    constructor(sId, sName){
        this.Id = sId;
        this.Name = sName;
        this.School = "Kolimunnesa High School."
    }
}
const student1 = new Student(11, "Labib");
const student2 = new Student(17, "Habiba");
console.log(student1, student2);
console.log(student2.Name);
console.log(student1.Id);