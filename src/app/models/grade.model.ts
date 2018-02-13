import { EMPTY_GRADE } from 'app/constants/grade.constants';

export class Grade {

  public grade: string;
  public date: Date;

  constructor(json: any) {
    this.grade = json.grade;
    this.date = json.date ? new Date(json.date) : undefined;
  }

  static get empty(): Grade {
    return new Grade({ grade: EMPTY_GRADE });
  }

}
