import { uniqueEntries } from './unique-entries.js';


for (let solution of [uniqueEntries]){
  describe('uniqueEntries', () => {
  it('should return an array with unique numbers sorted in ascending order by default', () => {
    expect(solution([3, 1, 3, 2])).toEqual([1, 2, 3]);
    expect(solution([5, 2, 3, 1, 5])).toEqual([1, 2, 3, 5]);
    expect(solution([3, 3, 3, 3])).toEqual([3]);
  });

  it('should return an array with unique numbers sorted in ascending order when "up" flag is true', () => {
    expect(solution([3, 1, 3, 2], true)).toEqual([1, 2, 3]);
    expect(solution([5, 2, 3, 1, 5], true)).toEqual([1, 2, 3, 5]);
    expect(solution([3, 3, 3, 3], true)).toEqual([3]);
  });

  it('should return an array with unique numbers sorted in descending order when "up" flag is false', () => {
    expect(solution([3, 1, 3, 2], false)).toEqual([3, 2, 1]);
    expect(solution([5, 2, 3, 1, 5], false)).toEqual([5, 3, 2, 1]);
    expect(solution([3, 3, 3, 3], false)).toEqual([3]);
  });

  it('should handle empty input', () => {
    expect(solution()).toEqual([]);
    expect(solution([])).toEqual([]);
  });
}
)
}