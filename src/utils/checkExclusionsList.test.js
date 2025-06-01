import checkExclusionsList from './checkExclusionsList';
import { describe, it, expect } from 'vitest';

describe('checkExclusionsList', () => {
  it('should return true for valid part numbers not in exclusions list', () => {
    expect(checkExclusionsList('9999-testpartnumber')).toBe(true);
    expect(checkExclusionsList('0000-partNumber2')).toBe(true);
  });
  it('should return an empty array for valid part numbers in exclusions list', () => {
    expect(checkExclusionsList('1234-abcd')).toEqual([]);
    expect(checkExclusionsList('1111-Invoice')).toEqual([]);
  });
});
