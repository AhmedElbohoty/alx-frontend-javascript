function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];

  const filteredStudents = students.filter(
    (student) => student.location === city,
  );

  const newStudents = filteredStudents.map((student) => {
    const hasGrade = newGrades.find((g) => g.studentId === student.id);
    const grade = hasGrade ? hasGrade.grade : 'N/A';

    return { ...student, grade };
  });

  return newStudents;
}

export default updateStudentGradeByCity;
