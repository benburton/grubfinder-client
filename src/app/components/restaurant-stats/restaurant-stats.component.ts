import { Component, Input } from '@angular/core';
import { RestaurantStats } from '../../models/restaurant-stats.model';
import { INSPECTION_COLORS } from '../../constants/inspection-colors.constants';

@Component({
  selector: 'gf-restaurant-stats',
  template: `
    <div class="inspection-stats" *ngIf="stats">
      <div class="total"><strong>Total:</strong> {{stats.total}}</div>
      <div class="chart">
        <ngx-charts-pie-chart
          [results]="chartData"
          [scheme]="colors"
          [labels]="true"
          [view]="view"
        ></ngx-charts-pie-chart>
      </div>
    </div>`,
  styleUrls: [
    './restaurant-stats.component.scss'
  ]
})
export class RestaurantStatsComponent {

  public view = [400, 400];

  private _stats: RestaurantStats;
  public chartData: Array<any> = [];

  public colors = {
    domain: Object.values(INSPECTION_COLORS)
  };

  @Input() public set stats(stats: RestaurantStats) {
    this._stats = stats;
    if (this._stats) {
      const data = this._stats.pieChartData;
      if (data.length > 0) {
        this.chartData = [...data];
      }
    }
  }

  public get stats(): RestaurantStats {
    return this._stats;
  }

}
