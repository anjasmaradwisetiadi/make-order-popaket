import { range } from '~/modules/utils/range';

describe('range', () => {
  test('should generate given ranged array and exact length', () => {
    const oneToTen = range(1, 10);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(oneToTen).toEqual(expected);
    expect(oneToTen.length).toEqual(expected.length);
  });

  test('should generate with exact step and exact length', () => {
    const zeroToTenDoubled = range(0, 10, 2);
    const expected = [0, 2, 4, 6, 8, 10];

    expect(zeroToTenDoubled).toEqual(expected);
    expect(zeroToTenDoubled.length).toEqual(zeroToTenDoubled.length);
  });

  test('should generate with exact offset and exact length', () => {
    const zeroToTenDoubledOffsetMinus = range(0, 10, 2, -2);
    const zeroToTenDoubledOffsetPlus = range(0, 10, 2, 2);
    const expectedMinus = [2, 4, 6, 8];
    const expectedPlus = [-2, 0, 2, 4, 6, 8, 10, 12];

    expect(zeroToTenDoubledOffsetMinus).toEqual(expectedMinus);
    expect(zeroToTenDoubledOffsetMinus.length).toEqual(expectedMinus.length);

    expect(zeroToTenDoubledOffsetPlus).toEqual(expectedPlus);
    expect(zeroToTenDoubledOffsetPlus.length).toEqual(expectedPlus.length);
  });
});
