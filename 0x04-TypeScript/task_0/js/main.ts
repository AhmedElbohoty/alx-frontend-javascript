interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Ahmed',
  lastName: 'Elbohoty',
  age: 30,
  location: 'Egypt',
};

const student2: Student = {
  firstName: 'Hossam',
  lastName: 'Elbohoty',
  age: 20,
  location: 'Egypt',
};

const studentsList: Student[] = [student1, student2];

const renderTable = (students: Student[]) => {
  const table = document.createElement('table');

  students.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  document.body.appendChild(table); // Append the table to the body
};

renderTable(studentsList);
