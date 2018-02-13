import { GradeBadgeComponent } from './grade-badge.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { GradeBadgeModule } from './grade-badge.module';
import { Grade } from '../../models/grade.model';

describe('GradeBadgeComponent', () => {

  let component: GradeBadgeComponent;
  let fixture: ComponentFixture<GradeBadgeComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        GradeBadgeModule
      ],
      declarations: [
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeBadgeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('renders', () => {
    component.grade = new Grade({ grade: 'b' });
    fixture.detectChanges();
    // TODO: Write me!
  });

});
