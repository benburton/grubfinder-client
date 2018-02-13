import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { RestaurantListContainer } from './restaurant-list.container';
import { RestaurantListComponent } from './restaurant-list.component';
import { GradeBadgeModule } from '../grade-badge/grade-badge.module';
import { Store, StoreModule } from '@ngrx/store';
import { restaurantReducer } from '../../store/restaurant/restaurant.reducer';
import { RequestRestaurantsAction } from '../../store/restaurant/restaurant.actions';
import { Restaurant } from '../../models/restaurant.model';
import { PaginateQueryAction, ToggleSelectedRestaurantAction } from '../../store/restaurant-ui/restaurant-ui.actions';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

describe('RestaurantListContainer', () => {
  const restaurant: Restaurant = new Restaurant({
    inspections: [],
    grades: []
  });

  let component: RestaurantListContainer;
  let fixture: ComponentFixture<RestaurantListContainer>;
  let debugElement: DebugElement;
  let store: Store<any>;

  beforeEach(async(() => {
    const testBed = TestBed.configureTestingModule({
      imports: [
        GradeBadgeModule,
        InfiniteScrollModule,
        StoreModule.forRoot({
          restaurant: restaurantReducer
        })
      ],
      declarations: [
        RestaurantListContainer,
        RestaurantListComponent
      ]
    });
    store = testBed.get(Store);
    testBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListContainer);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    spyOn(store, 'dispatch').and.stub();
  });

  describe('#ngOnInit', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('dispatches RequestRestaurantsAction', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new RequestRestaurantsAction());
    });
  });

  describe('#restaurantToggle', () => {
    beforeEach(() => {
      component.restaurantToggle(restaurant);
    });

    it('dispatches ToggleSelectedRestaurantAction with restaurant', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new ToggleSelectedRestaurantAction(restaurant));
    });
  });

  describe('#scroll', () => {
    beforeEach(() => {
      component.scroll();
    });

    it('dispatches PaginateQueryAction', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new PaginateQueryAction());
    });
  });

});
