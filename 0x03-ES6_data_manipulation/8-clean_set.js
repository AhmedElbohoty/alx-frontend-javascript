function cleanSet(set, startString) {
  if (!startString) return '';
  const result = [];

  set.forEach((value) => {
    if (!value.startsWith(startString)) return;
    result.push(value.substring(startString.length));
  });

  return result.join('-');
}

export default cleanSet;
