import { GRADES } from 'app/constants/grade.constants';

/**
 * Represents statistics pertaining to Restaurants for a provided query
 */
export class RestaurantStats {

  public total: number;
  public grades: any;
  public descriptions: any;

  constructor(json: any) {
    this.total = json.total;
    this.grades = json.grades;
    this.descriptions = json.descriptions;
  }

  /**
   * Converts grades array into format
   * {
   *   name: 'A',
   *   value: 123
   * }
   * to be consumed by ngx-charts-pie-chart
   * @returns {Array<any>}
   */
  public get pieChartData(): Array<any> {
    return Object.keys(GRADES).reduce((acc, grade) => {
      return [...acc, { name: grade, value: this.grades[grade] ? this.grades[grade].total : 0}]
    }, []);
  }

}
