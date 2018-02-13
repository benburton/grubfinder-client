/**
 * A function that sorts objects with a 'date' property by the date, in descending order
 */
export function dateSorted(dateables: Array<any>): Array<any> {
  return dateables.slice().sort((a, b) => b.date.getTime() - a.date.getTime());
}
