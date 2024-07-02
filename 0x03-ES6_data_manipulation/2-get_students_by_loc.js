export function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];

  return students.filter((st) => st.location === city);
}

export default getStudentsByLocation;
