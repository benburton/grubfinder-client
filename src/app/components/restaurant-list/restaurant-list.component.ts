import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'gf-restaurant-list',
  template: `
    <div class="restaurant {{selected(restaurant) ? 'selected' : ''}}"
         (click)="restaurantToggle.emit(restaurant)"
         *ngFor="let restaurant of restaurants">
      <gf-grade-badge [grade]="restaurant.grade"></gf-grade-badge>
      {{restaurant.doingBusinessAs}}
    </div>
  `,
  styleUrls: [
    './restaurant-list.component.scss'
  ]
})
export class RestaurantListComponent {

  @Input() public restaurants: Array<Restaurant>;
  @Input() public selectedRestaurant: Restaurant;

  @Output() public restaurantToggle: EventEmitter<Restaurant> = new EventEmitter<Restaurant>();

  /**
   * Helper method for whether a provided Restaurant is currently selected
   *
   * @param {Restaurant} restaurant
   * @returns {boolean}
   */
  public selected(restaurant: Restaurant) {
    return !!this.selectedRestaurant && this.selectedRestaurant.equals(restaurant);
  }

}
