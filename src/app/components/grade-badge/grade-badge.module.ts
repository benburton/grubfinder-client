import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material';

import { GradeTextPipeModule } from 'app/pipes/grade-text/grade-text.pipe.module';

import { GradeBadgeComponent } from './grade-badge.component';

@NgModule({
  imports: [
    CommonModule,
    GradeTextPipeModule,
    MatTooltipModule
  ],
  declarations: [
    GradeBadgeComponent
  ],
  exports: [
    GradeBadgeComponent
  ]
})
export class GradeBadgeModule { }
