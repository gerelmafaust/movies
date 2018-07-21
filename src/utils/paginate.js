export function paginate(allItems, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  return allItems.slice(startIndex, pageSize);

  // const [head, ...tail] = items.slice(startIndex);

  // console.log(Object.values(tail));

  // var array = [1, 2, 3, 4]
  // console.log(_.slice(array, 1, 3))
  // // output: [2, 3]

  // var array = [1, 2, 3, 4]
  // console.log(array.slice(1, 3));
  // // output: [2, 3]
}
