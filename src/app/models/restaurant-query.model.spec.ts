import { RestaurantQuery, PAGE_SIZE } from './restaurant-query.model';

describe('RestaurantQuery', () => {

  const restaurantQuery: RestaurantQuery = new RestaurantQuery({
    grades: ['A', 'B'], descriptions: ['Pizza', 'Italian']
  });

  function withSkip(skip: number): RestaurantQuery {
    return new RestaurantQuery(Object.assign({}, restaurantQuery, {
      skip: skip
    }));
  }

  describe('#paginate', () => {
    it('returns a copy of the object with skip increased by PAGE_SIZE', () => {
      const skipped = withSkip(10);
      expect(skipped.paginate()).toEqual(new RestaurantQuery(Object.assign({}, skipped, {
        skip: skipped.skip + PAGE_SIZE
      })));
    });
  });

  describe('#reset', () => {
    it('returns a copy of the object with skip set to zero', () => {
      const skipped = withSkip(30);
      expect(skipped.reset()).toEqual(new RestaurantQuery(Object.assign({}, skipped, {
        skip: 0
      })));
    });
  });

  describe('#append', () => {
    describe('skip is non-zero', () => {
      it('returns true', () => {
        expect(withSkip(30).append).toEqual(true);
      });
    });

    describe('skip is zero', () => {
      it('returns false', () => {
        expect(withSkip(0).append).toEqual(false);
      });
    });
  });

  describe('#params', () => {
    const skip = 30;
    const model = withSkip(skip);
    const params = model.params;

    describe('descriptions param', () => {
      it('equals comma-separated concatenation of descriptions', () => {
        expect(params.get('descriptions')).toEqual(model.descriptions.join(','));
      });
    });

    describe('grades param', () => {
      it('equals comma-separated concatenation of ', () => {
        expect(params.get('grades')).toEqual(model.grades.join(','));
      });
    });

    describe('skip param', () => {
      it('equals string representation of skip', () => {
        expect(params.get('skip')).toEqual(model.skip.toString());
      });
    });

    describe('limit param', () => {
      it('equals string representation of PAGE_SIZE', () => {
        expect(params.get('limit')).toEqual(PAGE_SIZE.toString());
      });
    });
  });

});
