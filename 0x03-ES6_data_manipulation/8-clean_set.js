function cleanSet(set, startString) {
  if (!startString) return '';
  let result = [];

  set.forEach((value) => {
    if (!value.startsWith(startString)) return;
    result.push(value.substring(startString.length));
  });

  return result.join('-');
}

export default cleanSet;