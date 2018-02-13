import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material';

import { GRADES } from 'app/constants/grade.constants';
import { RestaurantQuery } from 'app/models/restaurant-query.model';

/**
 * Displays the filters used by the app to modify grades and descriptions
 */
@Component({
  'selector': 'gf-restaurant-filter',
  'template': `
    <div class="restaurant-filter">
      <mat-form-field>
        <mat-select (selectionChange)="gradesChanged($event)" placeholder="Grades" multiple>
          <mat-option *ngFor="let grade of grades" [value]="grade">{{grade}}</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field>
        <mat-select (selectionChange)="descriptionsChanged($event)" placeholder="Cuisine Descriptions" multiple>
          <mat-option *ngFor="let description of descriptions" [value]="description">{{description}}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  styleUrls: [
    './restaurant-filter.component.scss'
  ]
})
export class RestaurantFilterComponent {

  public grades = Object.keys(GRADES);

  @Input() public descriptions: Array<string>;
  @Input() public query: RestaurantQuery;

  @Output() public filterChange: EventEmitter<RestaurantQuery> = new EventEmitter<RestaurantQuery>();

  /**
   * Called when there has been a changed to the grade.
   *
   * @param {MatSelectChange} change
   */
  public gradesChanged(change: MatSelectChange): void {
    this.filterChange.emit(new RestaurantQuery(Object.assign({}, this.query, { grades: change.value })));
  }

  /**
   * Called when there has been a change to the cuisine description
   *
   * @param {MatSelectChange} change
   */
  public descriptionsChanged(change: MatSelectChange): void {
    this.filterChange.emit(new RestaurantQuery(Object.assign({}, this.query, { descriptions: change.value })));
  }

}
