import { EMPTY_GRADE } from 'app/constants/grade.constants';

import { Grade } from './grade.model';

describe('Grade', () => {

  describe('#empty', () => {
    it('returns a Grade with EMPTY_GRADE', () => {
      expect(Grade.empty).toEqual(new Grade({ grade: EMPTY_GRADE }));
    });
  });

});
