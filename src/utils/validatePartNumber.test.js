import validatePartNumber from './validatePartNumber';
import { describe, it, expect } from 'vitest';

describe('validatePartNumber', () => {
  it('should return true for valid part numbers', () => {
    expect(validatePartNumber('1234-ABCD')).toBe(true);
    expect(validatePartNumber('5678-XYZ1')).toBe(true);
    expect(validatePartNumber('0000-TEST')).toBe(true);
  });

  // Wrap the call in a function so expect().toThrow() can catch the error
  it('should return false for invalid part numbers', () => {
    expect(() => validatePartNumber('123-ABCD')).toThrow(); // part id too short
    expect(() => validatePartNumber('12345-ABCD')).toThrow(); // part id too long
    expect(() => validatePartNumber('1234-')).toThrow(); // missing part code
    expect(() => validatePartNumber('1234-!@#$')).toThrow(); // invalid characters in part code
    expect(() => validatePartNumber('abcd-1234')).toThrow(); // `part id not 4 digits
    expect(() => validatePartNumber('1234-abc')).toThrow(); // part code too short
  });
});
