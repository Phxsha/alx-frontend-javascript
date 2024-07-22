export default function appendToEachArrayValue(array, appendString) {
  /* eslint-disable no-param-reassign */
  for (const [index, value] of array.entries()) {
    array[index] = appendString + value;
  }

  return array;
}
