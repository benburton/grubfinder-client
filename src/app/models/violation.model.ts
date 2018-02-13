/**
 * Represents a health code violation
 */
export class Violation {

  public code: string;
  public description: string;
  public critical: boolean | null;

  constructor(json: any) {
    this.code = json.code;
    this.description = json.description;
    this.critical = json.critical;
  }

}
