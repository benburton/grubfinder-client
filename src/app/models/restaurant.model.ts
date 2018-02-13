import { dateSorted } from 'app/util/date-sort';

import { Grade } from './grade.model';
import { Inspection } from './inspection.model';
import { Violation } from './violation.model';

/**
 * Represents a Restaurant
 */
export class Restaurant {

  public camis: string;
  public doingBusinessAs: string;
  public grades: Array<Grade> = [];
  public inspections: Array<Inspection> = [];

  constructor(json: any) {
    this.camis = json.camis;
    this.doingBusinessAs = json.doingBusinessAs;
    this.grades = json.grades.map(g => new Grade(g));
    this.inspections = dateSorted(json.inspections.map(i => new Inspection(i)));
  }

  /**
   * Returns true if two Restuarants are equivalient (i.e., if their camis ID is equivalent)
   * @param {Restaurant} that
   * @returns {boolean}
   */
  public equals(that: Restaurant): boolean {
    return !!that && this.camis === that.camis;
  }

  /**
   * Returns the most recent Grade for the Restaurant
   */
  public get grade(): Grade {
    const recentGrade = dateSorted(this.grades)[0];
    return recentGrade ? recentGrade : Grade.empty;
  }

  /**
   * Returns an Array of Violations corresponding to the most recent inspection
   *
   * @returns {Array<Violation>}
   */
  public get violations(): Array<Violation> {
    return this.latestInspection ? this.latestInspection.violations : [];
  }

  /**
   * Returns thee most recent inspection for the Restaurant
   *
   * @returns {Inspection}
   */
  public get latestInspection(): Inspection {
    return dateSorted(this.inspections)[0];
  }
}
