function validateName(name) {
  if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }
}

function validateLength(length) {
  if (typeof length !== 'number') {
    throw new TypeError('Length must be a number');
  }
}

function validateStudents(students) {
  const isArray = Array.isArray(students);
  const isEveryString = students.every(
    (student) => typeof student === 'string',
  );

  if (!isArray || !isEveryString) {
    throw new TypeError('Students must be an array of strings');
  }
}
class HolbertonCourse {
  constructor(name, length, students) {
    validateName(name);
    validateLength(length);
    validateStudents(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    validateName(name);
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    validateLength(length);
    this._length = length;
  }

  get students() {
    return this._students;
  }

  // Setter for students with type checking
  set students(students) {
    validateStudents(students);
    this._students = students;
  }
}

export default HolbertonCourse;
