 class Student{
    
    constructor(name, age, classOfStudent, gendr){
        this.name = name;
        this.age = age;
        this.classOfStudent = classOfStudent;
        this.gender = gendr;
    }

    changeName(name){
        this.name = name;
    }


    changeAge(age){
        this.age = age;
    }


    changeClassOfStudent(classOfStudent){
        this.classOfStudent = classOfStudent;
    }

    data(){
        return {
            "name" : this.name,
            "age" :this.age,
            "class": this.classOfStudent,
            "gender": this.gender

        }
    }

}

var student1 = new Student("dean",24,"SS3", "Male");
var student2 = new Student("ebere",24,"SS2", "SheMale");
var student3 = new Student("paul",24,"SS1", "Female");
var student4 = new Student("alex",24,"SS3", "Male");
var student5 = new Student("john",24,"JSS2", "Child");
var student6 = new Student("jones",24,"JSS2", "Unknown");

class StudentRecords{
    constructor(){
        this.listOfStudents = {
            "JSS1" : [],
            "JSS2" : [],
            "JSS3" : [],
            "SS1" : [],
            "SS2" : [],
            "SS3" : []
        };

        this.arrayOfClasses =  Object.keys(this.listOfStudents);
    }

    view(){
        return this.listOfStudents;
    }

    add(student){
       
       let found = 0 ;

        for( let cls of this.arrayOfClasses){
            if(cls === student.classOfStudent){
              found = found + 1;
            }
        }

       if(found <= 0) {
           return "Please, add a student with a valid class set";
       }else{
            this.listOfStudents[student.classOfStudent].push(student);
            return "Student added :)";
       }

    }

    changeClass(student, new_class){

        let set = this.listOfStudents[student.classOfStudent];

        this.listOfStudents[student.classOfStudent] =  set.filter((studnt)=>{
            return student !== studnt;
       });

       this.listOfStudents[new_class].push(student);

    }
}

var records = new StudentRecords();

records.add(student1)
records.add(student2)
records.add(student3)

console.log(records.view())

records.changeClass(student1, "SS3")
records.changeClass(student2, "SS3")
records.changeClass(student3, "SS3")
 console.log(records.view())
