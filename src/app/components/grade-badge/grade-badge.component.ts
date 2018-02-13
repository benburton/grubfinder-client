import { Component, Input } from '@angular/core';

import { Grade } from 'app/models/grade.model';

/**
 * Displays a grade badge indicating the grade the restaurant has received.
 */
@Component({
  'selector': 'gf-grade-badge',
  'template': `
    <div
      matTooltip="Graded on {{grade.date | date:'M/d/yy'}}" matTooltipPosition="above"
      class="grade-badge-{{modifier}} grade-badge grade-{{grade.grade.toLowerCase()}}">
      {{grade | gradeText}}
    </div>
    <div *ngIf="modifier === 'large'" class="grade-badge-copy">
      {{grade | gradeText: 'full' }}
    </div>
  `,
  'styleUrls': [
    './grade-badge.component.scss'
  ]
})
export class GradeBadgeComponent {

  @Input() public grade: Grade;
  @Input() public modifier: 'small' | 'large' = 'small';

}
