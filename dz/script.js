class Student {
    constructor(params) {
       this.fullName = params.fullName;
       this.university = params.university;
       this.course = params.course;
       this.photoUrl = params.photoUrl;
    }
  
}

const studentArr = [
   {
       fullName: 'Маша Иванова',
       university: 'УГАТУ',
       course: 2,
       birthDate: new Date(2000, 0, 1),
       photoUrl: '/photo1'
   }
];

studentArr.forEach((item) => {
    const student = new Student(item);
    appendStudentBlock(student);
});

let stud = new Student();
document.getElementById("student").addEventListener("click", stud);



studentArr.forEach((item) => {
    const student = new Student(item);
    const studentBlock = appendStudentBlock(student);
    studentBlock.addEventListener('click', (event) => {
        openCard(student, event.currentTarget);
    });
});
