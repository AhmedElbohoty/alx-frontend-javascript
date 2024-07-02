function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];

  const filteredStudents = students.filter(
    (student) => student.location === city,
  );

  const newStudents = filteredStudents.map((student) => {
    const grade =
      newGrades.find((g) => g.studentId === student.id)?.grade || 'N/A';

    student.grade = grade;

    return student;
  });

  return newStudents;
}

export default updateStudentGradeByCity;
