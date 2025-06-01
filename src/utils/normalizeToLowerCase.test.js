import normalizeToLowerCase from './normalizeToLowerCase';
import { describe, it, expect } from 'vitest';

describe('normailzeCase', () => {
  it('should convert the string to lowercase', () => {
    expect(normalizeToLowerCase('1234-ABCD')).toEqual('1234-abcd');
  });
});
