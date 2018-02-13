import { InspectionDetailsComponent } from './inspection-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GradeBadgeModule } from '../grade-badge/grade-badge.module';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatExpansionModule,
    GradeBadgeModule
  ],
  declarations: [
    InspectionDetailsComponent
  ],
  exports: [
    InspectionDetailsComponent
  ]
})
export class InspectionDetailsModule { }
