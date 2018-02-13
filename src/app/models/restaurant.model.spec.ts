import { Restaurant } from './restaurant.model';
import { Grade } from './grade.model';
import { Inspection } from './inspection.model';
import { GRADES } from '../constants/grade.constants';
import { Violation } from './violation.model';
import { dateSorted } from '../util/date-sort';

describe('Restaurant', () => {

  const camis = 'abcd';
  const doingBusinessAs = 'McDonalds';

  const date = new Date();
  const dates = [100, 400, -100, -400].map(ms => new Date(date.getTime() + ms));

  const unsortedGrades: Array<Grade> = dates.map((d, index) => new Grade({ date: d, grade: Object.keys(GRADES)[index]}));

  const violationCodes = ['A1', 'C3', 'D2', '1F'];

  const unsortedInspections: Array<Inspection> = dates.map((d, index) =>
    new Inspection({ date: d, violations: [new Violation({ code: violationCodes[index]})] })
  );

  const restaurant = new Restaurant({
    camis,
    doingBusinessAs,
    grades: [...unsortedGrades],
    inspections: [...unsortedInspections]
  });

  const [mostRecentInspection, ...others] = dateSorted(unsortedInspections);

  describe('#equals', () => {

    describe('parameter is falsy', () => {
      it('returns false', () => {
        [null, undefined].map(value => {
          expect(restaurant.equals(value)).toEqual(false);
        });
      });
    });

    describe('parameter has a different camis', () => {
      const otherRestaurant = new Restaurant({
        camis: camis.toUpperCase(),
        grades: [...unsortedGrades],
        inspections: [...unsortedInspections]
      });

      it('returns false', () => {
        expect(restaurant.equals(otherRestaurant)).toEqual(false);
      });
    });

    describe('parameter has the same camis', () => {
      const otherRestaurant = new Restaurant({
        camis,
        grades: [], inspections: []
      });

      it('returns true', () => {
        expect(restaurant.equals(otherRestaurant)).toEqual(true);
      });
    });
  });

  describe('#grade', () => {
    const [mostRecentGrade, ...otherGrades] = dateSorted(unsortedGrades);

    it('returns the most recent Grade', () => {
      expect(restaurant.grade).toEqual(mostRecentGrade);
    });
  });

  describe('#violations', () => {
    it('returns violations from the most recent inspection', () => {
      expect(restaurant.violations).toEqual(mostRecentInspection.violations);
    });
  });

  describe('#latestInspection', () => {
    it('returns the most recent inspection', () => {
      expect(restaurant.latestInspection).toEqual(mostRecentInspection);
    });
  });
});
