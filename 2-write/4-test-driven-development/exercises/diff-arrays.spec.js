import { diffArrays } from './diff-arrays.js';

for (const solution of [diffArrays]) 
{ describe( solution.name + ': Returns an array containing only the items that are not in both a and b.', () => {
  it('Returns the first array if the second array is empty', () => {
    expect(solution([1, 8, 2], [])).toEqual([1, 8, 2]);
  });

  it('Returns items that are in the first array but not in the second array', () => {
    expect(solution([1, 2, 3], [1, 2])).toEqual([3]);
  });

  it('Returns items that are in the second array but not in the first array', () => {
    expect(solution([3, 4], [3])).toEqual([4]);
  });

  it('Returns an empty array if both arrays are empty', () => {
    expect(solution([], [])).toEqual([]);
  });

  it('Returns an empty array if both arrays have the same items', () => {
    expect(solution([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  it('Returns items that are unique to each array', () => {
    expect(solution([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('Returns items that are not present in both arrays', () => {
    expect(solution([1, 2, 3, 4], [2, 3, 5])).toEqual([1, 4, 5]);
  });

  it('Works with arrays containing different types of elements', () => {
    expect(solution([1, 'hello', true], ['hello', false])).toEqual([1, true, false]);
  });
});}
