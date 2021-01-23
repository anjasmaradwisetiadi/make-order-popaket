export const transform = (
  object: any,
  iteratee: any = (result: any) => {
    return result;
  },
  accumulator = {}
) => {
  return Object.keys(object).reduce(iteratee, accumulator);
};

export default transform;
