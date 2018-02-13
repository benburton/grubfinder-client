import { InspectionDetailsComponent } from './inspection-details.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

describe('InspectionDetailsComponent', () => {
  let component: InspectionDetailsComponent;
  let fixture: ComponentFixture<InspectionDetailsComponent>;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        InspectionDetailsComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionDetailsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  describe('render', () => {
    xit('todo', () => {

    });
  });

});
