const arrayofnumbers: Array<number> = [1, 2, 3, 4, 5];
const arrayofstrings: Array<string> = ['a', 'b', 'c'];


/**
 * 
 * @type T - generic type
 * @where T extends string - generic type extends string
 */
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}


reverse(arrayofnumbers);
reverse(arrayofstrings);