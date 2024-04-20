import { evenOrOdd } from './even-or-odd.js';

for (const solution of [evenOrOdd]) 
{ describe( solution.name + ': Determines if each number in an array is even or odd.', () => {
  it('Returns an empty array if input array is empty', () => {
    expect(solution([])).toEqual([]);
  });

  it('Replaces each number with "even" or "odd"', () => {
    expect(solution([1, 2, 3, 4])).toEqual(['odd', 'even', 'odd', 'even']);
  });

  it('Handles negative numbers correctly', () => {
    expect(solution([-1, -2, -3, -4])).toEqual(['odd', 'even', 'odd', 'even']);
  });

  it('Handles zero correctly', () => {
    expect(solution([0])).toEqual(['even']);
  });



  it('Handles large arrays efficiently', () => {
    const largeArray = Array.from({ length: 10000 }, (_, index) => index);
    const result = evenOrOdd(largeArray);
    expect(result.length).toEqual(10000);
    expect(result[0]).toEqual('even');
    expect(result[1]).toEqual('odd');
  });
});}
