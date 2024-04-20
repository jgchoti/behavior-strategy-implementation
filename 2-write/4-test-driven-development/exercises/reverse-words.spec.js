import { reverseWords } from './reverse-words.js';

for (let solution of [reverseWords]) {
  describe('reverseWords', () => {
    it('should reverse each word in a string', () => {
      expect(solution('hello')).toEqual('olleh');
    });
    it('should reverse each word in a string', () => {
      expect(solution('hello world!')).toEqual('olleh !dlrow');
    });
    it('should reverse each word in a string', () => {
      expect(solution('123 456')).toEqual('321 654');
    });

    it('should handle empty input', () => {
      expect(solution()).toEqual('');
    });
    it('should handle empty input', () => {
      expect(solution('')).toEqual('');
    });
  });
}
