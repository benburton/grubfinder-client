import { Pipe, PipeTransform } from '@angular/core';

import { Grade } from 'app/models/grade.model';
import { EMPTY_GRADE, GRADES } from 'app/constants/grade.constants';

/**
 * A pipe which formats a Grade by letter or by it's full string, based on provided parameter
 */
@Pipe({
  name: 'gradeText'
})
export class GradeTextPipe implements PipeTransform {

  public transform(grade: Grade, length: 'full' | 'letter' = 'letter'): any {
    const reference = Object.entries(GRADES).find(([key, ]) => grade.grade === key);
    const [ letter, copy ] = reference ? reference : [EMPTY_GRADE, GRADES[EMPTY_GRADE]];
    if (length === 'letter') {
      return letter;
    }
    return copy.length > 1 ? copy : undefined;
  }

}
