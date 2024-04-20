import { sortDigits, sortDigits2} from './sort-digits.js';


for (let solution of [sortDigits, sortDigits2]) {
  describe('sortDigits', () => {
  it('should sort the digits of a number in ascending order by default', () => {
    expect(solution(2321)).toBe(1223);
    expect(solution(987654321)).toBe(123456789);
    expect(solution(111111)).toBe(111111);
  });

  it('should sort the digits of a number in ascending order when "up" flag is true', () => {
    expect(solution(2321, true)).toBe(1223);
    expect(solution(987654321, true)).toBe(123456789);
    expect(solution(111111, true)).toBe(111111);
  });

  it('should sort the digits of a number in descending order when "up" flag is false', () => {
    expect(solution(2321, false)).toBe(3221);
    expect(solution(987654321, false)).toBe(987654321);
    expect(solution(111111, false)).toBe(111111);
  });
});
}