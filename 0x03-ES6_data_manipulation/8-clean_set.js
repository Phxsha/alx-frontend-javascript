export default function cleanSet(set, startString) {
  // Filter the set to include only values that start with startString
  // Map over these values to remove startString from the beginning of each
  // Join the resulting array into a string with '-' as the separator
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
