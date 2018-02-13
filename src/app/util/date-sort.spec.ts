import { dateSorted } from './date-sort';

describe('dateSorted', () => {
  const d = new Date();
  const unsortedObjects = [-200, 300, 80, -100].map(ms => new Date(d.getTime() + ms))
    .map(date => Object.assign({}, { date }));

  it('returns objects sorted by their date field', () => {
    const sorted = dateSorted(unsortedObjects);
    const inPairs = sorted.reduce((acc, el, index) =>
      index === 0 ? acc : [...acc, [sorted[index - 1], sorted[index]]], []
    );

    inPairs.map(([a, b]) => expect(a.date >= b.date).toEqual(true));
  });

});
