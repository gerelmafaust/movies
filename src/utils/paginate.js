export function paginate(allItems, pageNumber, pageSize) {
  --pageNumber;
  const pageItems = allItems.slice(
    pageNumber * pageSize,
    (pageNumber + 1) * pageSize
  );
  return pageItems;
}
