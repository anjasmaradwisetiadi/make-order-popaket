import { transform } from '~/modules/utils/transform';

describe('transform', () => {
  test('should transform object', () => {
    const origin = {
      foo: 'bar',
      baz: 'foobar',
    };

    const expected = {
      foo: {
        0: 'bar',
      },
      baz: {
        0: 'foobar',
      },
    };

    const subject = transform(origin, (obj, key) => ({
      ...obj,
      [key]: {
        0: origin[key],
      },
    }));

    expect(subject).toEqual(expected);
  });
});
