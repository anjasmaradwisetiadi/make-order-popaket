export const range = (
  start: number,
  end: number,
  step: number = 1,
  offset: number = 0
) => {
  if (!end) {
    end = start;
    start = 0;
  }

  const len = (Math.abs(end - start) + (offset || 0) * 2) / (step || 1) + 1;
  const direction = start < end ? 1 : -1;
  const startingPoint = start - direction * (offset || 0);
  const stepSize = direction * (step || 1);

  return new Array(len).fill(0).map((_, index) => {
    return startingPoint + stepSize * index;
  });
};

export default range;
