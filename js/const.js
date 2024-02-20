const STATUS = ['React.js', 'Vue.js', 'Angular.js', 'Node.js', 'Electron.js'];
const POSITION = ['Junior', 'Middle', 'Senior', 'TeamLead'];
const ADRESS = ['Tashkent', 'Samarkand', 'Bukhara', 'Jizzakh', 'Qarshi', 'Navoiy', 'Fergana', 'Andijan'];
const STUDENTS = 'students';
const studentsJson = localStorage.getItem(STUDENTS);
const students = JSON.parse(studentsJson) || [
    {
        firstName: 'Anvar',
        lastName: 'Xidiraliyev',
        adress: 'Tashkent',
        date: '01-01-2024',
        status: 'React',
        position: 'junior',
        salary: 300,
        married: false
    },
    {
        firstName: 'Muhammaddiyor',
        lastName: 'Odiljonov',
        adress: 'Andijan',
        date: '01-01-2024',
        status: 'React',
        position: 'junior',
        salary: 300,
        married: false
    }
]