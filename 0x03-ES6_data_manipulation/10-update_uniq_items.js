function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of items.entries()) {
    if (quantity === 1) {
      items.set(item, 100);
    }
  }
}

export default updateUniqueItems;
