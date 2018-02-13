import { Component, Input } from '@angular/core';

import { Restaurant } from 'app/models/restaurant.model';

/**
 * Displays details relevant to inspections that have occurred for a given restaurant
 */
@Component({
  selector: 'gf-inspection-details',
  templateUrl: './inspection-details.component.html',
  styleUrls: [
    './inspection-details.component.scss'
  ]
})
export class InspectionDetailsComponent {

  @Input() public restaurant: Restaurant;

}
