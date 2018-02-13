import { HttpParams } from '@angular/common/http';

export const PAGE_SIZE = 50;

/**
 * Represents a query to be sent to GrubFinder server
 */
export class RestaurantQuery {

  public text: string;
  public grades: Array<string>;
  public descriptions: Array<string>;
  public skip = 0;

  constructor(json: any) {
    this.text = json.text;
    this.grades = json.grades ? json.grades : [];
    this.descriptions = json.descriptions ? json.descriptions : [];
    this.skip = json.skip !== undefined ? json.skip : 0;
  }

  /**
   * Returns a duplicate of the current query, with its skip value increased by limit
   */
  public paginate(): RestaurantQuery {
    return new RestaurantQuery(Object.assign({}, this, {
      skip: this.skip + PAGE_SIZE
    }));
  }

  /**
   * Returns a duplicate of the current query, with its skip value reset to 0
   */
  public reset(): RestaurantQuery {
    return new RestaurantQuery(Object.assign({}, this, {
      skip: 0
    }));
  }

  /**
   * Returns true if the RestaurantQuery should append its results to the UI (e.g., if its skip
   * value is non-negative)
   */
  public get append(): boolean {
    return this.skip !== 0;
  }


  /**
   * Serializes the RestaurantQuery into HttpParams
   * @returns {HttpParams}
   */
  public get params(): HttpParams {
    return new HttpParams()
      .append('descriptions', this.descriptions.join(','))
      .append('grades', this.grades.join(','))
      .append('skip', this.skip.toString())
      .append('limit', PAGE_SIZE.toString());
  }

}
