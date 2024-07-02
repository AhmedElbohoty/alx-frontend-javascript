function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];

  return students.map((st) => st.id);
}

export default getListStudentIds;
