const statusSelect = document.querySelector('.status-select');
const positionSelect = document.querySelector('.position-select');
const adressSelect = document.querySelector('.adress-select');
const studentAdressSelect = document.querySelector('.student-adress-select');
const studentStatusSelect = document.querySelector('.student-status-select');
const studentPositionSelect = document.querySelector('.student-position-select');
const studentForm = document.querySelector('.student-form');
const studentsRow = document.querySelector('.students-row');
const studentModal = document.querySelector('.modal');
const saveStudent = document.querySelector('.save-student');
const addStudent = document.querySelector('.add-student');

let status = "";


const all = ` <option selected>All</option>`;
let selectedStudent = null;

statusSelect.innerHTML = all;
positionSelect.innerHTML = all;
adressSelect.innerHTML = all;

STATUS.map(el =>{
    statusSelect.innerHTML += `<option value="${el}">${el}</option>`;
});

STATUS.map(el =>{
    studentStatusSelect.innerHTML += `<option value="${el}">${el}</option>`;
});

POSITION.map(el =>{
    positionSelect.innerHTML += `<option value="${el}">${el}</option>`;
});

POSITION.map(el =>{
    studentPositionSelect.innerHTML += `<option value="${el}">${el}</option>`;
});

ADRESS.map(el =>{
    adressSelect.innerHTML += `<option value="${el}">${el}</option>`;
});
ADRESS.map(el =>{
    studentAdressSelect.innerHTML += `<option value="${el}">${el}</option>`;
});


function getStudent({firstName, lastName, adress, date, status, position, salary, married}, i){
    return`
        <tr class="students-row">
            <th scope="row">${i + 1}</th>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${adress}</td>
            <td>${date}</td>
            <td>${status}</td>
            <td>${position}</td>
            <td>${salary} $</td>
            <td>${married ? "ha" : "yo'q"}</td>
            <td class="text-end">
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = "editStudent(${i})">Edit</button>
                <button class="btn btn-danger" onclick = "deleteStudent(${i})">Delete</button>
            </td>
        </tr>
    `
}
function getStudenrRow(){
    studentsRow.innerHTML = "";
    students.map((el, i) =>{
        studentsRow.innerHTML += getStudent(el, i);
    })
}


getStudenrRow();

studentForm.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = studentForm.elements.FirstName.value;
    const lastName = studentForm.elements.LastName.value;
    const adress = studentForm.elements.adress.value;
    const date = studentForm.elements.date.value;
    const status = studentForm.elements.status.value;
    const position = studentForm.elements.position.value;
    const salary = studentForm.elements.number.value;
    const married = studentForm.elements.checkbox.checked;

    const student = {
        firstName,
        lastName,
        adress,
        date,
        status,
        position,
        salary,
        married
    }
    
    if(this.checkValidity()){
        bootstrap.Modal.getInstance(studentModal).hide();
        if(selectedStudent === null){
            students.push(student);
        }else{
            students [selectedStudent] = student;
        }
        localStorage.setItem(STUDENTS, JSON.stringify(students));
        getStudenrRow();
    }else{
        this.classList.add('was-validated')
    }
    this.reset();
});

function deleteStudent(i){
    const checkDelete = window.confirm(`O'chirishni xohlaysizmi ?`);
    if(checkDelete){
        students.splice(i, 1);
        getStudenrRow();
        localStorage.setItem(STUDENTS, JSON.stringify(students));
    }
}

function editStudent(i){
    const {firstName, lastName, adress, date, status, position, salary, married} = students [i];
    studentForm.elements.FirstName.value = firstName;
    studentForm.elements.LastName.value = lastName;
    studentForm.elements.adress.value = adress;
    studentForm.elements.date.value = date;
    studentForm.elements.status.value = status;
    studentForm.elements.position.value = position;
    studentForm.elements.number.value = salary;
    studentForm.elements.checkbox.checked = married;

    selectedStudent = i;
    saveStudent.innerHTML = "Save"
}

addStudent.addEventListener('click', () =>{
    selectedStudent = null;
    studentForm.reset();
});

statusSelect.addEventListener('change', function () {
    status = this.value;
    console.log(status);
})