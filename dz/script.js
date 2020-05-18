class Student {
    constructor(params) {
        this.fullName = params.fullName,
        this.university = params.university,
        this.course = params.course,
        this.birthDate = params.birthDate,
        this.photoUrl = params.photoUrl;
    }
    get birthDateStr() {
        return '${this.birthDate}';
    }

    get age() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthDate;
    }
  
}

const studentArr = [
   {
       fullName: 'Антон Шарапов',
       university: 'БФУ',
       course: 5,
       birthDate: new Date(2000, 1, 1),
       photoUrl: '/ava01.jpg'
   },
   {
        fullName: 'Максимова Юлия',
        university: 'УГАТУ',
        course: 6,
        birthDate: new Date(2000, 2, 1),
        photoUrl: '/ava02.jpg'
   },
   {
        fullName: 'Павлова Евгения',
        university: 'МГУ',
        course: 4,
        birthDate: new Date(2000, 3, 1),
        photoUrl: '/ava03.jpg'
   },
   {
        fullName: 'Каренин Александр',
        university: 'УГАТУ',
        course: 3,
        birthDate: new Date(2000, 3, 1),
        photoUrl: '/ava04.jpg'
    },
    {
        fullName: 'Маша Иванова',
        university: 'УГАТУ',
        course: 5,
        birthDate: new Date(2000, 3, 1),
        photoUrl: '/ava05.jpg'
    },
    {
        fullName: 'Максим Мищенко',
        university: 'БФУ',
        course: 3,
        birthDate: new Date(2000, 3, 1),
        photoUrl: '/ava06.jpg'
    }
];

const list = document.getElementById('list')

appendStudentBlock = (student) => {
    let newDiv = document.createElement('span')
    newDiv.innerHTML = `<div class="card_persons">
                    <img src='./img${student.photoUrl}' alt='Аватар Максимова-Наливайко Юлия' />
                    <p title=${student.fullName}>${student.fullName}</p>
                    <span title=${student.university}>${student.university}</span>
                    <span title=${student.course}>${student.course}</span>
                </div>`;
    newDiv.addEventListener('click', (event) => {
        openCard(student, event)
    })
    list.appendChild(newDiv)
}


openCard = (student, event) => {
    let currentTarget = event.currentTarget;
    let newDiv = document.createElement('span')
    newDiv.innerHTML = `<div id="opencard">
                    <button onClick="closeButton(event)">X</button>
                    <p title=${student.fullName}>${student.fullName}
                    <span title=${student.university}>Вуз: ${student.university}</span>
                    <span title=${student.course}>Курс: ${student.course}</span>
                    </p>
                    <img src='./img${student.photoUrl}' alt='Аватар Максимова-Наливайко Юлия' />
                    
                </div>`;

    currentTarget.appendChild(newDiv)
}

studentArr.forEach((item) => {
    const student = new Student(item);
    appendStudentBlock(student);
});


closeButton = (event) => {
    event.target.remove();
}
