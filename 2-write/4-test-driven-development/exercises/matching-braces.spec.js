import { matchingBraces } from './matching-braces.js';

for (const solution of [matchingBraces, matchingBraces2]) {
  describe(
    solution.name + 'Checks if the braces in a string are matched.',
    () => {
      it('Returns true for a string with matching parentheses', () => {
        expect(solution('()')).toEqual(true);
      });
      it('Returns true for a string with matching square brackets', () => {
        expect(solution('[]')).toEqual(true);
      });
      it('Returns true for a string with matching curly braces', () => {
        expect(solution('{}')).toEqual(true);
      });
      it('Returns true for a string with nested matching braces', () => {
        expect(solution('{[]}')).toEqual(true);
      });

      it('Returns true for a string with multiple types of matching braces', () => {
        expect(solution('()[]{}')).toEqual(true);
      });
      it('Returns false for a string with mismatched parentheses', () => {
        expect(solution('(]')).toEqual(false);
      });
      it('Returns false for a string with mismatched curly braces', () => {
        expect(solution('{)')).toEqual(false);
      });

      it('Returns false for a string with nested mismatched braces', () => {
        expect(solution('([)]')).toEqual(false);
      });

      it('Returns false for a string with mixed types of mismatched braces', () => {
        expect(solution('({]}')).toEqual(false);
      });

      it('Returns false for a string with additional closing braces', () => {
        expect(solution('()[]{}]')).toEqual(false);
      });

      it('Returns false for a string with additional opening braces', () => {
        expect(solution('[()[]{}')).toEqual(false);
      });

      it('Returns false for an empty string', () => {
        expect(solution('')).toEqual(false);
      });
    },
  );
}
