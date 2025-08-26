function customReducer(arr, callback, initialValue) {
  let acc;
  let startIndex;

  if (initialValue !== undefined) {
    acc = initialValue;
    startIndex = 0;
  } else {
    if (arr.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }

  return acc;
}
