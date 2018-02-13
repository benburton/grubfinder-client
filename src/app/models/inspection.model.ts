import { Violation } from './violation.model';

export class Inspection {

  public date: Date;
  public inspectionType: string;
  public score: number;

  public violations: Array<Violation> = [];

  constructor(json: any) {
    this.date = new Date(json.date);
    this.inspectionType = json.inspectionType;
    this.score = json.score;
    this.violations = json.violations.filter(v => v !== null).map(v => new Violation(v));
  }

}
