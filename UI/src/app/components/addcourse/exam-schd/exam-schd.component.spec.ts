import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSchdComponent } from './exam-schd.component';

describe('ExamSchdComponent', () => {
  let component: ExamSchdComponent;
  let fixture: ComponentFixture<ExamSchdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamSchdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamSchdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
