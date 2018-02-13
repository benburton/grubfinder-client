import { NgModule } from '@angular/core';

import { GradeTextPipe } from './grade-text.pipe';

@NgModule({
  declarations: [
    GradeTextPipe,
  ],
  exports: [
    GradeTextPipe,
  ]
})

export class GradeTextPipeModule { }
