function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  const result = [];

  for (const value of set) {
    const isString = typeof value === 'string';

    if (isString) {
      const isStart = value.startsWith(startString);
      if (isStart) {
        result.push(value.substring(startString.length));
      }
    }
  }

  return result.join('-');
}

export default cleanSet;
