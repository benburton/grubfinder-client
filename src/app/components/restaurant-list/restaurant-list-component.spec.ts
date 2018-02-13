import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';

import { GradeBadgeModule } from 'app/components/grade-badge/grade-badge.module';
import { Restaurant } from 'app/models/restaurant.model';

import { RestaurantListComponent } from './restaurant-list.component';

describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;
  let debugElement: DebugElement;

  const restaurant = new Restaurant({
    grades: [], inspections: [], doingBusinessAs: 'Taco Bell'
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        GradeBadgeModule
      ],
      declarations: [
        RestaurantListComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.restaurants = [restaurant];
    fixture.detectChanges();
  });

  describe('.restaurant', () => {
    let restaurantEls: Array<DebugElement>;

    beforeEach(() => {
      restaurantEls = debugElement.queryAll(By.css('.restaurant'));
    });

    describe('#selected returns true', () => {
      beforeEach(() => {
        spyOn(component, 'selected').and.returnValue(true);
        fixture.detectChanges();
      });

      it(`has class 'selected'`, () => {
        restaurantEls.map(el => {
          expect(el.nativeElement.getAttribute('class')).toContain('selected');
        });
      });
    });

    describe('#selected returns false', () => {
      beforeEach(() => {
        spyOn(component, 'selected').and.returnValue(false);
        fixture.detectChanges();
      });

      it(`does not have class 'selected'`, () => {
        restaurantEls.forEach(el => {
          expect(el.nativeElement.getAttribute('class')).not.toContain('selected');
        });
      });
    });

    describe('click event', () => {
      beforeEach(() => {
        spyOn(component.restaurantToggle, 'emit').and.stub();
        restaurantEls.map(el => el.nativeElement).forEach((el) => {
          el.dispatchEvent(new Event('click'));
        });
      });

      it('emits restaurantToggle with restaurant', () => {
        component.restaurants.forEach(r =>
          expect(component.restaurantToggle.emit).toHaveBeenCalledWith(r)
        );
      });
    });

    it('contains restaurant.doingBusinessAs', () => {
      restaurantEls.map((el, index) => {
        expect(el.nativeElement.innerText).toContain(component.restaurants[index].doingBusinessAs);
      });
    });
  });

  describe('#selected', () => {
    beforeEach(() => {
      component.selectedRestaurant = restaurant;
      fixture.detectChanges();
    });

    describe('parameter equals selectedRestaurant', () => {

      it('returns true', () => {
        expect(component.selected(restaurant)).toEqual(true);
      });
    });

    describe('parameter does not equal selectedRestaurant', () => {
      const anotherRestaurant = new Restaurant({ camis: '1234', grades: [], inspections: [] });
      it('returns false', () => {
        expect(component.selected(anotherRestaurant)).toEqual(false);
      });
    });
  });
});
