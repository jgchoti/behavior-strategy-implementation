import { timeInMilliseconds } from './time-in-milliseconds.js';

for (let solution of [timeInMilliseconds]) {
  describe('timeInMilliseconds', () => {
    it('should correctly convert time to milliseconds', () => {
      expect(solution(0, 0, 0)).toBe(0);
      expect(solution(0, 0, 1)).toBe(1000);
      expect(solution(0, 1, 1)).toBe(61000);
      expect(solution(1, 30, 30)).toBe(5430000);
    });

    it('should handle hours, minutes, and seconds beyond valid ranges', () => {
      // 25 hours, 70 minutes, 70 seconds should roll over to the next day
      expect(solution(25, 70, 70)).toBe(1000000);
    });

    it('should handle negative values', () => {
      // -1 hour, -1 minute, -1 second should roll back to the previous day
      expect(solution(-1, -1, -1)).toBe(86399000);
    });

    it('should handle hours, minutes, and seconds within valid ranges', () => {
      // 23 hours, 59 minutes, 59 seconds should be the maximum time
      expect(solution(23, 59, 59)).toBe(86399000);
    });
  });
}
