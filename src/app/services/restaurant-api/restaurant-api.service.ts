import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';
import { RestaurantQuery } from 'app/models/restaurant-query.model';

const BASE_URL = `${environment.apiHost}/restaurants`;

/**
 * An API service responsible for communication with the GrubFinder server
 */
@Injectable()
export class RestaurantApiService {

  constructor(private http: HttpClient) { }

  /**
   * Returns an Observable containing data sent from the server based on a provided RestaurantQuery
   *
   * @param {RestaurantQuery} restaurantQuery
   * @returns {Observable<any>}
   */
  public list(restaurantQuery: RestaurantQuery): Observable<any> {
    return this.http.get(BASE_URL, { params: restaurantQuery.params }).map(response =>
      Object.assign({}, response, {
        append: restaurantQuery.append
      })
    );
  }

  /**
   * Returns descriptions of different food types from the server
   */
  public descriptions(): Observable<any> {
    return this.http.get(`${BASE_URL}/descriptions`);
  }

}
