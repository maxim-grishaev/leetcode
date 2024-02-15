import { sherlockAndAnagrams } from "./sher";

describe('hkr sherlock', () => {
  it('test case 0', () => {
    expect(sherlockAndAnagrams('abba')).toBe(4);
  });

  it('test case 1', () => {
    expect(sherlockAndAnagrams('abcd')).toBe(0);
  });

  it('test case 2', () => {
    expect(sherlockAndAnagrams('ifailuhkqq')).toBe(3);
  });

  it('test case 3', () => {
    expect(sherlockAndAnagrams('kkkk')).toBe(10);
  });

  it('test case 4', () => {
    expect(sherlockAndAnagrams('cdcd')).toBe(5);
  });
});
